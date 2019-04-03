
/**
 *
 *
 * @class Button
 * @extends {Component}
 */
class Button extends Component {

    /**
     *Creates an instance of Button.
     * @param {string} id Name Id of component
     * @param {(ImageData|string)} content The image or text in this component
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @param {number} width The width of this component in canvas
     * @param {number} height The height of this component in canvas
     * @memberof Button
     * 
     */
    constructor(id, content, x, y, width, height, text, font, color, sprite_index) {

        super(id, content, x, y, width, height, true);
        this.click_event = event;
        this.color = color;
        this.sprite_index = sprite_index;
        this.text = text;
        this.font = font;
        this.click_event = new Event();
        this.longpress_event = new Event();



    }
    /**
     * create a button instance by resource objcet
     *
     * @static
     * @param {Object} obj Obj in resource class
     * @returns button instance
     * @memberof Button
     */
    static getButton(id, x, y, color, index, text) {
        var buttons = RESOURCES.buttons[color];
      
        var retval = new Button(id, buttons.content, x, y, buttons.sprites[2][index], buttons.sprites[3][index], text, { size: 12, type: 'Arial' }, color, index);
        return retval;

    }
    /**
     *
     *
     * @param {*} event
     * @memberof Button
     */
    addClickEvent(event) {

        this.click_event = event;


    }
    /**
     *
     *
     * @param {*} event
     * @memberof Button
     */
    addLongPressEvent(event) {
        this.longpress_event = event;
    }

    /**
     * update this Component for updateFrame function in GameScense
     * @memberof Button
     */
    update() {
        CTX.font = this.font.size + 'px ' + this.font.type;
        CTX.fillStyle = "white";
        var textWidth = CTX.measureText(this.text).width;
       // console.log(textWidth);
        var TextX = this.x+((this.width - textWidth) / 2);
      //  console.log(TextX);
        var TextY = this.y+((this.height - this.font.size) / 2)+this.font.size;
        this.drawSprite(this.color, this.sprite_index);
        CTX.fillText(this.text, Math.floor(TextX), Math.floor(TextY));
      
      
        

    }
    excuteClick(x, y) {
        this.event_controller.clickEvent(x, y);
    }
    excuteLongPress(x,y){
        this.event_controller.mouseDownEvent(x,y);
    }

    drawSprite(color, index) {

        CTX.drawImage(RESOURCES.buttons[color].content,
            RESOURCES.buttons[color].sprites [0] [index], RESOURCES.buttons[color].sprites[1][index],
            this.width, this.height,
            this.x, this.y,
            this.width, this.height);
           


    }
}
