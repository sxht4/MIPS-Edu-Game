
 class Game {
    /**
     *Creates an instance of Game.
     * @param {number} width width of the game canvas
     * @param {number} height height of game canvas
     * @param {number} FPS Frame per socond
     * @memberof Game
     */
    constructor(width, height, FPS) {
        console.log("create game instance");
  
        // all Game sence contain in this array.
        this.game_sences = [];
        // the current sence shown by game.
        this.current_sence = this.game_sences.length;
        this.FPS = FPS;
        
    }
    /**
     *load Assets for game
     * @memberof Game
     */
    initGame() {
        GAME = this;
        SOUNDS=new GameSounds();
        console.log("init game");
        let count = 0;
        let end=RESOURCES.buttons.length+RESOURCES.select_chapter_button.length-1;

        let self = this;
        for (let i = 0; i < RESOURCES.buttons.length; i++) {

            var img = new Image();
            img.onload = function () {
                console.log("loading image " + RESOURCES.buttons[i].id);
                if (count == end) {
                    self.start();
                }
                count++;
            }
            img.src = RESOURCES.buttons[i].src;
            RESOURCES.buttons[i].content = img;
        }
        
        for (let j = 0; j < RESOURCES.select_chapter_button.length; j++) {
            var img = new Image();
            img.onload = function () {
                console.log("loading image " + RESOURCES.select_chapter_button[j].id);
                if (count == end) {
                    self.start();
                }
                count++;
            }
            img.src = RESOURCES.select_chapter_button[j].src;
            RESOURCES.select_chapter_button[j].content = img;

        }

        for (let j = 0; j < RESOURCES.game_UI_button.length; j++) {
            var img = new Image();
            img.onload = function () {
                console.log("loading image " + RESOURCES.game_UI_button[j].id);
                if (count == end) {
                    self.start();
                }
                count++;
            }
            img.src = RESOURCES.game_UI_button[j].src;
            RESOURCES.game_UI_button[j].content = img;

        }



    
    }
    /**
     * run the game
     * @memberof Game
     */
    run() {

        this.initGame();

    }
    getCurrentSence() {
        return this.game_sences[this.game_sences.length - 1];
    }
    /**
     * start draw game sence
     * @memberof Game
     */
    start() {
        console.log("game start");
        this.game_sences.push(new Menu());
        let self = this;
        this.interval = setInterval(function () {
            self.getCurrentSence().updateFrame();
        }, this.FPS);
    }
    addSence(sence) {

        this.game_sences.push(sence);

    }
}

function gameClick(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    var element = GAME.getCurrentSence().getClickedElement(x, y);
    if (element!=null&&element.clickable) {
        alert(element.id);
        element.excuteClick(x,y);
    }
}
