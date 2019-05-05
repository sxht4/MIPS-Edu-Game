GameEvent=require('./GameEvent');
/**
 * alert a hint when event happen
 *  
 * @class HintEvent
 * @extends {GameEvent}
 */
 class HintEvent extends GameEvent{

    constructor(id){
        super(id,0);
        this.content=null;
    }
    setHintContent(content){
        this.content=content;
    }
    /**
     *excute this event
     *
     * @param {number} x
     * @param {number} y
     * @memberof HintEvent
     */
    excute(x,y){
        alert(this.content);

    }

}
module.exports=HintEvent;