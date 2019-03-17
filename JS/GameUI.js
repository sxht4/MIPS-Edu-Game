class GameUI extends GameScene{
    constructor() {
        super();
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }

    initMenu(){
        console.log("init GaneUI Menu");
        var gameUIButton= Button.getButton(RESOURCES.game_UI_button[0]);
        gameUIButton.width=0;
        gameUIButton.height=0;
        this.components.push(gameUIButton);
        this.components.push(new CodePanel() );
    }
}