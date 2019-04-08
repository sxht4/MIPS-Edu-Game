
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
        this.width=width;
        this.height=height;
        // all Game scene contain in this array.
        this.game_scenes = [];
        // the current scene shown by game.
        this.current_scene = this.game_scenes.length;
        this.FPS = FPS;
        this.speed=1;

    }
    /**
     *load Assets for game
     * @memberof Game
     */
    initGame() {

        var loader = new Loader(function () {
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
    getCurrentScene() {
        return this.game_scenes[this.game_scenes.length - 1];
    }
    /**
     * start draw game scene
     * @memberof Game
     */
    start() {
        console.log("game start");
        var menu = new Menu();
        menu.init();
        this.addScene(menu);
        let self = this;
        this.interval = setInterval(function () {
            CTX.clearRect(0, 0, 480, 320);
            self.getCurrentScene().updateFrame();

        }, this.FPS);
    }
    addScene(scene) {

        this.game_scenes.push(scene);

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
function longPress (event){
    console.log('game click');
    var x = event.offsetX;
    var y = event.offsetY;
    let element = GAME.getCurrentScene().getClickedElement(x, y);
    if (element != null && element.clickable) {
        timer = setTimeout(function(){
            element.excuteLongPress();
        }, 2000);
       
        
    }


}
function gameClick(){
    var x = event.offsetX;
    var y = event.offsetY;
    var element = GAME.getCurrentScene().getClickedElement(x, y);
    if (element != null && element.clickable) {
        element.excuteClick(x,y);
       
        
    }



}
function temp(){
  
        alert('long press');
        
    
}


/**
 * This function stop timer that were opened in longpress event, and it determine what would happen
 * if user stop press element.
 *
 * @param {event} event
 */
function longPressOver(event) {
    clearTimeout(timer);
}