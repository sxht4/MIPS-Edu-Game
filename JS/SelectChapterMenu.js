class SelectChapterMenu extends GameScene{
    constructor() {
        super();
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }

    initMenu(){
        //CTX.clearRect(0, 0, 480, 320);
        console.log("create select game menu");
        var chapter1Button= Button.getButton(RESOURCES.select_chapter_button[0]);

        chapter1Button.event_controller=new EventController(new NewSenceEvents(new GameUI()), new Event());
        this.components.push(chapter1Button);
        console.log("finish loadding selectChapterButtons");
        //this.components.push(new MenuAnimation());
    }

    
}






