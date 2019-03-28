class Menu extends GameScene {
    /**
     *Creates an instance of Menu.
     * @memberof Menu
     */
    constructor() {
        super();
        this.initMenu();
    }


    /**
     *init menu
     * @memberof Menu
     */
    initMenu() {
        console.log("init Menu");
        var NewGameButton= Button.getButton(RESOURCES.buttons[0]);
        var ContinueButton= Button.getButton(RESOURCES.buttons[1]);
        var OptionsButton=Button.getButton(RESOURCES.buttons[2]);

        NewGameButton.event_controller=new EventController(new NewSenceEvents(new SelectChapterMenu()),new Event());

        this.addComponent (NewGameButton,-1);
        this.addComponent(ContinueButton,-1);
        this.addComponent(OptionsButton,-1);
        console.log("buttons load complete");
        this.addComponent(new MenuAnimation(),-1);
       
    }

}