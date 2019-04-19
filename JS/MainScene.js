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
        var cp = new  CodePanel();
        this.addComponent(cp, -1);

        //Instruction Menu Button 
        var InstructionMenuButton = Button.getButton('Instruction_Menu', 375, 30, 1, 3, 'IM');
        InstructionMenuButton.addClickEvent(new NewSceneEvent(new InstructionMenu()));

        this.addComponent(InstructionMenuButton, -1);

        //run button
        var RunButon = Button.getButton('Code_Run', 375, 60, 1, 3, 'Run');
        this.addComponent(RunButon, -1);
        var m = new Memory("Memory", [], 5, 5, 50, 200, false);
        m.add(0);
        this.addComponent(m, -1);

        var r = new Register("Register", [], 100, 270, 250, 50, true);
        r.init();
        this.addComponent(r, -1);

        this.addLayer();
        var cpu = new CPU();
        this.addComponent(cpu, -1);
        cpu.setSpeed(3);

        RunButon.addClickEvent(new RunCodeEvent(new Interpreter(cpu, cp, m, r)));
      
    }
}