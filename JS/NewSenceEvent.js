class NewSenceEvents extends Event {
    constructor(new_sence){
        super();
        this.new_sence=new_sence;
    }

  

    excute(){
        
        Game.addSence(this.new_sence);
    }
   
}