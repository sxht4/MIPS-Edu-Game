class Chapter1Test extends Checker{
    constructor(code_panel,r,m){
       super(code_panel,r,m);

    }

    check(){
        if((this.r.getCellAt(0).content==555)){
            //if(deepCheck()){
            GAME.removeScene(-1);
            alert('good job');
            return true;
            //}
            //else{
              //  alert('NO CHEAT SHALL ESCAPE FROM MY SIGHT, KID.');
                //return false;   
            //}
            
        }else{
            alert('WRONG! TRY AGAIN!');
            return false;
            }
        
    }

    // deepCheck(){
    //     // add something here.
    //     return true;
    // }
}