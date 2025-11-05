@echo off
echo Cleaning up previous installation...

REM Remove existing node_modules and package-lock if they exist
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo Installing dependencies...

REM Use npm.cmd directly to avoid PowerShell issues
"%ProgramFiles%\nodejs\npm.cmd" cache clean --force
"%ProgramFiles%\nodejs\npm.cmd" install

REM Check if install succeeded
if errorlevel 1 (
    echo Error: npm install failed
    echo Please try running as administrator if you continue to have issues
    pause
    exit /b 1
) else (
    echo Installation completed successfully
    pause
)
