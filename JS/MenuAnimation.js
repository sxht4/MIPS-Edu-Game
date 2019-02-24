class MenuAnimation extends Component{
    constructor(){
        var str="Mips Education Game";
        
        super("MenuAnimation",str,50,25,0,10,false);

        this.speedX = 0;
        this.speedY = 0;    
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.bounce = 0.6;
    }

    hitBottom () {
        var rockbottom = 320/3 - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
    move(){

        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();

    }
    
    update(){

        this.move();
        CTX.font = "40px Arial";
       // CTX.clearRect(this.x, this.y,CTX.measureText(this.content),this.height);
        CTX.strokeText(this.content,this.x,this.y);

    }

}
