class TransparentComponent extends Component{
    constructor(id,x,y,width,height){
        
        super(id,null,x,y,width,height,false);
        this.content='rgba(50, 50, 50, 0.5)';

    }
    
    
    /**
     *update this Component for updateFrame function in GameScense
     * @memberof Component
     */
    update() {
        CTX.fillStyle = this.content;
        CTX.fillRect(this.x,this.y, this.width, this.height);
    }
} 