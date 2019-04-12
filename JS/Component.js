
/**
 * 
 * everything in game sence will extends this class
 * @author Sai Cao
 * @class Component
 * 
 */

class Component {

   /**
    *Creates an instance of Component.
    * @param {string} id Name Id of component
    * @param {(ImageData|string)} content The image or text in this component
    * @param {number} x The x axis  coordinate
    * @param {number} y The y axis  coordinate
    * @param {number} width The width of this component in canvas
    * @param {number} height The height of this component in canvas
    * @param {boolean} clickable if it can be clicked
    * @memberof Component
    */
   constructor(id, content, x, y, width, height, clickable) {
        
        this.id = id;
        this.content = content;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clickable = clickable;

    }

    /**
     *update this Component for updateFrame function in GameScense
     * @memberof Component
     */
    update() {
        
        CTX.drawImage(this.content, this.x, this.y);

    }


}

