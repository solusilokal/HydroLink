@echo off
title Preview HydroLink
cd /d "%~dp0"
echo ====================================================
echo  Menjalankan Preview HydroLink Mini Website...
echo  Browser akan terbuka otomatis di http://localhost:3000
echo ====================================================
start http://localhost:3000
call npm.cmd run dev
pause
