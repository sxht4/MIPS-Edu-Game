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
        console.log("init Menu");
        this.addComponent(new MenuBackGround(),-1);
        this.addLayer();
        
        var NewGameButton= Button.getButton('New_Game_Button',185,210,0,0,'NEW GAME');
        var ContinueButton= Button.getButton('New_Game_Button',185,245,0,0,'OPTION');
        var OptionsButton= Button.getButton('about_us',185,280,0,0,'ABOUT US');
        NewGameButton.addClickEvent(new NewSceneEvent(new SelectChapterMenu()));
        NewGameButton.addLongPressEvent(new LongPressEvent());
        
       

        this.addComponent (NewGameButton,-1);
        this.addComponent(ContinueButton,-1);
        this.addComponent(OptionsButton,-1);
        console.log("buttons load complete");
        this.addComponent(new MenuAnimation(),-1);
       
    }



}