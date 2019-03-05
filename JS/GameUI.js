/**
 *temporary class for spirnt 1, it will remove future
 *
 * @class GameUI
 * @extends {GameScene}
 */
class GameUI extends GameScene{
    constructor() {
        super();
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }

    initMenu(){
        var gameUIButton= Button.getButton(RESOURCES.game_UI_button[0]);
        gameUIButton.event_controller=new EventController(new Event(), new Event());
        this.components.push(gameUIButton);
    }
}