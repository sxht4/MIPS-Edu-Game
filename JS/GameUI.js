class GameUI extends GameScene{
    constructor() {
        super();
        this.initMenu();
    }

    initMenu(){
        console.log("init GaneUI Menu");
        this.addComponent(new CodePanel(),-1);
        this.addComponent(new CPU(),-1);
        this.addComponent(Button.getButton('Code_Run',375,60,1,3,'Run'),-1);
        
    }
}