class SelectChapterMenu extends GameScene{
    constructor() {
        super();
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }

    initMenu(){
        var chapter1Button= Button.getButton(RESOURCES.select_chapter_button[0]);
        chapter1Button.event_controller=new EventController(new NewSenceEvents(new GameUI()), new Event());
        this.components.push(chapter1Button);
    }

    
}






