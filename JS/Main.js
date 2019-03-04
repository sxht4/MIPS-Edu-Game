// author: sai cao Tianyu Cao
// 2 10 2019
 
// global variables
var CTX=undefined;
var GAME=undefined;
module.exports=Game;
function main() {
    game_canvas = document.getElementById('gameCanvas');
    var game=new Game(game_canvas.width,game_canvas.height,30);
    game.run();
    CTX =game_canvas.getContext("2d");
    game_canvas.addEventListener("click", gameClick);
}
