@echo off
echo ========================================
echo    Démarrage de Marianne - Backend
echo ========================================

cd /d E:\Marianne\backend
call venv\Scripts\activate.bat
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000

pause 