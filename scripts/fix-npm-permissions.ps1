# Set execution policy for current user only
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Run npm install using the cmd version to avoid PowerShell restrictions
& "$env:ProgramFiles\nodejs\npm.cmd" install
