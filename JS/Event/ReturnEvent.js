class ReturnEvent{
    constructor(remove){
        if(remove==undefined){
            this.remove=true;
        }
        this.remove=remove;
        
    }
    excute(x,y){
        if(this.remove){
            GAME.removeScene(-1);
        }else{
            GAME.current_scene--;
        }
    }
}
module.exports=ReturnEvent;