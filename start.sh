#!/bin/bash

echo "========================================"
echo "   Démarrage de Marianne - IA Republique"
echo "========================================"

echo ""
echo "1. Démarrage du backend Python..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

echo ""
echo "2. Attente de 5 secondes pour le démarrage du backend..."
sleep 5

echo ""
echo "3. Démarrage du frontend React..."
cd ../frontend
npm install
npm run dev &
FRONTEND_PID=$!

echo ""
echo "========================================"
echo "   Marianne est en cours de démarrage..."
echo "   Backend: http://localhost:8000"
echo "   Frontend: http://localhost:5173"
echo "========================================"
echo ""

# Attendre que les processus se terminent
wait $BACKEND_PID $FRONTEND_PID 