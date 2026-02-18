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
powershell -Command "if (Test-Path 'server\.env') { Copy-Item -Path 'server\.env' -Destination 'cpanel-deployment\server\.env' -Force }"
xcopy "server\models" "cpanel-deployment\server\models\" /E /I /Y
xcopy "server\routes" "cpanel-deployment\server\routes\" /E /I /Y
xcopy "server\middleware" "cpanel-deployment\server\middleware\" /E /I /Y
if not exist "cpanel-deployment\server\uploads" mkdir "cpanel-deployment\server\uploads"

REM Copy the SPECIAL cPanel package.json to the ROOT of deployment
if exist "package_cpanel.json" copy "package_cpanel.json" "cpanel-deployment\package.json" /Y
REM Copy the ESM entry point to the ROOT of deployment
if exist "index.js" copy "index.js" "cpanel-deployment\index.js" /Y
if exist ".htaccess" copy ".htaccess" "cpanel-deployment\.htaccess" /Y

echo Server files copied!
echo.

echo [4/4] Copying built frontend...
xcopy "dist\*" "cpanel-deployment\public\" /E /I /Y
echo Frontend files copied!
echo.

REM Step 5: Create ZIP file
echo [5/5] Creating deployment ZIP file...
if exist "deploy_to_cpanel.zip" del "deploy_to_cpanel.zip"
echo Waiting for file handles to release...
powershell -Command "Start-Sleep -s 3; Compress-Archive -Path 'cpanel-deployment\*' -DestinationPath 'deploy_to_cpanel.zip' -Force"
echo ========================================
echo Final Build Complete! 🚀
echo ========================================
echo.
echo 1. UPLOAD: Upload 'deploy_to_cpanel.zip' to your public_html.
echo 2. EXTRACT: Extract it there.
echo 3. CONFIG: In cPanel, click "RUN NPM INSTALL" and set "Application startup file" to 'index.js'.
echo 4. ENV: Ensure 'MONGO_URI' and 'NODE_ENV=production' are saved in cPanel.
echo 5. RESTART: Click the RESTART button.
echo.
echo Your site will be live!
pause
explorer "cpanel-deployment"
