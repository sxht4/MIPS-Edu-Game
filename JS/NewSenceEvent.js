Event=require('../JS/Event');
class NewSenceEvents extends Event {
    /**
     *Creates an instance of NewSenceEvents.
     * @param {GameScene} new_sence  is latest sence that will be added to GAME
     * @memberof NewSenceEvents
     */
    constructor(new_sence){
        super("new game");
        this.new_sence=new_sence;
    }

  

    excute(){
        CTX.clearRect(0, 0, 480, 320);
        GAME.addSence(this.new_sence);
    }
   
}

module.exports=NewSenceEvents;
