class Menu extends GameSence {
    /**
     *Creates an instance of Menu.
     * @param {Object[]} game_images loaded image resource that will be used for init Menu
     * @memberof Menu
     */
    constructor(game_images) {
        super();
        this.game_images=game_images;
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }


    /**
     *init menu
     * @memberof Menu
     */
    initMenu() {
        console.log("init Menu");
        var NewGameButton= Button.getButton(buttons[0]);
        var ContinueButton= Button.getButton(buttons[1]);
        var OptionsButton=Button.getButton(buttons[2]);
        this.components.push(NewGameButton);
        this.components.push(ContinueButton);
        this.components.push(OptionsButton);
        console.log("buttons load complete");
        this.components.push(new MenuAnimation());
       
    }

}