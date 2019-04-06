
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
       
        var loader=new Loader(function(){
            GAME.start();
        });
        loader.loadResources();
    
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
            CTX.clearRect(0, 0, 480, 320);
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

// timer is a valuable that will be used in longPress, it determine how long a element need to be pressed.
var timer;

/**
 * This function check if the clicked element is null and clickable, ann then it sets a timer for longpress
 * event, that is, how long does user needs to press it in order to call a longpress event. 
 *
 * @param {event} event
 */

 function longPress(event){
    console.log("begin");
    var x = event.offsetX;
    var y = event.offsetY;
    var element = GAME.getCurrentSence().getClickedElement(x, y);
    if (element!=null&&element.clickable) {
        timer = setTimeout(temp, 2000);
        //timer = setTimeout(function(){ alertFunc("First parameter", "Second parameter"); }, 2000);
        element.excuteLongPress(x,y);
    }
    
}
// This is temporary test function
function temp(){
    alert("Long Press Game");
}

/**
 * This function stop timer that were opened in longpress event, and it determine what would happen
 * if user stop press element.
 *
 * @param {event} event
 */
function longPressOver(event){
    clearTimeout(timer);
}