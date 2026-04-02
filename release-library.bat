@echo off
setlocal

cd /d "%~dp0"
echo Lancement du script de release...
node scripts/release.js

echo.
echo Appuie sur une touche pour fermer cette fenetre.
pause >nul
