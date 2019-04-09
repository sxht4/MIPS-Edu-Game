GameScene=require('./GameScene');
CodePanel=require('./Code_Panel/CodePanel');
NewSceneEvent=require('./Event/NewSceneEvent');
SelectChapterMenu=require('./Menu/SelectChapterMenu');
InstructionMenu=require('./Menu/InstructionMenu');
Memory=require('./Memory');
Register=require('./Register');
CPU=require('./Character/CPU');
RunCodeEvent=require('./Event/RunCodeEvent');
Interpreter=require('./Interpreter/Interpreter');
Button=require('./Button');

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
        var IMHint= new HintEvent('IMHint')
        IMHint.setHintContent('this is instruction menu \n it contain all insturtions game support');
        InstructionMenuButton.addLongPressEvent(IMHint);
        this.addComponent(InstructionMenuButton, -1);

        //run button
        var RunButon = Button.getButton('Code_Run', 375, 60, 1, 3, 'Run');
        this.addComponent(RunButon, -1);
        var m = new Memory("Memory", [], 5, 5, 50, 200, true);
        m.add(0);
        this.addComponent(m, -1);

        var r = new Register("Register", [], 100, 270, 250, 50, true);
        r.init();
        this.addComponent(r, -1);

        this.addLayer();
        var cpu = new CPU();
        this.addComponent(cpu, -1);
        cpu.setSpeed(1);

        RunButon.addClickEvent(new RunCodeEvent(new Interpreter(cpu, cp, m, r)));
      
    }
}
module.exports=MainScene;