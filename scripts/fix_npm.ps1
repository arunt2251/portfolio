# Remove node_modules and package-lock.json if present
if (Test-Path -Path "node_modules") { Remove-Item -Path "node_modules" -Recurse -Force }
if (Test-Path -Path "package-lock.json") { Remove-Item -Path "package-lock.json" -Force }

# Allow local scripts to run for the current user (does not require admin)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Run npm using the .cmd wrapper to avoid PowerShell script execution issues
& "$env:ProgramFiles\nodejs\npm.cmd" install
