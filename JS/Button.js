class Button
{

    //to do revise  with width and height
    constructor (img,x,y){
        this.name="null";
        this.x = x;
        this.y = y;
        this.img=img;
        this.width=img.width;
        this.height=img.height;
        

        
       


 

    }
    //update button postion 
    update(CTX){
        CTX.drawImage(this.img, this.x,this.y);

    }
    //call back 
    excuteEvent( ButtonEvent){



    } 

    


}