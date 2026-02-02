@echo off
echo Starting MongoDB Service...
echo.
net start MongoDB
echo.
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! MongoDB is now running.
    echo You can now register your admin account at: http://localhost:5173/admin/register
) else (
    echo FAILED! Please make sure you ran this script as Administrator.
    echo Right-click this file and select "Run as administrator"
)
echo.
pause
