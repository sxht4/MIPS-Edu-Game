class GoalEvent extends GameEvent{
    constructor(dialogueLayer){
        super();
        this.dialogueLayer=dialogueLayer;
        this.show=true;

    }
    excute(){
        if(this.show){
            GAME.getCurrentScene().removeLayer(-1);
           
        }else{
            GAME.getCurrentScene().layers.push(this.dialogueLayer);
        }
        this.show=!this.show;

        
    }
}