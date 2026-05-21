@echo off
setlocal EnableDelayedExpansion

REM ============================================================
REM  Anxi website one-click deploy
REM  Commits all changes and pushes to GitHub, which triggers
REM  Netlify to auto-deploy the live site (anxi.com.au).
REM  No Netlify login required - uses your saved GitHub login.
REM ============================================================

REM ----- Set to 1 for verbose debug logging, 0 for quiet -----
set DEBUG=0

set REPO=G:\My Drive\Luci Website

echo.
echo  Deploying Anxi website to anxi.com.au...
echo.

cd /d "%REPO%"
if !DEBUG!==1 echo [DEBUG] Working directory: %CD%

REM ----- Stage every change -----
if !DEBUG!==1 echo [DEBUG] Running: git add -A
git add -A

REM ----- Commit only if something is actually staged -----
git diff --cached --quiet
set STAGED=!errorlevel!
if !DEBUG!==1 echo [DEBUG] Staged changes flag ^(1=changes, 0=none^): !STAGED!

if !STAGED!==1 (
    for /f "usebackq tokens=*" %%i in (`powershell -NoProfile -Command "(Get-Date).ToString('yyyy-MM-dd_HH-mm')"`) do set STAMP=%%i
    if !DEBUG!==1 echo [DEBUG] Commit message: Site update !STAMP!
    git commit -m "Site update !STAMP!"
) else (
    echo  No new file changes - checking for unpushed commits...
)

REM ----- Push to GitHub - this triggers the Netlify auto-deploy -----
if !DEBUG!==1 echo [DEBUG] Running: git push origin main
git push origin main
set PUSHCODE=!errorlevel!
if !DEBUG!==1 echo [DEBUG] git push exit code: !PUSHCODE!

echo.
if !PUSHCODE!==0 (
    echo  Done! GitHub received the update.
    echo  Netlify will auto-deploy the live site in ~1-2 minutes.
) else (
    echo  PUSH FAILED ^(exit code !PUSHCODE!^) - nothing was deployed.
    echo  Scroll up for the git error message.
)
echo.
pause
