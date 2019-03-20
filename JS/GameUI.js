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
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }

    initMenu(){
        console.log("init GaneUI Menu");
        var gameUIButton= Button.getButton(RESOURCES.game_UI_button[0]);
        this.components.push(gameUIButton); 

        var meomoryLayer=new Layer();
        var m=new Memory();
        m.add(15);
        m.add(27);
        meomoryLayer.addComponent(m, -1);
        this.components.push(meomoryLayer);
    }
}