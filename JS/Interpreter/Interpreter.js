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
        this.test=null;
     
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
            parseMap.set('t' + i,this.register.getCellAt(i));
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
        try {
            Number.parseInt(arg2);
        } catch (error) {
            throw 'not a integer' + arg2;
        }
        try {
            var R1 = this.getRegister(arg1);
            var destCell = this.getRegister(dest);
            await this.cpu.moveTo(R1.cell.x, R1.cell.y);
            await this.cpu.moveTo(destCell.cell.x, destCell.cell.y);
            destCell.cell.setContent(R1.value + Number.parseInt(arg2));

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
        await this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value + R2.value);





    }

    /**
     *
     *parse and run sub
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeSub(dest, arg1, arg2){
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await  this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await  this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
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
        try {
            Number.parseInt (arg2)
        } catch (error) {
            throw 'not a integer'+arg2;
        }
        try {
            var R1 = this.getRegister(arg1);
            var destCell = this.getRegister(dest);
            await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
            await  this.cpu.moveTo(destCell.cell.x, destCell.cell.y);
            
            destCell.cell.setContent(R1.value - Number.parseInt (arg2));
            
        } catch (error) {
            throw error;
        }
    }

    /**
     *
     *parse and run mul
     * @param {String} dest
     * @param {String} arg1
     * @param {String} arg2
     * @memberof Interpreter
     */
    async executeMul(dest, arg1, arg2){
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await  this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await  this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
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
    async executeDiv(dest, arg1, arg2){
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await  this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await  this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value / R2.value);
    }
    


    /**
     * parse the instructions from Code_Panel
     *
     * @memberof Interpreter
     */
    async prase() {
        console.log("interpreter started");
        var ins = this.code_panel.getInstructions();
        this.code_panel.line_index=0;
        for (var i = 0; i < ins.length; i++) {
            
            var index = i % 13;

            var cell = this.code_panel.getContent(index);
            if(index==0&&i!=0){
                this.code_panel.nextPage();
            }
            cell.highLight();


            var splited = ins[i].split(" ");
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
                    case "":
                        break;
                    default:
                        await this.cpu.moveTo(220,0);
                        alert('instruction not support at line' + (i + 1));
                        return

                }

            } catch (error) {
                await this.cpu.moveTo(220,0);
                alert("Please correct your error at line " + (i + 1) + '\n' + error);
                return false;
            }



        }
        await this.cpu.moveTo(220,0);
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
            return { cell: retcell, value: retvalue };

        } catch (error) {

            throw 'invaild Register address ' + id;
        }

    }
  
    setTest(test){
        this.test=test;

    }


}



