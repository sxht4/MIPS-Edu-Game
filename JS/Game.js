class Game{
    /**
     *Creates an instance of Game.
     * @param {number} width width of the game canvas
     * @param {number} height height of game canvas
     * @param {number} FPS Frame per socond
     * @memberof Game
     */
    constructor(width,height,FPS){
        console.log("create game instance");
        this.game_canvas= document.getElementById('gameCanvas');
        this.game_canvas.width=width;
        this.game_canvas.height=height;
        // all Game sence contain in this array.
        this.game_sences=[];
        // the current sence shown by game.
        this.current_sence=this.game_sences.length;
        this.FPS=FPS;
        CTX=this.game_canvas.getContext("2d");
    }
    /**
     *load Assets for game
     * @memberof Game
     */
    initGame() {
        console.log("init game");
        let count = 0;
        let self=this;
        for (let i = 0; i < buttons.length; i++) {
            var img = new Image();       
            img.onload = function () {
                console.log("loading image " + buttons[i].id);
                if (count == buttons.length - 1) {
                    return self.start();
                }         
                count++;   
            }
            img.src = buttons[i].src;
            buttons[i].content=img;
        }       
    }
    /**
     * run the game
     * @memberof Game
     */
    run(){

        this.initGame();

    }
    /**
     * start draw game sence
     * @memberof Game
     */
    start(){
        console.log("game start");
        this.game_sences.push(new Menu());
        let self=this;
        this.interval = setInterval(function(){
            self.game_sences[self.current_sence].updateFrame();
        }, this.FPS);
    }
}