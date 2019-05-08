
/**
 * @class MenuAnimation
 * @extends {Component}
 */

class MenuAnimation extends Component{
    
    /**
     *Creates a text animation for menu.
     * @param {string} id Name Id of component
     * @param {(ImageData|string)} content The text content in this component
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @param {number} width The width of this component in canvas
     * @param {number} height The height of this component in canvas
     * @param {boolean} clickable If this component can be clicked
     * @memberof MenuAnimation
     */
    constructor(){
        var str="Mips Education Game";
        
        super("MenuAnimation",str,50,0,0,10,false);
        this.speedX = 0;
        this.speedY = 0;    
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.bounce = 0.6;
    }

    /**
     * This function checks if text animation hit the bottom we set, if it does, a
     * rebound motion will be made for it.   
     * @memberof MenuAnimation
     */
    hitBottom () {

        var rockbottom = 320/3 - this.height - 40;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }

    }

    /**
     * This function calculates x and y coordinate for text animation.   
     * @memberof MenuAnimation
     */
    move(){

        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();

    }
    

    /**
     * This function updates text animation's position in canvas.   
     * @memberof MenuAnimation
     */
    update(){
 	 

        CTX.font = "40px Arial";
        CTX.strokeStyle = "white";
        this.move();
  
        CTX.strokeText("MIPS Educational Game",this.x-25,this.y+40);

    }

}
