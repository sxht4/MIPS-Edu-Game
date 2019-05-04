Component=require('../Component');

/**
 *
 * Used in  Code panel to show text
 * @class TextCell
 * @extends {Component}
 * @author Sai Cao
 * @version 3/29/2019
 */
class TextCell extends Component{

    constructor(id, content, x, y, width, height, clickable){
      super(id, content, x, y, width, height, clickable);
      this.background=null;
      this.font=12;
      this.color='grey';
      
    }


    /**
     *
     *set  text in this cell
     * @param {string} str
     * @memberof TextCell
     */
    setContent(str){
        if(str==null){
            str='';
        }
        this.content=str;
    }
    /**
     *
     * return text string in this cell
     * @returns {string} content string
     * @memberof TextCell
     */
    getContent(){

        return this.content;
    }


    highLight(str){
        if(str==undefined){
            this.color='green';
        }else{
            this.color=str;
        }
       

    }
    deHighLight(){
        this.color='grey';
    }

    
    /**
     *
     *draw this component
     * @memberof TextCell
     */
    update(){
        CTX.fillStyle = this.color;
        CTX.fillRect(this.x,this.y, this.width, this.height);
        CTX.fillStyle = "white";
        CTX.font = this.font+"px Arial";
       // console.log(this.content);
        CTX.fillText(this.content,this.x+4,this.y+this.height-2);
        if(this.content==null){
            this.content='';
        }
       

    }

}
module.exports=TextCell;