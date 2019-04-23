
    /**
     * append a line to this dialogue box
     *
     * @param {string} str
     * @memberof Dialogue
     */
class Dialogue extends Component{
    constructor(id){
        super(id,[],100,100,200,150,false);
        
        

    }

    appendLine(str){
        this.content.push(str);


    }

    /**
     * draw this content
     *
     * @memberof Dialogue
     */
    update() {
        this.drawbackground();
        CTX.fillStyle = 'Red';
        CTX.font = this.font;
        
        for(var i=0;i<this.content.length;i++){
            CTX.fillText(this.content[i],this.x+10,(this.y+(18*(i+1))));
        }

    }
    /**
     *draw background of the Dialogue box
     *
     * @memberof Dialogue
     */

    update() {
        this.drawbackground();
        CTX.fillStyle = 'Red';
        CTX.font = "14px Arial";
        
        for(var i=0;i<this.content.length;i++){
            CTX.fillText(this.content[i],this.x+20,(this.y+(18*(i+1))));
        }

    }

    drawbackground(){
        CTX.fillStyle = "#41f459";
        CTX.fillRect(this.x,this.y, this.width, this.height);


    }
    
}