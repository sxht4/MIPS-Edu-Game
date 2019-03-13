#include <iostream>
#include <fstream>
#include <string>
#include <vector>
/*
 * Author: Hanzhang Bai
 * Last updates at 09 Mar 2019
 */
//These global variables are indicating status of this program
bool quiet=false;
bool install=false;
bool fileIsGood=false;
std::string fileCheckSum="";
std::string fileLocation="";
std::string hostname="";
//First argument
std::string argone="";
bool isNewMachine=true;
//Return 1 means this is already configured. User should configure it by themselves!
int parseApache(std::string filePath){
    std::ifstream infile(filePath);
    std::string line;
    std::vector<std::string> containers;
    std::vector<std::string> containersTrimmed;
    bool invalidLine=false;
    std::string newString="";
    std::cout<<"Line Output"<<std::endl;
    while (std::getline(infile, line)){
    containers.push_back(line);
}
//Check for 'IncludeOptional'
std::cout<<containers.size()<<std::endl;
for(int i=0;i<containers.size();i++){
    std::cout<<containers[i]<<std::endl; 
    if(containers[i].length()>=15){
    
    newString=containers[i].substr(0,15);
    //Checking if this server is already configured
    if(newString=="IncludeOptional")return 1;
    }
}
std::string str="IncludeOptional";
std::cout<<str<<", length: "<<str.length()<<std::endl;
    return 0;
}
int checkFileIntegrity(std::string filePath){
    return 0;
}
int main(int argc, char* argv[]){
    /* Error code explanation:
     * 1    General error
     * 2    Apache's .conf file is already configured 
     * 39   File length mismatch
     * 40   File checksum mismatch
     * 41   Apache .conf file contains unrecognised character
     * 
     */
    argone=argv[1];
    if(argc==1){
    std::cout<<"ERROR: You need at least an argument to use this parser"<<std::endl;
    std::cout<<"use '--info' as your second argument to see available operations!"<<std::endl;
    //ruturn error for script to catch exception
    return 1;
    }
    else if(argc==2 && argone=="--info"){
    //Instructions
    std::cout<<"Parse mode: "<<argv[0]<<" "<<"--parse "<<"file_path"<<std::endl;
    }
    else if(argone=="--parse"){
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
    int returnVal=parseApache(fileLocation);
    //Exit program due to previous configuration
    if(returnVal==1)return 2;   
    }
    else{
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

