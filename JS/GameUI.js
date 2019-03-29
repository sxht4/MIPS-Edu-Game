class GameUI extends GameScene{
    constructor() {
        super();
        this.initMenu();
    }

    initMenu(){
        console.log("init GaneUI Menu");
        var gameUIButton= Button.getButton(RESOURCES.game_UI_button[0]);
        
        this.addComponent(gameUIButton,-1);
        this.addLayer();
        this.addComponent(new CodePanel(),-1);
        
    }
}