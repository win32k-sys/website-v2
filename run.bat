@echo off
set /p project_path=Paste the folders path and press Enter: 

echo Changing directory to %project_path% from root...
cd /d %project_path%

if not exist node_modules (
  echo Express is not installed. Installing Express...
  npm install express --save
) else (
  echo Express is already installed.
)

echo Starting Server...
npm start

pause