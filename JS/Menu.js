class Menu extends GameScene {
    /**
     *Creates an instance of Menu.
     * @memberof Menu
     */
    constructor() {
        super();
       
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }


    /**
     *init menu
     * @memberof Menu
     */
    initMenu() {
        
        var NewGameButton= Button.getButton(RESOURCES.buttons[0]);
        var ContinueButton= Button.getButton(RESOURCES.buttons[1]);
        var OptionsButton=Button.getButton(RESOURCES.buttons[2]);
        NewGameButton.event_controller=new EventController(new NewSenceEvents(new SelectChapterMenu()),new Event());
        this.components.push(NewGameButton);
        this.components.push(ContinueButton);
        this.components.push(OptionsButton);
        this.components.push(new MenuAnimation());
       
    }

}