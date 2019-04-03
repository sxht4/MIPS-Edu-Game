/**
 *
 *
 * @class GameUI
 * @extends {GameScene}
 * 
 * this is chapter 1
 */
class GameUI extends GameScene{
    constructor() {
        super();
        this.initMenu();
       
    }

    initMenu(){
        console.log("init GaneUI Menu");
        this.addComponent(new CodePanel(),-1);
        var cpu=new CPU();
        this.addComponent(cpu,-1);
        this.addComponent(Button.getButton('Code_Run',375,60,1,3,'Run'),-1);
        cpu.moveTo(50,50);
        cpu.doNext(CPU_CONST.STATIC,function(){
            cpu.moveTo(0,0);
        });


        
    }
}