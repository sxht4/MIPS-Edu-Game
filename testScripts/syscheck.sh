#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
echo "INFO: Your OS version strings"
lsb_release -a
echo "INFO: End of OS version strings"
if hash npm 2>/dev/null; then
echo -e "INFO: npm presents!, ver: \c"
npm -v
echo -e "INFO: node version: \c"
node -v
echo "INFO: Checking whether mocha is installed or not"
npm list -g --depth=0 | grep mocha
else
echo "INFO: NPM and Mocha are not present!"
echo "You must have them in order to debug this project"
echo "Consider install it through ./install.sh to resolve dependencies problems"
fi
