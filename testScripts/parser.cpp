#include <iostream>
#include <fstream>
#include <string>
#include <vector>
/*
 * Author: Hanzhang Bai
 * Last updates at 09 Mar 2019
 */
int main(int argc, char* argv[]){
    /* Error code explanation:
     * 1    General error
     * 39   File length mismatch
     * 40   File checksum mismatch
     * 41   Apache .conf file contains unrecognised character
     * 
     */
    bool quiet=false;
    bool install=false;
    bool fileIsGood=false;
    std::string fileCheckSum="";
    if(argc==1){
    std::cout<<"ERROR: You need at least an argument to use this parser"<<std::endl;
    std::cout<<"use '--info' as your second argument to see available operations!"<<std::endl;
    //ruturn error for script to catch exception
    return 1;
    }else if(argc==3 && argv[1]=="--info"){
    //Instructions
    std::cout<<"Parse mode: "<<argv[0]<<" "<<"--parse "<<"file_path"<<std::endl;
    }
    else{
    std::cout<<"Apache parser, version 1.0"<<std::endl<<"Author: Hanzhang Bai"<<std::endl;
    std::cout<<"We as SXHT4 would like to welcome you to use our self-deployment system"<<std::endl;
    std::cout<<"Starting parser..."<<std::endl;
    }


}
int parseApache(std::string filePath){
    return 0;
}
int checkFileIntegrity(std::string filePath){
    return 0;
}
