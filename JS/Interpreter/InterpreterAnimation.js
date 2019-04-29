class InterpreterAnimation extends Component{
    constructor(){
        super('load animation',null,0,0,0,0,false);
        this.aniamtionTime=15/GAME.speed;
        this.currentTime=100;


    }
    setAninmation(x1,y1,x2,y2){
        this.currentTime=0;
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        
      
    }
    update(){
        console.log('aniamtion');
        if(this.currentTime>this.aniamtionTime){
            return;
        }else{
            
            this.currentTime++;
            console.log(this.x1,this.y1);
            CTX.strokeStyle = 'white';
            CTX.lineWidth = 3;
            CTX.beginPath();
            CTX.moveTo(this.x1, this.y1);
            CTX.lineTo(this.x1,this.y2);
            CTX.lineTo(this.x2, this.y2);
            CTX.stroke();
            
        }
        

    }

}