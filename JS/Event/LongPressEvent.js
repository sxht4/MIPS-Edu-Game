/**
 * This class will be called when a LongPress event is executed. 
 * And it determine what would happen if LongPress event is executed.
 * 
 * @class LongPressEvent
 * @extends {GameEvent}
 */

class LongPressEvent extends GameEvent {

    /**
     *Creates an instance of LongPressEvent.
     * @memberof LongPressEvent
     */
    constructor(){
        super("longPress",0);
    }

  
/**
 * This function determine what would happen if LongPress event is executed
 *
 * @param {number} x
 * @param {number} y
 * @memberof LongPressEvent
 */
excute(x,y){
        alert("longPressEvent Class");
        console.log("longPressEvent Class");
        
    }
   
}
