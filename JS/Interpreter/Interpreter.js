
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
     * @param {Memory} memory
     * @param {Register} register
     * @memberof Interpreter
     */
    constructor(cpu, code_panel, memory, register,InterpreterAnimation) {
        this.cpu = cpu;
        this.code_panel = code_panel;
        this.memory = memory;
        this.register = register;
        this.test = null;
        this.InterpreterAnimation=InterpreterAnimation

        this.init();

    }
    /**
     *init the interpreter
     *
     * @memberof Interpreter
     */
    init() {

        var parseMap = new Map();
        for (var i = 0; i < 8; i++) {
            parseMap.set('$t' + i, this.register.getCellAt(i));

        }
        this.parseMap = parseMap;
        
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
        var R2 = this.toNumber(arg2);
        var R1 = this.getRegister(arg1);
        var destCell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(destCell.cell.x, destCell.cell.y);
        destCell.cell.setContent(R1.value + R2);

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
        console.log('excute');
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value + R2.value);
        console.log('done');


    }

    /**
     *
     * Shift Left Logic Instruction
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
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

    /**
     *
     * Shift Right Logic Instruction
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
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

    /**
     *
     * Set Less Than Instruction
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
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
     *
     *parse and run sub
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeSub(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value - R2.value);
    }

    /**
     *
     *parse and run subi
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeSubi(dest, arg1, arg2) {


        var R2 = this.toNumber(arg2);
        var R1 = this.getRegister(arg1);
        var destCell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(destCell.cell.x, destCell.cell.y);
        destCell.cell.setContent(R1.value - R2);

    }

    /**
     *
     *parse and run mul
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeMul(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value * R2.value);
    }

    /**
     *
     *parse and run Div
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeDiv(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value / R2.value);
    }
    async executeLw(dest, arg1) {
        var tokens = arg1.split('$');
        var offest = this.toNumber(tokens[0]);
        console.log('$'+tokens[1]);
        var R1 = this.getRegister('$'+tokens[1]);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        console.log('=');
        var value=this.loadMemory(R1.value+offest,R1.cell);
        await sleep (this.InterpreterAnimation.aniamtionTime*1000/15);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(value);
    }
    async executeSw(dest, arg1) {
        var tokens = arg1.split('$');
        var offest = this.toNumber(tokens[0]);
        var R1 = this.getRegister('$'+tokens[1]);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        
        this.writeMemory(R1.value+offest,destcell.value,R1.cell);
        await sleep (this.InterpreterAnimation.aniamtionTime*1000/15);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
    }



    /**
     *
     *parse and run sub
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeSub(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value - R2.value);
    }

    /**
     *
     *parse and run subi
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeSubi(dest, arg1, arg2) {


        var R2 = this.toNumber(arg2);
        var R1 = this.getRegister(arg1);
        var destCell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(destCell.cell.x, destCell.cell.y);
        destCell.cell.setContent(R1.value - R2);

    }

    /**
     *
     *parse and run mul
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeMul(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value * R2.value);
    }

    /**
     *
     *parse and run Div
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeDiv(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value / R2.value);
    }
    async executeLw(dest, arg1) {
        var tokens = arg1.split('$');
        var offest = this.toNumber(tokens[0]);
        console.log('$'+tokens[1]);
        var R1 = this.getRegister('$'+tokens[1]);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        console.log('=');
        var value=this.loadMemory(R1.value+offest,R1.cell);
        await sleep (this.InterpreterAnimation.aniamtionTime*1000/15);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(value);
    }
    async executeSw(dest, arg1) {
        var tokens = arg1.split('$');
        var offest = this.toNumber(tokens[0]);
        var R1 = this.getRegister('$'+tokens[1]);
        var destcell = this.getRegister(dest);
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        
        this.writeMemory(R1.value+offest,destcell.value,R1.cell);
        await sleep (this.InterpreterAnimation.aniamtionTime*1000/15);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
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
        this.code_panel.line_index = 0;
        for (var i = 0; i < ins.length; i++) {

            var index = i % 13;

            var cell = this.code_panel.getContent(index);
            if (index == 0 && i != 0) {
                this.code_panel.nextPage();
            }
            cell.highLight();
            
            if(ins[i]==undefined){
                var splited='';
            }else{
                var splited = ins[i].split(" ");
            }
            
            try {
                switch (splited[0]) {
                    case "addi":
                        await this.executeADDI(splited[1], splited[2], splited[3]);
                        break;
                    case "add":
                        await this.executeADD(splited[1], splited[2], splited[3]);
                        break;
                    case "subi":
                        await this.executeSubi(splited[1], splited[2], splited[3]);
                        break;
                    case "sub":
                        await this.executeSub(splited[1], splited[2], splited[3]);
                        break;
                    case "mul":
                        await this.executeMul(splited[1], splited[2], splited[3]);
                        break;
                    case "div":
                        await this.executeDiv(splited[1], splited[2], splited[3]);
                        break;
                    case "lw":
                        await this.executeLw(splited[1],splited[2])
                        break;
                    case "sw":
                        await this.executeSw(splited[1],splited[2]);
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
                        cell.highLight('red');
                        await this.cpu.moveTo(220, 0);
                        cell.deHighLight();
                        return;
                }

            } catch (error) {
                cell.highLight('red');

                alert("Please correct your error at line " + (i + 1) + '\n' + error);
                await this.cpu.moveTo(220, 0);
                cell.deHighLight();
                return;
                

            }

            cell.deHighLight();
        }


        await this.cpu.moveTo(220, 0);
        this.test.check();

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
            // console.log(retcell);
            var retvalue = retcell.getContent();
            // console.log(retvalue);
            return { cell: retcell, value: retvalue };

        } catch (error) {

            throw 'invaild Register address ' + id;
        }

    }

    setTest(test) {
        this.test = test;

    }
    toNumber(arg) {


        var number = Number.parseInt(arg);
        if (isNaN(number)) {
            throw 'it is not a number ' + arg;
        } else {
            return number;
        }



    }
 
    writeMemory(index,value,beignCompoent){ 
        var address= index/4;
        if(index%4!=0||index<0){
            this.addressError();
        }else{
            
            this.memory.set(address,value);
            this.InterpreterAnimation.setAninmation(beignCompoent.x+10,beignCompoent.y-10, (this.memory.x+10),this.memory.y+20+(20)*address);

        } 

    }
     loadMemory(index,beignCompoent){
        console.log('loadMemory');
        console.log(beignCompoent);
        var address= index/4;
        console.log(address);
        if(index%4!=0||index<0){
            this.addressError();
        }else{
            this.InterpreterAnimation.setAninmation(beignCompoent.x+10,beignCompoent.y-10, (this.memory.x+10),this.memory.y+20+(20)*address);
            
            return this.memory.get(address);
        }
    }
    addressError(){
        throw index+' address is not support ';
    }


}



