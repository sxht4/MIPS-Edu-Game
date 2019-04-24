/**
 * Chapter 1
 * @class MainScene
 * @extends {GameScene}
 * @author Sai Cao,Tianyu Cao, Xiang Li
 */
class MainScene extends GameScene {
    constructor() {
        super();
        this.except_component = null;
        this.ErrorText = null;
        this.modcount = 0;
        this.count = 0;




    }
    init() {
        this.layers = [];
        this.layers.push(new Layer());
        this.initScene();
        this.problem();




    }
    initScene() {
        console.log("init GaneUI Menu");
        this.cp = new CodePanel();
        this.addComponent(this.cp, -1);

        this.GoalButton = Button.getButton('C1Goal', 375, 0, 1, 3, 'Goal');
        var C1GoalEvent=new HintEvent('C1Goal');
        C1GoalEvent.setHintContent("Compute function t0 = 31*(t1^2) + 4*t2 + 7");
        this.GoalButton.addClickEvent(C1GoalEvent);
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
        this.m = new Memory("Memory", [], 5, 5, 50, 200, false);
        this.m.add(0);
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
    problem() {
        this.cp.instructions = [''];
        

        this.addLayer();
        //this.highLight(this.cp);
        var pro = new Dialogue('problem 1');
        pro.width = 250;
        pro.appendLine('Chapter One: Basic Arithmetic');
        pro.appendLine('In this chapter, you are required to');
        pro.appendLine('computer the following function:');
        pro.appendLine('t0 = 31*(t1^2) + 4*t2 + 7');
        pro.appendLine('click green area to continue');
        this.except_component = pro;
        //this.ErrorText = 'you should click second line';
        this.addComponent(pro, -1);


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
     * @memberof Tutorial
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
                this.backToScene();

                break;
            case 2:
        
        break;

        }
    }    

backToScene() {
    this.removeLayer(-1);
    this.addLayer();
    this.r.getCellAt(1).setContent(4);
    this.r.getCellAt(2).setContent(13);
    this.interpreter.test=new Chapter1Test(this.cp,this.r,this.m);


    this.count++;


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