#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
echo -e "INFO: Are you running this script as root or sudo? \c"
if [[ $EUID -ne 0 ]]; then
   echo "No"
   echo "ERROR: This script must be run as root since it installs some packages necessary for installing npm and mocha" 
   exit 1
else
echo "Yes"
fi
echo "INFO: Performing necessary software update"
apt update
apt upgrade -y
if hash curl 2>/dev/null; then
echo -e "INFO: curl version: \c"
curl -V
else
echo "INFO: Installing curl since you do not have it on your machine"
apt install curl -y
fi
if hash nodejs 2>/dev/null; then
echo "INFO: Performing system check at pre-installation" 
echo -e "INFO: npm version: \c"
npm -v
echo -e "INFO: node version: \c"
node -v
npm install -g npm
npm install -g mocha
npm install request --save
exit 0
else
echo "INFO: Installing nodejs since you do not have it on your machine"
echo "INFO: Adding key"
curl -sL https://deb.nodesource.com/setup_10.x | bash -
echo "INFO: Done adding key"
echo "INFO: Installing nodejs"
apt install nodejs -y
echo "INFO: Done installing nodejs"
fi
echo "INFO: Performing system check at pre-installation" 
echo -e "INFO: npm version: \c"
npm -v
echo -e "INFO: node version: \c"
node -v
npm install -g npm
npm install -g mocha
npm install request --save