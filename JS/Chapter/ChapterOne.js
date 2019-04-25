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
        
        this.except_component = null;
        this.ErrorText = null;
        this.modcount = 0;
        this.count = 0;




    }
    /**
     * init the this chapter
     *
     * @memberof ChapterOne
     */
    init() {
        
        this.layers = [];
        this.layers.push(new Layer());
        super.init();
        this.introduction();




    }
    /**
     *
     * init the Scene that will be techded.
     * @memberof ChapterOne
     */
    initScene() {
        console.log("init GaneUI Menu");
        this.cp = new CodePanel();
        this.addComponent(this.cp, -1);
        //Goal Button
        this.GoalButton = Button.getButton('C1Goal', 375, 0, 1, 3, 'Goal');
        this.addComponent(this.GoalButton,-1);
        //Instruction Menu Button 
        this.InstructionMenuButton = Button.getButton('Instruction_Menu', 375, 30, 1, 3, 'IM');
        this.InstructionMenuButton.addClickEvent(new NewSceneEvent(new InstructionMenu()));
        var IMHint = new HintEvent('IMHint')
        IMHint.setHintContent('this is instruction menu \n it contain all insturtions game support');
        this.InstructionMenuButton.addLongPressEvent(IMHint);
        this.addComponent(this.InstructionMenuButton, -1);
        //run button
        this.RunButon = Button.getButton('Code_Run', 375, 60, 1, 3, 'Run');
        this.addComponent(this.RunButon, -1);
        this.m = new Memory("Memory", [], 10, 5, 50, 280, false);
        for(var i=0; i<13; i++){
            this.m.add(i);
        }
        this.addComponent(this.m, -1);
        this.r = new Register("Register", [], 100, 270, 250, 50, true);
        this.r.init();
        this.addComponent(this.r, -1);
        this.addLayer();
        this.cpu = new CPU();
        this.addComponent(this.cpu, -1);
        this.cpu.setSpeed(2);
        this.interpreter=new Interpreter(this.cpu, this.cp, this.m, this.r);
        this.RunButon.addClickEvent(new RunCodeEvent( this.interpreter));
    } 

    introduction(){
        this.addLayer();
        var intro = new Dialogue();
        this.cp.instructions = [''];
        intro.appendLine('In this chapter, you will be learing');
        intro.appendLine('instructions related to basic arithmetic');
        intro.appendLine('such as add, sll. Now, Click on the green');
        intro.appendLine('area to study \"add\" instruction');
        intro.width = 270;
        intro.height =100;
        intro.x = 70;
        intro.y =70;
        this.except_component = intro;
        this.ErrorText = 'Please read the instruction in green area carefully.';
        this.addComponent(intro, -1);
    }

    add(){
        this.removeLayer(-1);
        this.addLayer();
        var add = new Dialogue();
        this.cp.instructions = [''];
        this.r.getCellAt(0).setContent(4);
        this.r.getCellAt(1).setContent(5);
        add.appendLine('\"Add\" instronction performs addition');
        add.appendLine('operation, and stores the result in a');
        add.appendLine('specific register. For example:');
        add.appendLine('If you want to compute t0 = t1 + t2,');
        add.appendLine('you should type:\"add t2 t1 t0\"');
        add.appendLine('On the code panel, which would do the');
        add.appendLine('trick. Now, try to compute t2 = t0 + t1');
        add.width = 270;
        add.height =140;
        add.x = 70;
        add.y = 40;
        this.except_component=this.getByID('Code_Run');
        this.addComponent(add, -1);
        console.log("1");
        this.interpreter.test=new ChapterOneTest(this.cp,this.r,this.m, 1, this);
        //console.log("interpreter test:" + this.interpreter.test.check());
        this.C1GoalEvent= new HintEvent('C1Goal');
        this.C1GoalEvent.setHintContent("Compute function t2 = t0 + t1 by using \"add t2 t0 t1\". ");
        this.GoalButton.addClickEvent(this.C1GoalEvent);
        this.count=5;
    }

    sll(){
        //if(this.r.getCellAt(2).content==9){
            this.removeLayer(-1);
            this.addLayer();
            var add = new Dialogue();
            this.cp.instructions = [''];
            this.r.getCellAt(1).setContent(5);
            add.appendLine('Now, let\'s take a look at \"sll\"');
            add.appendLine('\"sll\" performs shift left logical');
            add.appendLine('operation, where shift left one means');
            add.appendLine('move each bit to the left by one, ');
            add.appendLine('a simple version: mulitiply number by 2');
            add.appendLine('for each shift. If you want to compute');
            add.appendLine('If you want to compute t0 = t0 * 2,');
            add.appendLine(' you should type: \"sll t0 t0 1\"');
            add.appendLine('On the code panel, which shift t0 left');
            add.appendLine('by one. Now, try to compute t1 = t1 * 4');
            add.width = 270;
            add.height =190;
            add.x = 70;
            add.y = 10;
            this.addComponent(add, -1);
            this.interpreter.test=new ChapterOneTest(this.cp,this.r,this.m, 2, this);
            this.C1GoalEvent= new HintEvent('C1Goal');
            this.GoalButton.addClickEvent(this.C1GoalEvent);
            this.C1GoalEvent.setHintContent("Compute function t1 = t1 * 4 by using \"sll\" instruction. ");
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
            this.removeLayer(-1);
            this.addLayer();
            this.count=3;
            //this.highLight(this.cp);
            var pro = new Dialogue('problem 1');
            pro.x = 70;
            pro.y=40;
            pro.width = 270;
            pro.height = 150;
            pro.appendLine('Now, you are going to encounter');
            pro.appendLine('your first match:');
            pro.appendLine('compute the following function:');
            pro.appendLine('t0 = 31*(t1^2) + 4*t2 + 7');
            pro.appendLine('click green area to accept this challenge!');
            this.except_component = pro;
            //this.ErrorText = 'Please read the instruction in green area carefully.';
            this.C1GoalEvent= new HintEvent('C1Goal');
            this.C1GoalEvent.setHintContent("Compute function t0 = 31*(t1^2) + 4*t2 + 7.");
            this.GoalButton.addClickEvent(this.C1GoalEvent);
            this.addComponent(pro, -1);
            
        //}else{
    //         this.count = 100;
    //         this.removeLayer(-1);
    //         this.sll();

    //         return;
    //     }
        
    }

    clearScreen(){
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
