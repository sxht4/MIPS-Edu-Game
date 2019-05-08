
/**
 * Chapter One, which teaches user how to use basic 
 * arithmetic intrustions, such as add, sll, srl.
 * @class ChapterOne
 * @extends {MainScene}
 */
class ChapterOne extends MainScene {
    
    /**
     *Creates an instance of ChapterOne.
     * @memberof ChapterOne
     */
    constructor() {
        super();
        
       




    }
    /**
     * init the this chapter
     *
     * @memberof ChapterOne
     */
    init() {
        this.except_component = null;
        this.ErrorText = null;
        this.modcount = 0;
        this.count = 0;
        super.init();
        this.GoalButton = Button.getButton('C1Goal', 375, 0, 1, 3, 'Goal');
        console.log(this.layers);
        this.addComponent(this.GoalButton,-1);

        this.introduction();



    }


    introduction(){
        this.addLayer();
        var intro = new Dialogue();
        this.cp.instructions = [''];
        intro.appendLine('In this chapter, you will be learning basic');
        intro.appendLine('instructions related to some basic');
        intro.appendLine('arithmetic operations, such as \"add\", \"sll\".');
        intro.appendLine('Now, Click on the green area to');
        intro.appendLine('begin \"add\" instruction.');
        intro.width = 270;
        intro.height =100;
        intro.x = 90;
        intro.y =70;
        this.except_component = intro;
        this.ErrorText = 'Please read the instruction in the green area carefully.';
        this.addComponent(intro, -1);
        console.log(this.GoalButton);
    }

    add(){
     
        this.removeLayer(-1);
        var ly= this.addLayer();
        var add = new Dialogue();
        this.cp.instructions = [''];
        this.r.getCellAt(0).setContent(4);
        this.r.getCellAt(1).setContent(5);
        add.appendLine('\"Add\" instruction performs addition');
        add.appendLine('operation, and stores the result in a');
        add.appendLine('specific register. For example:');
        add.appendLine('If you want to compute t0 = t1 + t2,');
        add.appendLine('you should type:\"add $t0 $t1 $t2\"');
        add.appendLine('On the code panel, what you would do this');
        add.appendLine('trick. Now, try to compute t2 = t0 + t1');
        add.width = 270;
        add.height =140;
        add.x = 90;
        add.y = 40;
        // this.except_component=this.getByID('Code_Run');
        this.addComponent(add, -1);
        console.log("1");
        this.interpreter.test=new ChapterOneTest(this.cp,this.r,this.m, 1, this);
        //console.log("interpreter test:" + this.interpreter.test.check());
        this.C1GoalEvent= new GoalEvent(ly);
        // this.C1GoalEvent.setHintContent("Compute function t2 = t0 + t1 by using \"add\" instrution ");
        this.GoalButton.addClickEvent(this.C1GoalEvent);
        this.count=5;
    }

    sll(){
        //if(this.r.getCellAt(2).content==9){
            if(this.C1GoalEvent.show){
                this.removeLayer(-1);
            }
            // this.removeLayer(-1);
            var ly=this.addLayer();
            var add = new Dialogue();
            this.cp.instructions = [''];
            this.r.getCellAt(1).setContent(5);
            add.appendLine('Now, let\'s take a look at \"sll\".');
            add.appendLine('\"sll\" performs shift left logical');
            add.appendLine('operation, where shift left one means');
            add.appendLine('move each bit to the left by one, ');
            add.appendLine('a simple version: mulitiply number by 2');
            add.appendLine('for each shift. If you want to compute');
            add.appendLine('t0 = t0 * 2, you should type:');
            add.appendLine('\"sll $t0 $t0 1\" on the code panel,');
            add.appendLine('which shift t0 left by one.');
            add.appendLine('Now, try to compute t1 = t1 * 4');
            add.width = 270;
            add.height =190;
            add.x = 90;
            add.y = 10;
            this.addComponent(add, -1);
            this.interpreter.test=new ChapterOneTest(this.cp,this.r,this.m, 2, this);
            this.C1GoalEvent= new GoalEvent(ly);
            this.GoalButton.addClickEvent(this.C1GoalEvent);
            // this.C1GoalEvent.setHintContent("Compute function t1 = t1 * 4 by using \"sll\" instruction. ");
            this.count=5;
            return;
        }//else{
           // this.count=4;
            //this.removeLayer(-1);
            //alert('Remember, add t0 t1 t2 means t0 = t1 + t2. Try again!');
            //this.add();

            //return;
        //}
        
    //}
    
    problem() {
        //if(this.interpreter.test.check()){
            this.cp.instructions = [''];
            if(this.C1GoalEvent.show){
                this.removeLayer(-1);
            }
            var ly =this.addLayer();
            //this.count=3;
            //this.highLight(this.cp);
            var pro = new Dialogue('problem 1');
            pro.x = 90;
            pro.y=40;
            pro.width = 270;
            pro.height = 150;
            pro.appendLine('Now, you are going to meet your match:');
            pro.appendLine('compute the following function:');
            pro.appendLine('t0 = 31*(t1^2) + 4*t2 + 7');
            //this.except_component = pro;
            //this.ErrorText = 'Please read the instruction in green area carefully.';
            // this.C1GoalEvent= new HintEvent('C1Goal');
            // this.C1GoalEvent.setHintContent("Compute function t0 = 31*(t1^2) + 4*t2 + 7.");
            // this.GoalButton.addClickEvent(this.C1GoalEvent);
            this.C1GoalEvent= new GoalEvent(ly);
            this.GoalButton.addClickEvent(this.C1GoalEvent);
            this.addComponent(pro, -1);
            this.r.getCellAt(1).setContent(4);
            this.r.getCellAt(2).setContent(13);
            this.interpreter.test=new ChapterOneTest(this.cp,this.r,this.m, 3);
            this.count=5;
            
        //}else{
    //         this.count = 100;
    //         this.removeLayer(-1);
    //         this.sll();

    //         return;
    //     }
        
    }
 
    clearScreen(){
        console.log('call clear');
        this.removeLayer(-1);
        this.addLayer();
        this.r.getCellAt(1).setContent(4);
        this.r.getCellAt(2).setContent(13);
        this.interpreter.test=new ChapterOneTest(this.cp,this.r,this.m, 3);
        this.count++;
    }

    highLightByID(str) {

        var component = this.getByID(str);
        if (component == null) {
            throw 'fail to high light ' + str
        }



    }
    highLight(component) {
        this.inverseSelect(component);


    }

    /**
     *
     *
     * @param {Component} component
     * @memberof ChapterOne
     */
    inverseSelect(component, color) {

        this.addComponent(new TransparentComponent('Left', 0, 0, component.x, GAME.height), -1);
        this.addComponent(new TransparentComponent('Riht', component.x + component.width, 0, GAME.width - (component.x + component.width), GAME.height), -1);
        this.addComponent(new TransparentComponent('Top', component.x, 0, component.width, component.y), -1);
        this.addComponent(new TransparentComponent('Down', component.x, component.y + component.height, component.width, GAME.height - (component.y + component.height)), -1);


    }



    getClickedElement(x, y) {
        console.log('get click');
        var component = this.private_getClickElement(x, y);

        if (component != null) {
            console.log(component);
            if (this.except_component != null) {
                if (this.isClicked(x, y, this.except_component)) {

                    this.count++;
                    console.log(this.count);
                    this.except_component = null;
                    console.log(component);
                    return component;
                } else {
                    alert(this.ErrorText);
                    return null;
                }

            }
            return component;

        }
        return null;



    }
    private_getClickElement(x, y) {
        for (var i = this.layers.length - 1; i >= 0; i--) {
            var component = this.layers[i].getClickedElement(x, y);
            if (component != null) {
                return component;

            }
        }
        return null;
    }

    nextStep() {


        switch (this.count) {

            case 1:
                this.add();
                break;

            case 2:
                this.sll();
                break;

            case 3:
                this.problem();
                break;
            case 4:
                this.clearScreen();
        break;

        }
    }    



updateFrame() {
    this.nextStep();
    for (var i = 0; i < this.layers.length; i++) {
        this.layers[i].updateLayer();
    }

}

isClicked(x, y, component) {
    if (x >= component.x && x <= component.x + component.width) {
        if (y >= component.y && y <= component.y + component.height) {
            return true;
        }
    }
    return false;
}
}   
module.exports=ChapterOne;