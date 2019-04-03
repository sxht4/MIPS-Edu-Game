/**
 * This class will be called when a LongPress event is executed. 
 * And it determine what would happen if LongPress event is executed.
 * 
 * @class LongPressEvent
 * @extends {Event}
 */

class LongPressEvent extends Event {

    /**
     *Creates an instance of LongPressEvent.
     * @memberof LongPressEvent
     */
    constructor(){
        super("longPress");
    }

  
/**
 * This function determine what would happen if LongPress event is executed
 *
 * @param {number} x
 * @param {number} y
 * @memberof LongPressEvent
 */
excute(x,y){
        SOUNDS.click.play();
        console.log("longPressEvent Class");
        
    }
   
}
