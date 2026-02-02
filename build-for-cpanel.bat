@echo off
REM Build Script for cPanel Deployment
REM This script builds the frontend and prepares files for upload

echo ========================================
echo Pecpod Studios - cPanel Build Script
echo ========================================
echo.

REM Step 1: Build Frontend
echo [1/4] Building frontend...
cd /d "%~dp0"
call npm run build
if errorlevel 1 (
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)
echo Frontend build completed successfully!
echo.

REM Step 2: Create deployment folder
echo [2/4] Creating deployment folder...
if exist "cpanel-deployment" rmdir /s /q "cpanel-deployment"
mkdir "cpanel-deployment"
mkdir "cpanel-deployment\server"
mkdir "cpanel-deployment\public"
echo Deployment folder created!
echo.

REM Step 3: Copy server files
echo [3/4] Copying server files...
xcopy "server\*.js" "cpanel-deployment\server\" /Y
xcopy "server\package.json" "cpanel-deployment\server\" /Y
xcopy "server\.env.template" "cpanel-deployment\server\" /Y
xcopy "server\models" "cpanel-deployment\server\models\" /E /I /Y
xcopy "server\routes" "cpanel-deployment\server\routes\" /E /I /Y
xcopy "server\middleware" "cpanel-deployment\server\middleware\" /E /I /Y
mkdir "cpanel-deployment\server\uploads"
echo Server files copied!
echo.

REM Step 4: Copy built frontend
echo [4/4] Copying built frontend...
xcopy "dist\*" "cpanel-deployment\public\" /E /I /Y
echo Frontend files copied!
echo.

echo ========================================
echo Build Complete!
echo ========================================
echo.
echo Your deployment files are in: cpanel-deployment\
echo.
echo Next Steps:
echo 1. Update cpanel-deployment\server\.env.template with your MongoDB Atlas credentials
echo 2. Rename .env.template to .env
echo 3. Upload the entire cpanel-deployment folder to your cPanel hosting
echo 4. Follow the deployment guide for final configuration
echo.
echo Press any key to open deployment folder...
pause > nul
explorer "cpanel-deployment"
