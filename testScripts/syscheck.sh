#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
echo "INFO: Getting info about your OS"
unameOut="$(uname -s)"
linux(){
echo "INFO: Your OS version strings"
cat /etc/os-release
echo "INFO: End of OS version strings"
if hash npm 2>/dev/null; then
echo -e "INFO: npm presents, ver: \c"
npm -v
echo -e "INFO: node version: \c"
node -v
echo "INFO: Checking whether mocha is installed or not"
npm list -g --depth=0 | grep mocha
else
echo "INFO: NPM and Mocha are not present!"
echo "INFO: You must have them in order to debug this project"
echo "INFO: Consider install it through ./install.sh to resolve dependencies problems"
fi
}
function macOS(){
echo "INFO: Your machine is running macOS, which is not yet supported"
}
function cygwin(){
echo "INFO: You are using cygwin, which is not yet supported"
}
function mingw(){
echo "INFO: You are using mingw, which is not yet supported"
}
function others(){
echo "ERROR: Unknown OS"
}
case "${unameOut}" in
    Linux*)     linux;;
    Darwin*)    macOS;;
    CYGWIN*)    cygwin;;
    MINGW*)     mingw;;
    *)          others;;
esac