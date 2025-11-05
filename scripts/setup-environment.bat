@echo off
setlocal enabledelayedexpansion

echo === Portfolio Project Environment Setup ===

REM Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing Node.js...
    curl -o nodejs_install.msi https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi
    start /wait msiexec /i nodejs_install.msi /qn
    del nodejs_install.msi
)

REM Refresh environment variables
call refreshenv.cmd >nul 2>nul

REM Install global dependencies
call npm install -g typescript @types/node @types/react @types/react-dom

REM Clean existing project dependencies
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

REM Install project dependencies
echo Installing project dependencies...
call npm install next@latest react@latest react-dom@latest tailwindcss@latest postcss@latest autoprefixer@latest
call npm install @radix-ui/react-alert-dialog class-variance-authority clsx tailwind-merge tailwindcss-animate

REM Setup TypeScript
if not exist tsconfig.json (
    call npx tsc --init
)

REM Setup Tailwind
if not exist tailwind.config.js (
    call npx tailwindcss init
)

REM Install dev dependencies
call npm install -D @types/node @types/react @types/react-dom typescript

echo === Setup Complete ===
echo Please run 'npm run dev' to start the development server
pause
