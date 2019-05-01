#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include "sha256.h"
/*
 * Author: Hanzhang Bai
 * Last updates at 01 May 2019
 * Copyright sxht4(2019) under MIT Licence
 */
//These global variables are indicating status of this program
bool quiet=false;
bool install=false;
bool fileIsGood=false;
std::string fileCheckSum="";
std::string fileLocation="";
std::string hostname="";
int fileSize=0;
//First argument
std::string argone="";
bool isNewMachine=true;
//Return 1 means this is already configured. User should configure it by themselves!
int parseApache(std::string filePath){
    std::ifstream infile(filePath);
    std::string line;
    std::vector<std::string> containers;
    //std::vector<std::string> containersTrimmed;
    bool invalidLine=false;
    std::string newString="";
    std::string newConfig="IncludeOptional sites-enabled/*.conf";
    //std::cout<<"Line Output"<<std::endl;
    while (std::getline(infile, line)){
    containers.push_back(line);
}
//Check for 'IncludeOptional'
//std::cout<<containers.size()<<std::endl;
for(int i=0;i<containers.size();i++){
    //std::cout<<containers[i]<<std::endl; 
    if(containers[i].length()>=15){
    newString=containers[i].substr(0,15);
    //Checking if this server is already configured
    if(newString=="IncludeOptional" && containers[i][17]=='s'){
        std::cout<<"Reading has been terminated due to your previous config of '"<<newConfig<<"'"<<std::endl;
        std::cout<<"We believe there is no need to configure this step for you"<<std::endl;
        infile.close();
        return 2;
        }
    }
}
    //Writing .conf which allows custom sites on virtual host
    containers.push_back(newConfig);
    //We only need to add that line at the back of this program
    std::ofstream outfile(filePath, std::ios::app);
    outfile<<std::endl<<newConfig<<std::endl;
    infile.close();
    outfile.close();
    return 0;
}

int generateNewFiles(std::string siteAvailablePath, std::string hostName, bool choice){
    std::string firstline="<VirtualHost *:80>";
    std::string endLine="</VirtualHost>";
    std::string serverName="ServerName ";
    serverName+=hostName;
    std::string serverAlias="ServerAlias www.";
    serverAlias+=hostName;
    std::string docRootLabel="DocumentRoot ";
    std::string docRootPrefix="/var/www/";
    std::string docRootSuffix="/html";
    std::string docRoot=docRootLabel+docRootPrefix+hostName+docRootSuffix;
    std::vector<std::string> outputFile;
    //File structure
    outputFile.push_back(firstline);
    outputFile.push_back(serverName);
    outputFile.push_back(serverAlias);
    outputFile.push_back(docRoot);
    outputFile.push_back(endLine);
    std::ofstream outfile(siteAvailablePath);
    for(int i=0;i<outputFile.size();i++){
        outfile<<outputFile[i]<<std::endl;
    }
    outfile.close();
    return 0;
}
int generateRobotsTXT(std::string siteAvailablePath){
    std::string userAgent="User-agent: *";
    std::string disAllow="Disallow: /";
    return 0;
}
int generateProtectedFile(std::string siteAvailablePath, std::string hostName){
    std::string authType="AuthType Basic",authName="Authentication Required", authUserFile="/etc/htpasswd/.htpasswd", require="valid-user";
    
    return 0;
}
int generateHashToFile(std::string filename,std::string outfilename){
std::ifstream infile(filename, std::ios::binary);
std::vector<unsigned char> s(picosha2::k_digest_size);
picosha2::hash256(infile, s.begin(), s.end());
std::string hex_str = picosha2::bytes_to_hex_string(s.begin(), s.end());
infile.close();
std::cout<<"Your SHA256 checksum: "<<hex_str<<std::endl;
std::vector<std::pair<std::string,std::string>> outfileData;
//std::ifstream outfileData(outfilename);
std::ofstream outfile(outfilename, std::ios::app);
outfile<<filename<<" "<<hex_str<<std::endl;
outfile.close();
return 0;
}
int verifyHashFromRemote(std::string filename,std::string sourceHash){
    std::ifstream infile(filename, std::ios::binary);
    std::vector<unsigned char> s(picosha2::k_digest_size);
    picosha2::hash256(infile, s.begin(), s.end());
    std::string hex_str = picosha2::bytes_to_hex_string(s.begin(), s.end());
    std::cout<<"Your SHA256 checksum: "<<hex_str<<std::endl;
    std::cout<<"Source SHA256 checksum: "<<sourceHash<<std::endl;
    infile.close();
    if(sourceHash.compare(hex_str))return 40;
    return 0;   
}
//This function should only be used once per run. 
//If you wish to check multiple files, you should use a script.
int checkFileIntegrity(std::string filename,std::string sourceHash){
    std::string filenameforsource,hashvalue;
    std::ifstream infile(filename, std::ios::binary);
    while(infile >> filenameforsource >> hashvalue){
    if(filename==filenameforsource&&sourceHash==hashvalue){
        fileCheckSum=hashvalue;
        break;
    }
    }
    std::vector<unsigned char> s(picosha2::k_digest_size);
    picosha2::hash256(infile, s.begin(), s.end());
    std::string hex_str = picosha2::bytes_to_hex_string(s.begin(), s.end());
    infile.close();
    if(fileCheckSum.compare(hex_str))return 40;
    return 0;
}
//Driver function
int main(int argc, char* argv[]){
    /* Error code explanation:
     * 1    General error
     * 2    Apache's .conf file is already configured 
     * 3    Improper arguments
     * 39   File size mismatch
     * 40   File checksum mismatch
     * 41   Apache .conf file contains unrecognised character
     * 
     */
    if(argc>=2)argone=argv[1];
    if(argc<2){
      std::cout<<"ERROR: You need at least an argument to use this parser"<<std::endl;
      std::cout<<"use '--info' as your second argument to see available operations!"<<std::endl;
      return 1;  
    }
    else if(argc==2 && argone=="--info"){
    argone=argv[1];
    //Instructions
    std::cout<<"Parse mode: "<<argv[0]<<" "<<"--parse "<<"file_path"<<std::endl;
    }
    else if(argone=="--parse"){
    argone=argv[1];
    std::cout<<"argc: "<<argc<<std::endl;
    std::cout<<"Your arguments: ";
    for(int i=1;i<argc;i++){
        std::cout<<i<<": '"<<argv[i]<<"'"<<" ";
    }
    std::cout<<""<<std::endl;
    fileLocation=argv[2];
    std::cout<<"Apache parser, version 1.0"<<std::endl<<"Author: Hanzhang Bai"<<std::endl;
    std::cout<<"We as SXHT4 would like to welcome you to use our self-deployment system"<<std::endl;
    std::cout<<"Starting parser..."<<std::endl;
    return parseApache(fileLocation);   
    }
    else if(argone=="--generate-files"){
    argone=argv[1];
    hostname=argv[3];
    fileLocation=argv[2];
    std::cout<<"Checking hostname and file location length... ";
    if(hostname.length()>0&&fileLocation.length()>0){
    std::cout<<"All good"<<std::endl;
    return generateNewFiles(fileLocation,hostname,false);
    }else{
    std::cout<<"ERROR"<<std::endl<<"Please double check if you properly entered arguments for both 'hostname' and 'file location'"<<std::endl;
    return 3;
    }

    }
    else if(argone=="--generate-SHA256"&& argc>=3){
        fileLocation=argv[2];
        std::string outputFileLocation=argv[3];
        return generateHashToFile(fileLocation,outputFileLocation);
    }
    else if(argone=="--verify-SHA256"&& argc>=3){
    fileLocation=argv[2];
    std::string fileHash=argv[3];
    return verifyHashFromRemote(fileLocation,fileHash);
    }
    else if(argone=="--check-integrity"){
    //Use a file instead
    fileLocation=argv[2];
    std::string fileHash=argv[3];
    return checkFileIntegrity(fileLocation,fileHash);
    }
    else if(argone=="--licence-info"||argone=="--license-info"){
    std::cout<<"Project Licence"<<std::endl;
    std::cout<<R"(The MIT License (MIT)
Copyright (C) 2019 sxht4
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.)"<<std::endl<<std::endl;
    
std::cout<<"SHA256 algorithm licence"<<std::endl<<std::endl;
std::cout<<R"(The MIT License (MIT)
Copyright (C) 2017 okdshin
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.)"<<std::endl;
    }
    else{
    argone=argv[1];
    std::cout<<"You stepped into a situation where we cannot handle yet"<<std::endl;
    std::cout<<"argc: "<<argc<<std::endl;
    std::cout<<"Your arguments: ";
    for(int i=1;i<argc;i++){
        std::cout<<i<<"'"<<argv[i]<<"'"<<" ";
    }
    std::cout<<""<<std::endl;
    return 1;
    }


}

