#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
if [ -e "parse" ];
then
echo -e '\e[33mWARNING: Cleaning up "parse".\e[0m'
rm -rf parse
fi
echo "Compiling without optimisation..."
g++ -std=c++11 -o parse parser.cpp
echo "Process exited with exit code $?"
echo "INFO: Getting info for this program"
echo "******************************************"
./parse --info
echo "Process exited with exit code $?"
echo "INFO: Parse mode for this program. DRY RUN"
echo "******************************************"
#./parse --parse /etc/httpd/conf/httpd.conf
./parse --parse sampleFile.conf
echo "Process exited with exit code $?"
rm -rf parse