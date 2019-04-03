class GameUI extends GameScene{
    constructor() {
        super();
        this.initMenu();
       
    }

    initMenu(){
        console.log("init GaneUI Menu");
        this.addComponent(new CodePanel(),-1);

        //Instruction Menu Button 
        var InstructionMenuButton =Button.getButton('Instruction_Menu',375,30,1,3,'IM');
        InstructionMenuButton.event_controller=new EventController(new NewSenceEvents(new InstructionMenu()),new Event());
        this.addComponent(InstructionMenuButton, -1);

        //cpu
        var cpu=new CPU();
        this.addComponent(cpu,-1);

        //run button
        this.addComponent(Button.getButton('Code_Run',375,60,1,3,'Run'),-1);
        cpu.moveTo(50,50);
        cpu.doNext(CPU_CONST.STATIC,function(){
            cpu.moveTo(0,0);
        });


        
    }
}