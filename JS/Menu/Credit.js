

/**
 *
 *
 * @class Credit
 * @extends {GameScene}
 */
class Credit extends GameScene {
    constructor() {
        super();
        this.components=[];
       this.init();
    }

    init(){
        var background =new Component('Chapter_Menu_Background',RESOURCES.MenuBackGround[2].content,0,0,480,320,false);
        this.addComponent(background,-1);
        this.addLayer();

        //CTX.fillText("https://itch.io/", 20 , 20);
    }

    /**
     *
     *
     * @memberof Credit
     */
    updateFrame(){

        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i].updateLayer();
        }
        CTX.fillStyle = "black";
        CTX.font = "25px Arial";
        CTX.fillText("Game assets: https://itch.io/", 40 , 40);
        CTX.font = "14px Arial";
        CTX.fillText("Team members: Sai Cao, Hangzhang Bai, Tianyu Cao, Xiang Li", 40 , 70);
    }
} 