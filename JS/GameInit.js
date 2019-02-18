// author: sai cao
// 2 10 2019 

var CTX=undefined;



// var BACKGROUND_FPS =30;


function initGame() {
    
    console.log("draw menu");

    //set up Canvas size 480*320
    var gameCanvas = document.getElementById('gameCanvas');
    gameCanvas.width = 480;
    gameCanvas.height = 320;
    CTX = gameCanvas.getContext("2d");
 
//add aniamtion code in here
//    CTX.fillStyle = "#f2f2f2";
//    CTX.font = "20pt sans-serif";
//    CTX.fillStyle = "blue";
//    CTX.textAlign = 'center';
//    CTX.fillText("background animations", gameCanvas.width / 2, gameCanvas.height / 2);
      var menu=new Menu(CTX);
      menu.drawComponents();

}





// function draw(){

//     setInterval(drawBackground(), 1000/FPS);





// }



// function drawBackground(){




// }





