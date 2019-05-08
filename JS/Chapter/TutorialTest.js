
/**
 * demo implement
 * check the result in tutorial chapter
 * @class TutorialTest
 * @extends {Checker}
 */
class TutorialTest extends Checker{
    /**
     *Creates an instance of TutorialTest.
     * @param {CodePanel} code_panel
     * @param {Register} r
     * @param {Memory} m
     * @memberof TutorialTest
     */
    constructor(code_panel,r,m){
       super(code_panel,r,m);

    }
    /**
     *
     *check the result in tutorial chapter
     * @returns
     * @memberof TutorialTest
     */
    check(){
        if((this.r.getCellAt(0).content==5)){
           GAME.removeScene(-1);
           alert('Congratulations, you get it right. Good job!');
           return true;
            
        }else{
            this.r.getCellAt(0).content=4;
            this.r.getCellAt(1).content=5;
            alert('Sorry, it is incorrect. Please try again.');
            return false;
        }
        
    }
}