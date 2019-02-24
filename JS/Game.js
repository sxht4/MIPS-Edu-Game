class Game{
    constructor(width,height,FPS){
        console.log("create game");
        this.game_canvas= document.getElementById('gameCanvas');
        this.game_canvas.width=width;
        this.game_canvas.height=height;
        this.game_sences=[];
        this.layer=this.game_sences.length;
        this.FPS=FPS;
        CTX=this.game_canvas.getContext("2d");
        console.log("done game");


        
    }

    initGame() {
        console.log("init game");
        let count = 0;
        let self=this;
        for (let i = 0; i < buttons.length; i++) {
            var img = new Image();       
            img.onload = function () {
                console.log("loading image " + buttons[i].id);
                console.log(img.src);
                
                if (count == buttons.length - 1) {
                    return self.start();
                }         
                count++;
                
                
            }
            img.src = buttons[i].src;
            buttons[i].content=img;
           
            
        }       
    }

    run(){
        console.log("run");
        this.initGame();
       
    }
    start(){
        console.log("game start");
        this.game_sences.push(new Menu());
        let self=this;
        this.interval = setInterval(function(){
            self.game_sences[self.layer].updateFrame();
        }, this.FPS);
    }



}