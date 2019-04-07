class Interpreter {
    constructor(cpu, code_panel, memeory, register) {
        this.cpu = cpu;
        this.code_panel = code_panel;
        this.memeory = memeory;
        this.register = register;
        this.init();

    }
    init() {
       var parseMap = new Map();
        for (var i = 0; i < 5; i++) {
            parseMap.set('t' + i,this.register.getCellAt(i));
        }
        this.parseMap=parseMap;


    }
    //ArrayList, and call back array
    errorReport(message) {
        console.log(message);
        alert(message);
    }
    async executeADDI(dest, arg1, arg2) {
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
            
            destCell.cell.setContent(R1.value + Number.parseInt (arg2));
            
        } catch (error) {
            throw error;
        }
       
      

       

    }
    async  executeADD(dest, arg1, arg2) {
        var R1 = this.getRegister(arg1);
        var R2 = this.getRegister(arg2);
        var destcell = this.getRegister(dest);
        await  this.cpu.moveTo(R1.cell.x, R1.cell.y);
        await  this.cpu.moveTo(R2.cell.x, R2.cell.y);
        await  this.cpu.moveTo(destcell.cell.x, destcell.cell.y);
        destcell.cell.setContent(R1.value + R2.value);





    }


  
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



    getRegister(id) {
        try {
            
            var retcell = this.parseMap.get(id);
            var retvalue = retcell.getContent();
            return { cell: retcell, value: retvalue };

        } catch (error) {
         
            throw 'invaild Register address ' + id;
        }





    }



}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
