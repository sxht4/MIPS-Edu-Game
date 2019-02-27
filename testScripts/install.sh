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
linux(){
OSID=$(cat /etc/os-release | grep -w "ID")
if [ "$OSID" = "ID=ubuntu" ] || [ "$OSID" = "ID=debian" ]; then
echo "INFO: Performing necessary software update"
apt update
apt upgrade -y
echo -e "INFO: Checking if curl presents? \c"
if hash curl 2>/dev/null; then
echo -e "Yes, version: \c"
curl -V | head -1
else
echo "No"
echo "INFO: Installing curl since you do not have it on your machine"
apt install curl -y
fi
if hash nodejs 2>/dev/null; then
install_mocha
exit 0
else
echo "INFO: Installing nodejs since you do not have it on your machine"
echo "INFO: Adding key"
curl -sL https://deb.nodesource.com/setup_10.x | bash -
echo "INFO: Done adding key"
echo "INFO: Installing nodejs"
apt install nodejs -y
echo "INFO: Done installing nodejs"
install_mocha
exit 0
fi
elif [ '$OSID" = "ID="centos"' ] || [ '$OSID" = "ID="rhel"' ]; then
echo "Performing nececssary OS updates"
yum update -y
yum upgrade -y
echo -e "INFO: Checking if curl presents? \c"
if hash curl 2>/dev/null; then
echo -e "Yes, version: \c"
curl -V | head -1
else
echo "No"
echo "INFO: Installing curl since you do not have it on your machine"
yum install curl -y
fi
if hash npm 2>/dev/null; then
install_mocha
exit 0
else
echo "INFO: Installing nodejs since you do not have it on your machine"
echo "INFO: Adding key"
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
echo "INFO: Done adding key"
echo "INFO: Installing nodejs"
yum install nodejs -y
echo "INFO: Done installing nodejs"
install_mocha
exit 0
fi

else
echo "INFO: Your Linux distribution is not yet supported"
echo "$OSID"
fi
}
function macOS(){
echo "WARNING: Your machine is running macOS, and support is currently in beta"
echo "INFO: Installing brew in 10 seconds"
sleep 10
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
echo "INFO: Begin pre-installation check"
brew doctor
echo "INFO: Updating brew"
brew update
echo "INFO: Installing npm"
brew install node
install_mocha
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
function install_mocha(){
echo "INFO: Performing system check at pre-installation" 
echo -e "INFO: npm version: \c"
npm -v
echo -e "INFO: node version: \c"
node -v
npm install -g npm
npm install -g mocha
npm install -g chai
npm install -g mocha-simple-html-reporter
npm install request --save
echo "INFO: Done installing 'mocha', 'mocha-simple-html-reporter'"
}
case "${unameOut}" in
    Linux*)     linux;;
    Darwin*)    macOS;;
    CYGWIN*)    cygwin;;
    MINGW*)     mingw;;
    *)          others;;
esac