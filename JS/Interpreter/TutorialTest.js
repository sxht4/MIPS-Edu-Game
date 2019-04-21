class TutorialTest extends Checker{
    constructor(code_panel,r,m){
       super(code_panel,r,m);

    }

    check(){
        if((this.r.getCellAt(0).content==5)){
           GAME.removeScene(-1);
           alert('good job');
           return true;
            
        }else{
            alert('not correct,try again');
            return false;
        }
        
    }
}