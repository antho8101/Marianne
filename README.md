# Marianne - IA Républicaine

Marianne est une IA républicaine, minimaliste, qui centralise tous les services publics de la France dans une interface conversationnelle ultra-simple.

## 🎯 Vision

Une page vierge, un seul champ de texte : « Comment puis-je vous aider ? ». Des démarches administratives aux conseils légaux, en passant par la prise de rendez-vous et la création d'entreprise, tout devient accessible par une conversation.

## 🚀 MVP

Ce MVP présente l'idée au gouvernement Français (Beta.gouv.fr, DINUM, Conseiller numérique du cabinet du Premier ministre).

### Fonctionnalités

- **Authentification France Connect** (simulée)
- **Interface conversationnelle fluide** - type diaporama
- **Boutons d'action contextuels** générés automatiquement
- **Simulation des services publics** (démarches, paiements, etc.)

## 🛠️ Stack Technique

- **Frontend** : React + TypeScript + Vite
- **Backend** : Python + FastAPI
- **Styling** : Tailwind CSS
- **Font** : Faustina (Google Fonts)

## 🎨 Design

- **Couleurs** : 
  - Fond blanc
  - Bleu foncé : #143552
  - Rouge accent : #DF3A2F
- **Approche** : Mobile-first, responsive
- **Interface** : Minimaliste, conversationnelle

## 📁 Structure

```
marianne/
├── frontend/          # Application React
├── backend/           # API FastAPI
├── assets/            # Images, logos
└── docs/             # Documentation
```

## 🚀 Installation

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou `venv\Scripts\activate` sur Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🔐 Authentification

Pour le MVP, l'authentification France Connect est simulée. Le bouton "Se connecter avec France Connect" redirige directement vers l'interface conversationnelle.

## 🤖 IA

L'IA utilise Mistral (simulée pour le MVP) pour générer des réponses contextuelles et des boutons d'action intelligents. 