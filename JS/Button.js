
/**
 *
 * button is a clickable component in game
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
        this.click_event = null
        this.longpress_event = new LongPressEvent();


    }
    /**
     *
     *
     * @static
     * @param {number} id
     * @param {number} x
     * @param {number} y
     * @param {number} color
     * @param {number} index
     * @param {number} text 
     * @returns
     * @memberof Button
     */
    static getButton(id, x, y, color, index, text) {
        var buttons = RESOURCES.buttons[color];

        var retval = new Button(id, buttons.content, x, y, buttons.sprites[2][index], buttons.sprites[3][index], text, { size: 12, type: 'Arial' }, color, index);
        return retval;

    }
    /**
     *
     * add click event 
     * @param {GameEvent} event
     * @memberof Button
     */
    addClickEvent(event) {

        this.click_event = event;


    }
    /**
     *
     * add Long press Event
     * @param {GameEvent} event
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
        var TextX = this.x + ((this.width - textWidth) / 2);
        //  console.log(TextX);
        var TextY = this.y + ((this.height - this.font.size) / 2) + this.font.size;
        this.drawSprite(this.color, this.sprite_index);
        CTX.fillText(this.text, Math.floor(TextX), Math.floor(TextY));




    }
    /**
     *
     *call it excute click event
     * @param {number} x
     * @param {number} y
     * @memberof Button
     */
    excuteClick(x, y) {
        this.click_event.excute(x, y);
    }
    /**
     *
     *
     * @param {*} x
     * @param {*} y
     * @memberof Button
     */
    excuteLongPress(x, y) {
        this.longpress_event.excute(x, y);
    }

    /**
     *
     * chose which sprite should be draw
     * @param {number} color 0 to 1
     * @param {number} index 0 to 2
     * @memberof Button
     */
    drawSprite(color, index) {

        CTX.drawImage(RESOURCES.buttons[color].content,
            RESOURCES.buttons[color].sprites[0][index], RESOURCES.buttons[color].sprites[1][index],
            this.width, this.height,
            this.x, this.y,
            this.width, this.height);



    }
}
