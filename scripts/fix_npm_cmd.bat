@echo off
if exist node_modules rd /s /q node_modules
if exist package-lock.json del /f /q package-lock.json
"%ProgramFiles%\nodejs\npm.cmd" install
