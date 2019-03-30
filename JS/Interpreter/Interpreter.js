class Interpreter{
    constructor(interpret){
        this.interpret=interpret;
        this.prase();
        //Save key and value e.g. $t0 1
        var interpretmap=new Map();
    }
    //ArrayList, and call back array
    errorReport(message){
    console.log(message);
    alert(message);
    }
    executeADDI(dest,arg1,arg2){
        if (Number.isInteger(arg2)){

        }else{
        //console.log("Your second argument for 'addi' is not an integer");
        errorReport("Your third argument for 'addi' is not an integer");    
        }

    }
    executeADD(dest,arg1,arg2){

    }
    executeSUB(dest,arg1,arg2){

    }
    executeLI(dest,num){
    if(Number.isInteger(num)){
        errorReport("You used a pseudo-instruction, which is 'li'");
        interpretmap.set(dest,num);
    }else{
    console.log("Your argument for 'li' is not an integer")
    }
    }
    prase(){
        console.log("interpreter started");
        var ins=GAME.getCurrentSence().getByID("code_panel").getInstructions();
        for(var i=0;i<ins.length();i++){
        var splited=ins[i].split(" ")
        if(splited[0]=="addi"){
        executeADDI(splited[1],splited[2],splited[3]);
        }else if(splited[0]=="add"){
        executeADD(splited[1],splited[2],splited[3]);
        }else{
        console.log("ERROR: You are putting an instruction that we do not support yet.")
        alert("Please correct your error at line "+i+1);
        }
        }
        console.log("parse complete");
    }


}