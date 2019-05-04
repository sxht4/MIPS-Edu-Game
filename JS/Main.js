Game=require('./Game');
// author: sai cao Tianyu Cao
// 2 10 2019
 
// global variables
//Context of game_canvas
var CTX=undefined;
var GAME=undefined;
var GAME_CANVAS =undefined
/**
 *main function
 *
 */
function main() {
    
    game_canvas = document.getElementById('gameCanvas');
    GAME=new Game(game_canvas.width,game_canvas.height,30);
    GAME.run();
    CTX =game_canvas.getContext("2d");
    game_canvas.addEventListener("mousedown",longPress);  
    game_canvas.addEventListener("mouseup",longPressOver);
    // game_canvas.addEventListener("click",gameClick);  
 
    GAME_CANVAS=game_canvas;
}
exports.sleep=function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




