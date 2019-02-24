class Menu extends GameSence {




    constructor(game_images,game_canvas) {
        super(game_canvas);
        this.game_images=game_images;
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }



    //load Menu resources

    initMenu() {
        console.log("init Menu");
        var NewGameButton= Button.getButton(buttons[0]);
        var ContinueButton= Button.getButton(buttons[1]);
        var OptionsButton=Button.getButton(buttons[2]);
        this.components.push(NewGameButton);
        this.components.push(ContinueButton);
        this.components.push(OptionsButton);
        this.components.push(new MenuAnimation());
        console.log("buttons load complete");
    }



    
        


    


}