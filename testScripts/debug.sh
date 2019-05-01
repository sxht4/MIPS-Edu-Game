#!/bin/bash
# Author: Hanzhang Bai
# Last updates 24 Apr 2019
# Copyright sxht4(2019) under MIT Licence
STARTTIMESCRIPT=`date +%s.%N`
dt=$(date '+%d %h %Y %H:%M:%S');
echo -e "INFO: Script started at $dt.\c"
date +%3N
if [ -e "parsedebug" ];
then
echo -e '\e[33mWARNING: Cleaning up "parsedebug".\e[0m'
rm -rf parse
fi
if [ -e "parseoptimised" ];
then
echo -e '\e[33mWARNING: Cleaning up "parseoptimised".\e[0m'
rm -rf parseoptimised
fi
check_exit_code(){
ENDTIMEPRGM=`date +%s.%N`
TIMEDIFFPRGM=`echo "$ENDTIMEPRGM - $STARTTIMEPRGM" | bc | awk -F"." '{print $1"."substr($2,1,11)}'`
echo -e "\e[33m==============END OF stdout===============\e[0m"
if [ "$1" != "$2" ]; then
echo "INFO: Exit code $1, expected $2, use valgrind? $3, runtime $TIMEDIFFPRGM"
echo -e "\e[31mERROR: There might be some mistake or inproper configureation!\e[0m"
if [ "$3" = true ]; then
echo "INFO: Analysing memory leak is enabled for $4"
valgrind --log-fd=9 ./$4 $5 $6 $7 $8 $9 1>/dev/null
fi
echo "INFO: Terminating testing script"
exit $1
else
echo "INFO: Exit codes returned as expected, runtime $TIMEDIFFPRGM"
#echo "INFO: Exit code $1, expected $2, use valgrind? $3, runtime $TIMEDIFFPRGM"
fi

}
function runner(){
echo "INFO: $1"
echo "******************************************"
STARTTIMEPRGM=`date +%s.%N`
./$2 $3 $4 $5 $6 $7 $8
}
function run(){
echo "INFO: Running as '$1'"
runner "If user did not enter any input should not throw 'Segmentation fault'" $1
check_exit_code $? 1 true $1
runner "Getting info for this program" $1 --info
check_exit_code $? 0 true $1 --info
runner "Parse mode for this program. DRY RUN" $1 --parse sampleFile.conf
check_exit_code $? 0 true $1 --parse sampleFile.conf
runner "Generate new file mode for this program. DRY RUN" $1 --generate-files sample.conf mikudayo.hbai.me
check_exit_code $? 0 true $1 --generate-files sample.conf mikudayo.hbai.me
runner "Generate SHA256 for file" $1 --generate-SHA256 input.txt output.txt
check_exit_code $? 0 true $1 --generate-SHA256 input.txt output.txt
runner "Verify SHA256 from remote, correct" $1 --verify-SHA256 input.txt 66caef2ee33294fbb8c1dfa09c08c8fdd896248e5714e53f13a9f2e4788fbcb9
check_exit_code $? 0 true $1 --verify-SHA256 input.txt 66caef2ee33294fbb8c1dfa09c08c8fdd896248e5714e53f13a9f2e4788fbcb9
runner "Verify SHA256 from remote, wrong" $1 --verify-SHA256 input.txt 0000000000000000000000000000000000000000000000000000000000000000
check_exit_code $? 40 true $1 --verify-SHA256 input.txt 0000000000000000000000000000000000000000000000000000000000000000
runner "Licence info" $1 --license-info
check_exit_code $? 0 true $1 --license-info
}
echo "INFO: Compiling without optimisation..."
STARTTIMEC=`date +%s.%N`
g++ -std=c++11 -Wall -g -o parsedebug parser.cpp
echo "Process exited with exit code $?"
ENDTIMEC=`date +%s.%N`
TIMEDIFFC=`echo "$ENDTIMEC - $STARTTIMEC" | bc | awk -F"." '{print $1"."substr($2,1,11)}'`
echo -e "INFO: Compiles successifully? \c"
if [ -e "parsedebug" ];
then
echo -e "\e[32mYes\e[0m\c"
echo ", and it takes $TIMEDIFFC second(s) to compile"
echo -e "INFO: Running Program\n \n"
else
echo -e "\e[31mNo\e[0m"
echo "ERROR: Failed to compile, exiting..."
echo "You may refer to error messages from g++ to fix the problem"
exit 1
fi
run parsedebug
rm -rf parsedebug
echo "INFO: Compiling with -O2 optimisation..."
STARTTIMEO=`date +%s.%N`
g++ -std=c++11 -o parseoptimised -O2 parser.cpp
echo "INFO: Process exited with exit code $?"
ENDTIMEO=`date +%s.%N`
TIMEDIFFO=`echo "$ENDTIMEO - $STARTTIMEO" | bc | awk -F"." '{print $1"."substr($2,1,11)}'`
echo -e "INFO: Compiles successifully? \c"
if [ -e "parseoptimised" ];
then
echo -e "\e[32mYes\e[0m\c"
echo ", and it takes $TIMEDIFFO second(s) to compile"
echo -e "INFO: Running Program\n \n"
else
echo -e "\e[31mNo\e[0m"
echo "ERROR: Failed to compile, exiting..."
echo "You may refer to error messages from g++ to fix the problem"
exit 1
fi
run parseoptimised
rm -rf parseoptimised
ENDTIMESCRIPT=`date +%s.%N`
TIMEDIFFSCRIPT=`echo "$ENDTIMESCRIPT - $STARTTIMESCRIPT" | bc | awk -F"." '{print $1"."substr($2,1,11)}'`
echo "INFO: Total runtime: $TIMEDIFFSCRIPT"