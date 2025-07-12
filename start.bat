@echo off
echo ========================================
echo    Démarrage de Marianne - IA Republique
echo ========================================

echo.
echo 1. Démarrage du backend Python...
cd backend
start "Backend Marianne" cmd /k "python -m venv venv && venv\Scripts\activate && pip install -r requirements.txt && uvicorn main:app --reload --host 0.0.0.0 --port 8000"

echo.
echo 2. Attente de 5 secondes pour le démarrage du backend...
timeout /t 5 /nobreak > nul

echo.
echo 3. Démarrage du frontend React...
cd ..\frontend
start "Frontend Marianne" cmd /k "npm install && npm run dev"

echo.
echo ========================================
echo    Marianne est en cours de démarrage...
echo    Backend: http://localhost:8000
echo    Frontend: http://localhost:5173
echo ========================================
echo.
pause 