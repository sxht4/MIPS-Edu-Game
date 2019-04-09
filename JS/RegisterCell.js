/**
 * @class RegisterCell
 * @extends {Component}
 * 
 * This class is used in Register class
 */
class RegisterCell extends Component{
    constructor(id, content, x, y, width, height, clickable){
        super(id, content, x, y, width, height, clickable);
    }

    /**
     *
     *
     * @param {*} value : This value will be stored in this cell
     * @memberof RegisterCell
     */
    setContent(value){

        if(value==null){
            this.content='';
        }else{
            this.content=value;
        }
        
    }

    /**
     *
     *
     * @returns The content of this cell
     * @memberof RegisterCell
     */
    getContent(){
        if(this.content==''){
            return null;
        }else{
            return this.content ;
        }
        
    }
    /**
     *
     * 
     * @memberof RegisterCell
     */
    excuteClick(){
        alert("Register"+this.id);
    }
    /**
     *
     *
     * @memberof RegisterCell
     */
    update(){
        
      
        CTX.fillStyle = "red";
        CTX.fillText(this.content, this.x, this.y);
        CTX.fillText("t"+this.id, this.x, this.y-20);
        
    }
}