class ChapterOneTest extends Checker{
    constructor(code_panel,r,m,order,scene){
        super(code_panel,r,m);
        this.order = order;
        this.scene=scene;
    }

    check(){
        switch (this.order){
            
            //add test
            case 1:
            if((this.r.getCellAt(2).content==this.r.getCellAt(0).content+this.r.getCellAt(1).content)){
                //if(deepCheck()){
                //GAME.removeScene(-1);
                alert('Congratuation! You know how to use \"add\" instruction now!');
                this.scene.sll();
                return true;
            }else{
                this.r.getCellAt(0).setContent(4);
                this.r.getCellAt(1).setContent(5);
                for(var i = 2; i <= 7; i++){
                    this.r.getCellAt(i).setContent(0);
                }
                alert('Remember, add t0 t1 t2 means t0 = t1 + t2. Try again!');
                return false;
            }

            // sll test
            case 2:
            if((this.r.getCellAt(1).content==5*4)){
                //if(deepCheck()){
                //GAME.removeScene(-1);
                alert('Congratuation! You know how to use \"sll\" instruction now!');
                this.scene.problem();
                return true;
            }else{
                this.r.getCellAt(1).setContent(5);
                alert('Remember, sll t0 t1 n means t0 = t1 * (2^n). Try again!');
                return false;
            }
            case 3:
            if((this.r.getCellAt(0).content==555)){
                //if(deepCheck()){
                GAME.removeScene(-1);
                alert('Congratulation! You have mastered how to compute basic arithmetic in MIPS!');
                return true;
                //}
                //else{
                  //  alert('NO CHEAT SHALL ESCAPE FROM MY SIGHT, KID.');
                    //return false;   
                //}
                
            }else{
                alert('Wrong. Hint: you can regard sll instruction as a multiplication');
                return false;
                }
            case 4:

            break;
     
        }
               
    }

    // deepCheck(){
    //     // add something here.
    //     return true;
    // }
}
