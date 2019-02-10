// author: sai cao
// 2 10 2019 

var ctx;
var buttons= [{ty:"Image",name:"NewGameButton",src: "Assets/menu/NewGameButton.jpg",x:180, y:200},
{ty:"Image",name:"ContinueButton",src: "Assets/menu/ContinueButton.jpg",x:180, y:238},
{ty:"Image",name:"OptionsButton",src: "Assets/menu/OptionsButton.jpg",x:180, y:276}
];
function initGame() {
    console.log("draw menu");

    //set up Canvas size 480*320
    var gameCanvas = document.getElementById('gameCanvas');
    gameCanvas.width = 480;
    gameCanvas.height = 320;
    ctx = gameCanvas.getContext("2d");
 

   //add aniamtion code in here
    ctx.fillStyle = "#f2f2f2";
    ctx.font = "20pt sans-serif";
    ctx.fillStyle = "blue";
    ctx.textAlign = 'center';
    ctx.fillText("background animations", gameCanvas.width / 2, gameCanvas.height / 2);
        
    //set up buttons add eventlistenr in future

      var NewGameButton= new button(buttons[0]);
      var ContinueButton= new button(buttons[1]);
      var OptionsButton=new button(buttons[2]);
      console.log("buttons load complete");
      






}



class button {
    constructor(Asset) {
        this.x = Asset.x;
        this.y = Asset.y;
        var img = new Image();
      
        img.onload = function () {
      
            ctx.drawImage(img, Asset.x, Asset.y);
        }
      
        img.src = Asset.src;
       

    }





  
}


