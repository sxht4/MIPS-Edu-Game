class NewSenceEvents extends Event {
    constructor(new_sence){
        super("new game");
        this.new_sence=new_sence;
    }

  

    execute(){
        CTX.clearRect(0, 0, 480, 320);
        GAME.addSence(this.new_sence);
    }
   
}
