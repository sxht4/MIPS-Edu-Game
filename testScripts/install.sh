#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
echo -e "INFO: Getting info about your OS\c"
unameOut="$(uname -s)"
echo -e "\e[32m done \e[0m"
echo "INFO: Your OS string: $unameOut"
echo -e "INFO: Are you running this script as root or sudo? \c"
if [[ $EUID -ne 0 ]]; then
   echo -e "\e[31mNo \e[0m"
   echo "ERROR: This script must be run as root since it installs some packages necessary for installing npm and mocha"
   echo "INFO: Restart it as 'sudo $0 $1 $2' instead" 
   exit 1
else
echo -e "\e[32mYes \e[0m"
fi
counter(){
echo "INFO: Your parameter $1"
if [ "$1" = "--disable-timer" ]; then
echo "INFO: Timer disabled"
else
echo -e "INFO: Counting \c"
echo -e "5\c"
sleep 1
echo -e "..4\c"
sleep 1
echo -e "..3\c"
sleep 1
echo -e "..2\c"
sleep 1
echo -e "..1\c"
sleep 1
echo -e "..0"
fi
}
function linux(){
OSID=$(cat /etc/os-release | grep -w "ID")
OSLIKE=$(cat /etc/os-release | grep -w "ID_LIKE")
if [ "$OSID" = "ID=ubuntu" ] || [ "$OSID" = "ID=debian" ] || [ "$OSLIKE" = "ID_LIKE=debian" ]; then
counter $2
echo "INFO: Starting installer..."
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
exit 255
fi
}
function macOS(){
echo "WARNING: Your machine is running macOS, and support is currently in beta"
echo "INFO: Installing brew in 5 seconds"
counter $2
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
exit 255
}
function mingw(){
echo "INFO: You are using mingw, which is not yet supported"
exit 255
}
function others(){
echo "ERROR: Unknown OS"
exit 255
}
function post_installation(){
echo "INFO: Performing post-installation check"
echo "INFO: Checking required packages"
echo "INFO: 'mocha' status"
npm list -g --depth=0 | grep mocha
echo "INFO: 'chai' status"
npm list -g --depth=0 | grep chai
echo "INFO: 'mocha-simple-html-reporter' status"
npm list -g --depth=0 | grep mocha-simple-html-reporter
echo "INFO: Running dummy test case, which both of them should pass"
mocha dummy.js
exit_code=$?
if [ "$exit_code" != "0" ]; then
echo "ERROR: Non-zero exit code detected, this script will stop running"
echo "INFO: Your exit code $exit_code"
echo "INFO: Please correct this error by looking into error messages"
exit $exit_code
else
echo "INFO: Running test cases of this project"
npm test
fi
}
function install_mocha(){
echo "INFO: Performing system check at pre-installation" 
echo -e "INFO: npm version: \c"
npm -v
echo -e "INFO: node version: \c"
node -v
npm install -g npm mocha chai mocha-simple-html-reporter
echo "INFO: Done installing 'mocha', 'mocha-simple-html-reporter'"
echo "INFO: Installing optional packages"
npm install -g babel-core babel-preset-es2015 babel-preset-react browserify
npm install request --save
post_installation
}
function linux_check(){
echo "INFO: You are running Linux"
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
function macOS_check(){
echo "INFO: Your machine is running macOS, and support is currently in beta"
echo -e "INFO: brew version: \c"
brew -v
}
function system_check(){
case "${unameOut}" in
    Linux*)     linux_check;;
    Darwin*)    macOS_check;;
    CYGWIN*)    cygwin;;
    MINGW*)     mingw;;
    *)          others;;
esac
}
if [ "$1" = "--post-installation-only" ]; then
post_installation
exit 0
elif [ "$1" = "--system-check-only" ]; then
system_check
exit 0
elif [ "$1" = "--development-environment-setup" ]; then
case "${unameOut}" in
    Linux*)     linux;;
    Darwin*)    macOS;;
    CYGWIN*)    cygwin;;
    MINGW*)     mingw;;
    *)          others;;
esac
elif [ "$1" = "--deployment-only" ]; then
echo "INFO: You would like to deploy our project to your server"
echo "INFO: Support will be added in the future"
else
echo -e "\e[33mWARNING: Please specify your need\e[0m"
echo "INFO: To start debugging, you should run '$0 --development-environment-setup'"
echo "INFO: To start deploying our software, you should run '$0 --deployment-only'"
echo "INFO: To determine whether you have all required package installed, you should run '$0 --system-check-only'"
echo "INFO: To check whether you are ready to debug or not, you should run '$0 --post-installation-only"
echo "INFO: To install without 5s waiting, use '--disable-timer' as your second argument of this script"
fi
