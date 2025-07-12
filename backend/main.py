from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Marianne API", version="1.0.0")

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèles Pydantic
class UserInfo(BaseModel):
    nom: str
    prenom: str
    date_naissance: str
    numero_securite_sociale: str
    adresse: str
    email: str

class Message(BaseModel):
    content: str
    type: str = "user"  # "user" ou "assistant"

class ConversationRequest(BaseModel):
    message: str
    user_id: Optional[str] = None

class ConversationResponse(BaseModel):
    response: str
    buttons: List[dict]
    user_info: Optional[UserInfo] = None

# Données simulées
MOCK_USER = UserInfo(
    nom="Dupont",
    prenom="Marie",
    date_naissance="15/03/1985",
    numero_securite_sociale="1 85 03 15 123 456 78",
    adresse="123 Rue de la République, 75001 Paris",
    email="marie.dupont@email.fr"
)

# Réponses simulées de l'IA
RESPONSES = {
    "default": {
        "response": "Bonjour ! Je suis Marianne, votre assistante républicaine. Comment puis-je vous aider aujourd'hui ?",
        "buttons": [
            {"text": "Payer mes impôts", "action": "impots"},
            {"text": "Demander un acte de naissance", "action": "acte_naissance"},
            {"text": "Prendre rendez-vous", "action": "rdv"},
            {"text": "Créer mon entreprise", "action": "entreprise"},
            {"text": "Questions juridiques simples", "action": "juridique"}
        ]
    },
    "impots": {
        "response": "Je vais vous aider pour vos impôts. Quel type de paiement souhaitez-vous effectuer ?",
        "buttons": [
            {"text": "Impôt sur le revenu", "action": "impot_revenu"},
            {"text": "Taxe foncière", "action": "taxe_fonciere"},
            {"text": "Taxe d'habitation", "action": "taxe_habitation"},
            {"text": "Retour au menu principal", "action": "default"}
        ]
    },
    "acte_naissance": {
        "response": "Pour demander un acte de naissance, j'ai besoin de quelques informations. Votre demande sera traitée dans les 48h.",
        "buttons": [
            {"text": "Confirmer la demande", "action": "confirmation_acte"},
            {"text": "Annuler", "action": "default"}
        ]
    },
    "rdv": {
        "response": "Je peux vous aider à prendre rendez-vous. Quel service vous intéresse ?",
        "buttons": [
            {"text": "Préfecture", "action": "rdv_prefecture"},
            {"text": "Mairie", "action": "rdv_mairie"},
            {"text": "Sécurité sociale", "action": "rdv_cpam"},
            {"text": "Retour au menu principal", "action": "default"}
        ]
    },
    "entreprise": {
        "response": "Créer une entreprise, excellent choix ! Quel type d'entreprise souhaitez-vous créer ?",
        "buttons": [
            {"text": "Auto-entrepreneur", "action": "auto_entrepreneur"},
            {"text": "SARL", "action": "sarl"},
            {"text": "SAS", "action": "sas"},
            {"text": "Retour au menu principal", "action": "default"}
        ]
    },
    "juridique": {
        "response": "Je peux vous aider pour vos questions juridiques. Quel domaine vous intéresse ?",
        "buttons": [
            {"text": "Droit du travail", "action": "droit_travail"},
            {"text": "Droit de la famille", "action": "droit_famille"},
            {"text": "Droit commercial", "action": "droit_commercial"},
            {"text": "Retour au menu principal", "action": "default"}
        ]
    }
}

@app.get("/")
async def root():
    return {"message": "Marianne API - IA Républicaine"}

@app.post("/auth/france-connect")
async def simulate_france_connect():
    """Simule l'authentification France Connect"""
    return {
        "success": True,
        "user_info": MOCK_USER,
        "message": "Connexion réussie avec France Connect"
    }

@app.post("/conversation", response_model=ConversationResponse)
async def handle_conversation(request: ConversationRequest):
    """Gère la conversation avec Marianne"""
    
    # Analyse simple du message pour déterminer l'action
    message_lower = request.message.lower()
    
    if "impôt" in message_lower or "impot" in message_lower:
        action = "impots"
    elif "acte" in message_lower and "naissance" in message_lower:
        action = "acte_naissance"
    elif "rendez" in message_lower or "rdv" in message_lower:
        action = "rdv"
    elif "entreprise" in message_lower or "créer" in message_lower:
        action = "entreprise"
    elif "juridique" in message_lower or "droit" in message_lower:
        action = "juridique"
    else:
        action = "default"
    
    response_data = RESPONSES.get(action, RESPONSES["default"])
    
    return ConversationResponse(
        response=response_data["response"],
        buttons=response_data["buttons"],
        user_info=MOCK_USER
    )

@app.get("/user/info")
async def get_user_info():
    """Récupère les informations de l'utilisateur connecté"""
    return MOCK_USER

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 