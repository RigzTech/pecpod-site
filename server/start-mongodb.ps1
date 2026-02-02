# MongoDB Startup Script
# This runs MongoDB directly without needing the Windows service

Write-Host "Starting MongoDB Server..." -ForegroundColor Green
Write-Host "MongoDB will run in this window. Keep it open while using the app." -ForegroundColor Yellow
Write-Host ""

$mongoPath = "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
$dataPath = "C:\data\db"

if (Test-Path $mongoPath) {
    Write-Host "MongoDB found at: $mongoPath" -ForegroundColor Cyan
    Write-Host "Data directory: $dataPath" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press Ctrl+C to stop MongoDB when you're done." -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Gray
    Write-Host ""
    
    & $mongoPath --dbpath $dataPath
} else {
    Write-Host "ERROR: MongoDB not found at $mongoPath" -ForegroundColor Red
    Write-Host "Please check your MongoDB installation path." -ForegroundColor Red
    pause
}
