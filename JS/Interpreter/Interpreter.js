
/**
 * a Mips Interpreter for users's code
 * exucte animations
 * @class Interpreter
 */
class Interpreter {
    /**
     *Creates an instance of Interpreter.
     * @param {CPU} cpu
     * @param {CodePanel} code_panel
     * @param {Memory} memeory
     * @param {Register} register
     * @memberof Interpreter
     */
    constructor(cpu, code_panel, memeory, register) {
        this.cpu = cpu;
        this.code_panel = code_panel;
        this.memeory = memeory;
        this.register = register;
        this.init();

    }
    /**
     *init the interpreter
     *
     * @memberof Interpreter
     */
    init() {
       var parseMap = new Map();
        for (var i = 0; i < 5; i++) {
            parseMap.set('t' + i,this.register.getCellAt(i));
        }
        this.parseMap=parseMap;
    }
    /**
     *
     * alert a error message
     * @param {String} message
     * @memberof Interpreter
     */
    errorReport(message) {
        console.log(message);
        alert(message);
    }
    /**
     *
     * parse and run ADDI MIPS instruction 
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeADDI(dest, arg1, arg2) {
  
        
        var value2=Number.parseInt (arg2);

        if(isNaN(value2)) {
               console.log(value2);
               throw 'not a number '+ arg2;
        }
            
        
        try {
            var R1 = this.getRegister(arg1);

            var destCell = this.getRegister(dest);
            await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
            await  this.cpu.moveTo(destCell.cell.x, destCell.cell.y);
            destCell.cell.setContent(R1.value + value2);
            
        } catch (error) {
            throw error;
        }
       
      

       

    }
    /**
     *
     * parse and run ADD MIPS instruction 
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async  executeADD(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await  this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await  this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value + R2.value);





    }


    async executeSLL(dest, arg1, arg2) {
        try {
            var value2 = Number.parseInt (arg2)
        } catch (error) {
            throw 'not a integer'+arg2;
        }
        try {
            var R1 = this.getRegister(arg1);
            var destCell = this.getRegister(dest);
            await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
            await  this.cpu.moveTo(destCell.cell.x, destCell.cell.y);            
            destCell.cell.setContent(R1.value * Math.pow(2, value2));
            
        } catch (error) {
            throw error;
        }       
    }

    async executeSRL(dest, arg1, arg2) {
        try {
            var value2 = Number.parseInt (arg2)
        } catch (error) {
            throw 'not a integer'+arg2;
        }
        try {
            var R1 = this.getRegister(arg1);
            var destCell = this.getRegister(dest);
            await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
            await  this.cpu.moveTo(destCell.cell.x, destCell.cell.y); 
            for(var i = 0; i < value2; i++){
                R1.value % 2 == 0? R1.value = R1.value : R1.value = R1.value-1;
                R1.value = R1.value / 2;    
            }
            //R1.value % 2 == 0? R1.value = R1.value : R1.value = R1.value-1;
            destCell.cell.setContent(R1.value);
            
        } catch (error) {
            throw error;
        }
       
    }

    async executeSLT(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await  this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await  this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value < R2.value? 1: 0);
       
    }

    /**
     * parse the instructions from Code_Panel
     *
     * @memberof Interpreter
     */
    async prase() {
        console.log("interpreter started");
        var ins = this.code_panel.getInstructions();
        
        for (var i = 0; i < ins.length; i++) {
            var splited = ins[i].split(" ");
            try {
                switch (splited[0]) {
                    case "addi":
                        await this.executeADDI(splited[1], splited[2], splited[3]);
                        break;
                    case "add":
                        await this.executeADD(splited[1], splited[2], splited[3]);
                        break;
                    case "sll":
                        await this.executeSLL(splited[1], splited[2], splited[3]);
                        break;
                    case "srl":
                        await this.executeSRL(splited[1], splited[2], splited[3]);
                        break;
                    case "slt":
                        await this.executeSLT(splited[1], splited[2], splited[3]);
                        break;           
                    case "":
                        break;
                    default:
                        alert('instruction not support at line' + (i + 1));
                        break;
                }

            } catch (error) {

                alert("Please correct your error at line " + (i + 1) + '\n' + error);
            }


        }
    }



    /**
     *
     *
     * @param {String} id string 
     * @returns {RegisterCell}
     * @memberof Interpreter
     */
    getRegister(id) {
        try {
            
            var retcell = this.parseMap.get(id);
            var retvalue = retcell.getContent();
            // console.log(retcell);
            // console.log(retvalue);
            return { cell: retcell, value: retvalue };

        } catch (error) {
         
            throw 'invaild Register address ' + id;
        }





    }



}
module.exports=Interpreter;


