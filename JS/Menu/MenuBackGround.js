
class MenuBackGround extends Component {
    constructor() {

        super("MenuBackGround", RESOURCES.MenuBackGround, 0, 0, 480, 320, false);
        this.AnimationSpeed = 45;
        this.time = 0;







    }
    update() {

        CTX.drawImage(this.content[0].content, 0, 0);

        if (this.time < 0) {

            CTX.drawImage(this.content[1].content, 0, 0);
        } else if (this.time > this.AnimationSpeed) {
            this.time = -this.AnimationSpeed;InstructionMenu

        } 
            this.time++;
         
        

        
       
    }


}
