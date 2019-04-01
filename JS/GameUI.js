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
        var gameUIButton= Button.getButton(RESOURCES.game_UI_button[0]);
        
        this.addComponent(gameUIButton,-1);
        this.addLayer();
        this.addComponent(new CodePanel(),-1);
        var m=new Memory("Memory",[],0,0, 100, 250, true);
        for (let i = 0; i < 10; i++) {
            m.add(i);
        }
        this.addComponent(m, -1);
        this.addComponent(new Register("Register", [], 110, 230, 250, 100, true), -1);
    }
}