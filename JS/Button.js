var Component=require('./Component');
EventController=require('./EventController');
Event=require('./Event');
/**
 *
 *
 * @class Button
 * @extends {Component}
 */
class  Button extends Component
{

    /**
     *Creates an instance of Button.
     * @param {string} id Name Id of component
     * @param {(ImageData|string)} content The image or text in this component
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @param {number} width The width of this component in canvas
     * @param {number} height The height of this component in canvas
     * @memberof Button
     */
    constructor (id,content,x,y,width,height,event_controller){

        super(id,content,x,y,width,height,true);
        //this.event=event;

    }
    /**
     * create a button instance by resource objcet
     *
     * @static
     * @param {Object} obj Obj in resource class
     * @returns button instance
     * @memberof Button
     */
    static getButton(obj){
        console.log("new obj");
       return new Button(obj.id,obj.content,obj.x,obj.y,obj.content.width,obj.content.height,true);

    }
    /**
     *create a button instance with three parameters
     *
     * @static
     * @param {string} id Name Id of component
     * @param {(ImageData|string)} content The image or text in this component 
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @returns button instance
     * @memberof Button
     */
    static getButton2(id,content,x,y){
        console.log("call this");
       return new Button(id,content,x,y,content.width,content.height,true);
    }
    /**
     * update this Component for updateFrame function in GameScense
     * @memberof Button
     */
    update(){
        CTX.clearRect(this.x,this.y,this.content.width,this.content.height);
        CTX.drawImage(this.content, this.x,this.y);
    }
    excuteClick(){
        this.event_controller.clickEvent();
    }
}

module.exports=Button;
