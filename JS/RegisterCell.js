/**
 * @class RegisterCell
 * @extends {Component}
 * 
 * This class is used in Register class
 */
class RegisterCell extends Component{
    constructor(id, content, x, y, width, height, clickable){
        super(id, content, x, y, width, height, clickable);
        //this.content=null;
    }

    /**
     *
     *
     * @param {*} value : This value will be stored in this cell
     * @memberof RegisterCell
     */
    setContent(value){
        if(str==null){
            str='';
        }
        this.content=value;
    }

    /**
     *
     *
     * @returns The content of this cell
     * @memberof RegisterCell
     */
    getContent(){
        return this.content;
    }

    excuteClick(){
        alert("Register"+this.id);
    }

    update(){
        if(this.content==null){
            this.content='';
        }
        CTX.fillStyle = "red";
        CTX.fillText(this.content, this.x, this.y);
        CTX.fillText("t"+this.id, this.x, this.y-20);
        
    }
}