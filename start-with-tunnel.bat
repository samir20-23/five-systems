@echo off
echo Starting local development server on port 3000...
start cmd /k "npm run dev"
timeout /t 10 >nul
echo Opening tunnel with LocalTunnel...
npx localtunnel --port 3000