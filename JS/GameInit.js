// author: sai cao Tianyu Cao
// 2 10 2019 

var CTX=undefined;
var myGamePiece;


// var BACKGROUND_FPS =30;

function initGame() {
    myGamePiece = new component(10, 50, 25);
    myGameArea.start();
    //Animation timer, animation will stop after 8 sec.
        var t=setInterval(function(){startTime()},800);
        var counter = 1;
        function startTime()
	{
  	   if(counter == 8) {
    	      clearInterval(t);
    	      myGameArea.stop();
           }else {
    	      counter++;
  	   }
        }
}

//Our game area (include canvas)
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 320;
        this.context = this.canvas.getContext("2d");
        CTX = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 0);

    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(height, x, y, type) {
    this.type = type;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.font = "40px Arial";
        ctx.strokeText("Mips Education Game",this.x,this.y);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height/3 - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
    var menu=new Menu(CTX);
    menu.drawComponents();
}
  



// function draw(){

//     setInterval(drawBackground(), 1000/FPS);





// }



// function drawBackground(){




// }





