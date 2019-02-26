#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
echo "INFO: Getting info about your OS"
unameOut="$(uname -s)"
echo -e "INFO: Are you running this script as root or sudo? \c"
if [[ $EUID -ne 0 ]]; then
   echo "No"
   echo "ERROR: This script must be run as root since it installs some packages necessary for installing npm and mocha" 
   exit 1
else
echo "Yes"
fi
echo "INFO: This script will be updated when version 1 is about to be released, and please stay tuned!"
exit 0
linux(){

}
function macOS(){

}
function cygwin(){

}
function mingw(){

}
function others(){
    
}
case "${unameOut}" in
    Linux*)     linux;;
    Darwin*)    macOS;;
    CYGWIN*)    cygwin;;
    MINGW*)     mingw;;
    *)          others;;
esac