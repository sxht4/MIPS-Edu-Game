class ChangePageEvent extends GameEvent{
    constructor(number,codePanel){
        super();
        this.number=number;
        this.codePanel=codePanel;
        
    }
    excute(){
        this.codePanel.changePage(this.number);
    }
}