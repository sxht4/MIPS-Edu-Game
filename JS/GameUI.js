Button=require('./Button');
GameScene=require('./GameScene');
 RESOURCES=require('../JSON/Resources');
 Event=require('../JS/Event');
 EventController=require('../JS/EventController');
 NewSenceEvents=require('../JS/NewSenceEvent');
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
    }
}

module.exports=GameUI;