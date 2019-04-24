/**
 * player use this sence to play game
 * @class MainScene
 * @extends {GameScene}
 * @author Sai Cao,Xiang Li,Tianyu Cao
 */
class MainScene extends GameScene {
    /**
     *Creates an instance of MainScene.
     * @memberof MainScene
     */
    constructor() {
        super();
    }
    
/**
 *
 * init this scene
 * @memberof MainScene
 */
init() {
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

        //run button
        this.RunButon = Button.getButton('Code_Run', 375, 60, 1, 3, 'Run');
        this.addComponent(this.RunButon, -1);
        this.m = new Memory("Memory", [], 5, 5, 80, 300, false);
        for(var i=0; i<13; i++){
            this.m.add(i);
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
        }};
        this.addComponent(this.interpreter.InterpreterAnimation,-1);
        this.RunButon.addClickEvent(new RunCodeEvent(this.interpreter));
      
    }
}