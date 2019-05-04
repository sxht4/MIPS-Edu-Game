Button=require('../Button');
GameEvent=require('../Event/GameEvent')
GameScene=require('../GameScene');
NewSenceEvents=require('../Event/NewSceneEvent');
MenuBackGround=require('./MenuBackGround');
MenuAnimation=require('./MenuAnimation');
SelectChapterMenu=require('./SelectChapterMenu');
/**
 *
 *  strat menu of Game
 * @class Menu
 * @extends {GameScene}
 */
class Menu extends GameScene {
    /**
     *Creates an instance of Menu.
     * @memberof Menu
     */
    constructor() {
        super();
        
    }


    /**
     *init menu
     * @memberof Menu
    /**
     *
     *
     * @memberof Menu
     */
    init() {
        super.init();
        console.log("init Menu");
        this.addComponent(new MenuBackGround(),-1);
        this.addLayer();
        
        var NewGameButton= Button.getButton('New_Game_Button',185,210,0,0,'NEW GAME');
<<<<<<< HEAD
        var ContinueButton= Button.getButton('Option_Button',185,245,0,0,'OPTION');
        var OptionsButton= Button.getButton('about_us',185,280,0,0,'ABOUT US');
=======
        var ContinueButton= Button.getButton('New_Game_Button',185,245,0,0,'OPTION');
        ContinueButton.addClickEvent( {excute(){alert('to be added');}});
        var CridetButton= Button.getButton('Credit',185,280,0,0,'CREDIT');
>>>>>>> origin/master
        NewGameButton.addClickEvent(new NewSceneEvent(new SelectChapterMenu()));
        NewGameButton.addLongPressEvent(new LongPressEvent());
        CridetButton.addClickEvent(new NewSceneEvent(new Credit()));
        

        this.addComponent (NewGameButton,-1);
        this.addComponent(ContinueButton,-1);
        this.addComponent(CridetButton,-1);
        console.log("buttons load complete");
        this.addComponent(new MenuAnimation(),-1);
       
    }



}
module.exports=Menu;