/**
 * A tutorial chapter to tech the game
 * @class Tutorial
 * @extends {GameScene}
 */
class TutorialChapter extends MainScene {
    /**
     *Creates an instance of Tutorial.
     * @memberof Tutorial
     */
    constructor() {
        super();
        
        




    }
    /**
     * init the this chapter
     *
     * @memberof TutorialChapter
     */
    init() {
        this.except_component = null;
        this.ErrorText = null;
        this.modcount = 0;
        this.count = 0;
        this.layers = [];
        this.layers.push(new Layer());
        super.init();
        this.codePanelHint();




    }
    /**
     *
     * init the Scene that will be techded.
     * @memberof TutorialChapter
     */
    initScene() {
        console.log("init GaneUI Menu");
        this.cp = new CodePanel();
        this.addComponent(this.cp, -1);

        //Instruction Menu Button 
        this.InstructionMenuButton = Button.getButton('Instruction_Menu', 375, 30, 1, 3, 'IM');
        this.InstructionMenuButton.addClickEvent(new NewSceneEvent(new InstructionMenu()));
        var IMHint = new HintEvent('IMHint')
        IMHint.setHintContent('This is an instruction menu \n It contain all insturtions that support the game to run');
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
    /**
     * tech how to use code panel
     *
     * @memberof TutorialChapter
     */
    codePanelHint() {
        this.cp.instructions = ['Hello ', 'bug'];
        this.except_component = this.cp.getContent(1);
        this.ErrorText = 'You should click the second line in the code area.';

        this.addLayer();
        this.highLight(this.cp);
        var cp_hint = new Dialogue('cp hint');
        cp_hint.appendLine('This is a code panel.');
        cp_hint.appendLine('You write your code here.');
        cp_hint.appendLine('Now, it\'s time to click the');
        cp_hint.appendLine('second line in the code area.');
        this.addComponent(cp_hint, -1);


    }
    /**
     *High Light the component in game
     *
     * @param {Component} component
     * @memberof TutorialChapter
     */
    highLight(component) {
        this.inverseSelect(component);


    }

    /**
     *
     *  create a 4 black transparent Rectangles to all components except the agruement component.
     * @param {Component} component
     * @memberof Tutorial
     */
    inverseSelect(component) {

        this.addComponent(new TransparentComponent('Left', 0, 0, component.x, GAME.height), -1);
        this.addComponent(new TransparentComponent('Riht', component.x + component.width, 0, GAME.width - (component.x + component.width), GAME.height), -1);
        this.addComponent(new TransparentComponent('Top', component.x, 0, component.width, component.y), -1);
        this.addComponent(new TransparentComponent('Down', component.x, component.y + component.height, component.width, GAME.height - (component.y + component.height)), -1);

    }


    /**
     * get click element in this scene
     * this function contain the event listener this tutorial chapter
     * @param {number} x
     * @param {number} y
     * @returns {Component} 
     * @memberof TutorialChapter
     */
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
    /**
     *Help function for getClickElement().
     *
     * @param {number} x
     * @param {number} y
     * @returns
     * @memberof TutorialChapter
     */
    private_getClickElement(x, y) {
        for (var i = this.layers.length - 1; i >= 0; i--) {
            var component = this.layers[i].getClickedElement(x, y);
            if (component != null) {
                return component;

            }
        }
        return null;
    }
    /**
     * a listener to listen which step that users are learning.
     *
     * @memberof TutorialChapter
     */
    nextStep() {


        switch (this.count) {

            case 1:
                this.typeCode();

                break;
            case 2:
                this.memoryHint();
                break;
            case 3:
                this.registerHint();
                break;
            case 4:
                this.runFirstCode();
            case 5:
            
        
        break;

    }


}
/**
 * a tutorial to type code
 *
 * @memberof TutorialChapter
 */
typeCode() {

    console.log('type code STARTED');

    this.removeLayer(-1);
    this.addLayer();
    this.highLight(new Component('full', null, 0, 0, 0, 0, false));
    var cp_hint = new Dialogue();
    this.addComponent(cp_hint, -1);
    cp_hint.appendLine("Now let\'s change the input ");
    cp_hint.appendLine('from \"bug\" to \"world\" and ');
    cp_hint.appendLine('press [ENTER]/[RETURN]');

    this.count++;


}
/**
 * a tutorial to memory
 *
 * @returns
 * @memberof TutorialChapter
 */
memoryHint() {

    if (this.cp.modcount != this.cp.count) {
        console.log(this.cp.getInstructions()[1]);
        if (this.cp.getInstructions()[1] == "world") {
            console.log(this.cp.getContent(1).getContent());
            this.removeLayer(-1);
            this.addLayer();
            this.highLight(this.m);
            var cp_hint = new Dialogue();
            cp_hint.appendLine("On the left, it is our memory cell.");
            cp_hint.appendLine("On the left hand side of the cell,");
            cp_hint.appendLine("it is our memory address");
            cp_hint.appendLine("On the right hand side of the cell,");
            cp_hint.appendLine("it is our value at that memory address");
            cp_hint.appendLine("Click the memory cell on the  ");
            cp_hint.appendLine("left to continue the next step.");
            this.addComponent(cp_hint,-1);
            this.except_component = this.m;
            cp_hint.x = 220;
            cp_hint.y = 100;
            cp_hint.width=300;
            this.cp.modcount = this.cp.count;
            return;
        }
        else {
            alert('Sorry, incorrect. Please try again');

            this.count = 0;
            this.cp.modcount = this.cp.count;
            this.removeLayer(-1);
            this.codePanelHint();

            return;
        }


    }



}
/**
 * a toturial to register
 *
 * @memberof TutorialChapter
 */
registerHint() {
    this.removeLayer(-1);
    this.addLayer();
    this.highLight(this.r);
    var cp_hint = new Dialogue();
    this.ErrorText = 'You should click the first register icon';
    cp_hint.appendLine("This is the register cell area.");
    cp_hint.appendLine("Click 't0' cell to the next step.");
    this.except_component = this.r.content[0];
    cp_hint.x = 250;
    cp_hint.y = 100;
    cp_hint.height = 100;
    this.addComponent(cp_hint, -1);
}
/**
 *
 * tutorial to run first code
 * @memberof TutorialChapter
 */
runFirstCode() {
    this.removeLayer(-1);
    this.addLayer();
    var cp_hint = new Dialogue();
    this.cp.instructions = [''];
    this.r.getCellAt(0).setContent(4);
    this.r.getCellAt(1).setContent(5);
    cp_hint.appendLine('Now,it\'s time to run your first');
    cp_hint.appendLine('MIPS instruction. Type \"add $t0 $t1 $t2\",');
    cp_hint.appendLine('and click the [RUN] button');
    cp_hint.appendLine('You can click the [IM] button to');
    cp_hint.appendLine('see what instrutions are supported');
    this.cpu.setLocation(250,200);
    cp_hint.width = 270;
    cp_hint.height =120;
    cp_hint.x = 70;
    cp_hint.y =0;
    this.addComponent(cp_hint, -1);
    this.interpreter.test=new TutorialTest(this.cp,this.r,this.m);


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
module.exports=TutorialChapter;