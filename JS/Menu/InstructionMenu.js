
/**
 * This class create Instrucion Menu whcih should contain all Instructions that we will 
 * teach people. When people press these instructions long enough, it supposes to give
 * them the hint that what the instruction is and how to use them.
 *
 * @class InstructionMenu
 * @extends {GameScene}
 */
class InstructionMenu extends GameScene{
    
    /**
     *Creates an instance of InstructionMenu.
     * @memberof InstructionMenu
     */
    constructor() {
        super();
        
    }

    /**
     * This function initialized Instruction Menu. All components of instruction menu should
     * me delceared, and added to, here. 
     *
     * @memberof InstructionMenu
     */
    init(){
        super.init();
        console.log("Instruction Menu Initialized");
        var addInstruction = Button.getButton('Add_Ins',50,30,1,3,'Add');
        var AddHint= new HintEvent('IMHint');
        var addLongPress= new HintEvent('IMHint');
        addLongPress.setHintContent("Long press event");
        var returnButton= Button.getButton('Return_Main', 190, 250, 0, 3, 'Return');
        returnButton.addClickEvent(new ReturnEvent(true));
        this.addComponent(returnButton,-1);

        var subInstruction = Button.getButton('Sub_Ins',50,70,1,3,'Sub');
        var subHint = new HintEvent('IMHint');
        var subLongPress= new HintEvent('IMHint');
        subHint.setHintContent("sub $t1, $t2, $t3 such that t1=t2-t3");
        subLongPress.setHintContent("long press event");
        subInstruction.addClickEvent(subHint);
        subInstruction.addLongPressEvent(subLongPress);

        var subiInstruction = Button.getButton('Sub_Ins',50,110,1,3,'Subi');
        var subiHint = new HintEvent('IMHint');
        var subiLongPress= new HintEvent('IMHint');
        subiHint.setHintContent("sub $t1, $t2, constant such that t1=t2-c");
        subiLongPress.setHintContent("Long Press Event");
        subiInstruction.addClickEvent(subiHint);
        subiInstruction.addLongPressEvent(subiLongPress);

        var mulInstruction = Button.getButton('Sub_Ins',50,150,1,3,'Mul');
        var mulHint = new HintEvent('IMHint');
        var mulLongPress= new HintEvent('IMHint');
        mulHint.setHintContent("mul $t1, $t2, $t3 such that t1=t2*t3");
        mulLongPress.setHintContent("Long Press Event");
        mulInstruction.addClickEvent(mulHint);
        mulInstruction.addLongPressEvent(mulLongPress);

        var divInstruction = Button.getButton('Sub_Ins',50,190,1,3,'Div');
        var divHint = new HintEvent('IMHint');
        var divLongPress= new HintEvent('IMHint');
        divHint.setHintContent("div $t1, $t2, $t3 such that t1=t2/t3");
        divLongPress.setHintContent("Long press event");
        divInstruction.addClickEvent(divHint);
        divInstruction.addLongPressEvent(divLongPress);

        var addiInstruction = Button.getButton('Sub_Ins',150,30,1,3,'Addi');
        var addiHint = new HintEvent('IMHint');
        var addiLongPress= new HintEvent('IMHint');
        addiHint.setHintContent("addi $t1, $t2, constant such that t1=t2+c");
        addiLongPress.setHintContent("Long press event");
        addiInstruction.addClickEvent(addiHint);
        addiInstruction.addLongPressEvent(addiLongPress);


        AddHint.setHintContent('Adds two registers and stores the result in a register \nadd $d, $s, $t');
        addInstruction.addLongPressEvent(addLongPress);
        addInstruction.addClickEvent(AddHint);

        this.addComponent(addInstruction,-1);
        this.addComponent(subInstruction, -1);
        this.addComponent(subiInstruction, -1);
        this.addComponent(mulInstruction, -1);
        this.addComponent(divInstruction, -1);
        this.addComponent(addiInstruction, -1);
    }
}
