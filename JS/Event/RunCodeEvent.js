GameEvent=require('./GameEvent');
/**
 *
 *
 * @class RunCodeEvent
 * @extends {GameEvent}
 */
class RunCodeEvent extends GameEvent {
    constructor(interpreter) {
        super('run code', 0);
        this.interpreter = interpreter;
    }
    excute(x, y) {
        this.clickCount++;
        this.interpreter.prase();
        
        

    }
}
module.exports=RunCodeEvent;