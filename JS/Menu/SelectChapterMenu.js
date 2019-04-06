

class SelectChapterMenu extends GameScene{
    constructor() {
        super();
        this.FPS=30;
        this.components=[];
       
    }

    init(){
        //CTX.clearRect(0, 0, 480, 320);
        console.log("create select game menu");
        var chapter1Button= Button.getButton('Chapter_1_Button',185,210,0,0,'Chapter 1');
        chapter1Button.addClickEvent(new NewSceneEvent(new GameUI()), new Event());
        
        var background =new Component('Chapter_Menu_Background',RESOURCES.MenuBackGround[2].content,0,0,480,320,false);
        this.addComponent(background,-1);
        this.addLayer();

        this.addComponent(chapter1Button,-1);
        console.log("finish loadding selectChapterButtons");
        //this.components.push(new MenuAnimation());
    }

    
}






