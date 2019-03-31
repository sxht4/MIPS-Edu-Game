

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
        var chapter1Button= Button.getButton('Chapter_1_Button',185,210,0,0,'Chapter 1');
        chapter1Button.event_controller=new EventController(new NewSenceEvents(new GameUI()), new Event());
        this.addComponent(chapter1Button,-1);
        console.log("finish loadding selectChapterButtons");
        //this.components.push(new MenuAnimation());
    }

    
}






