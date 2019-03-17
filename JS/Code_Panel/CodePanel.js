/**
 *
 * This code panel in game that users can write their code or drag preset code from code menu.
 * @class CodePanel
 * @extends {Component}
 * @author Sai Cao
 */
class CodePanel extends Component {
    /**
     *Creates an instance of CodePanel. 
     *This code panel in the game that users can write their code or drag preset code from code menu.
     * @memberof CodePanel
     */
    constructor() {
        super('code_panel', [],365, 90, 100, 16*14, true); 
        this.vertical_space=1;
        this.left_space=2;
        this.cell_hegiht=12;
        this.cell_width=100;
        this.instructions=[];
        this.line_index=0;

        this.init();

    }
    /**
     *init the code panel.
     *
     * @memberof CodePanel
     */
 
    init() {

        this.addTextCell();
        for(var i=0;i<14;i++){

            this.addTextCell();
        }
        this.instructions.push('your instrctuions');
        this.instructions.push('no more 500 lines');
        for(var i=2;i<500;i++){
            this.instructions[i]='';
        }
        

    }
 
    /**
     *append a Textcell into this panel
     * @memberof CodePanel
     */
    addTextCell(){
        
        var y=this.y+((this.vertical_space+this.cell_hegiht)*this.content.length);
        this.content.push(new TextCell('TextCell','',this.x+this.left_space,y,this.cell_width,this.cell_hegiht,false));
        console.log('add Text Cell content length '+this.content.length);
     
    }
   
    /**
     * return all instrctions in this panel
     *
     * @returns { string[] } instructions
     * @memberof CodePanel
     */
    getInstructions() {

        return this.instructions;

    
    }
    /**
     * click event for code panel
     * @param {number} x 
     * @param {number} y 
     */
    excuteClick(x,y){
        console.log('click code panel');
        //Relative coordinates
        var realtive_y= y-this.y;
        var i=Math.floor(realtive_y/(this.cell_hegiht+this.vertical_space));
        var str=this.instructions[i+this.line_index];
         //create form
        this.addInput(str,i);
       
    }
    /**
     * create a form for editing code
     * @param {number} x 
     * @param {number} y 
     * @param {string} str 
     * @param {number} i 
     */
    addInput(str,i) {
        var input_x=GAME_CANVAS.offsetLeft;
        var input_y=GAME_CANVAS.offsetTop;
        var input = document.createElement('input');
        input.type = 'text';
        input.style.position = 'fixed';
        input.style.left = (input_x+this.x - 40) + 'px';
        input.style.top = (input_y+this.y+this.height - 20) + 'px';
        input.value=str;
        let self=this;
        let index=this.line_index+i;
        input.onkeydown=function(e){
           
                var keyCode = e.keyCode;
                if (keyCode === 13) {

                    self.instructions[index]=this.value;
                    document.body.removeChild(this);
                    
                }
            
        }
        document.body.appendChild(input);
        input.focus();
    }

    /**
     * draw this component;
     */
    update() {
        
        CTX.clearRect(this.x, this.y,this.width,this.height);
        for(var i=0;i<this.content.length;i++){
           this.content[i].setContent(this.instructions[this.line_index+i]);
           this.content[i].update();
        }
    }

    
}

