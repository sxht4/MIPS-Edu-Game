/**
 * Chapter 1
 * @class MainScene
 * @extends {GameScene}
 * @author Sai Cao,Tianyu Cao, Xiang Li
 */
class MainScene extends GameScene {
    constructor() {
        super();
     




    }
    init() {
        super.init();
        console.log("init GaneUI Menu");
        this.cp = new  CodePanel();
        this.addComponent(this.cp, -1);
        //Instruction Menu Button 
        this.InstructionMenuButton = Button.getButton('Instruction_Menu', 375, 30, 1, 3, 'IM');
        this.InstructionMenuButton.addClickEvent(new NewSceneEvent(new InstructionMenu()));
        this.IMHint= new HintEvent('IMHint')
        this.IMHint.setHintContent('this is instruction menu \n it contain all insturtions game support');
        this.InstructionMenuButton.addLongPressEvent(this.IMHint);
        this.addComponent(this.InstructionMenuButton, -1);
        //return button
        this.returnButton= Button.getButton('Return_Main', 5, 290, 1, 3, 'Return');
        this.returnButton.addClickEvent(new ReturnEvent(true));
        this.addComponent(this.returnButton, -1);
        //run button
        this.RunButon = Button.getButton('Code_Run', 375, 60, 1, 3, 'Run');
        this.addComponent(this.RunButon, -1);
        this.m = new Memory("Memory", [], 10, 5, 80, 280, false);
        for(var i=0; i<13; i++){
            this.m.add(0);
        }
        this.addComponent(this.m, -1);

        this. r = new Register("Register", [], 100, 220, 250, 100, true);
        this.r.init();
        this.addComponent(this.r, -1);
        this.addLayer();
        this.cpu = new CPU();
        this.addComponent(this.cpu, -1);
        this.cpu.setSpeed(2);

        this.interpreter=new Interpreter(this.cpu, this.cp, this.m, this.r,new InterpreterAnimation());
        this.interpreter.test={check(){
            return;
            }
        }
        
        this.addComponent(this.interpreter.InterpreterAnimation,-1);
        this.RunButon.addClickEvent(new RunCodeEvent(this.interpreter));
     
    }
}