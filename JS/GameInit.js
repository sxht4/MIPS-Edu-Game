
initGame();
function initGame() {
    var gameCanvas = document.getElementById("gameCanvas");
    var background = gameCanvas.getContext("2d");
    background.fillStyle = "#f2f2f2";
    background.fillRect(0, 0,gameCanvas.width,gameCanvas.height );
    background.font = "20pt sans-serif";
    background.fillStyle = "blue";
    background.textAlign = 'center'; 
    background.fillText("background animations", gameCanvas.width/2, gameCanvas.height/2); 
    

}

