class  Button extends Component
{

    //to do revise  with width and height
    constructor (id,content,x,y,width,height){

        super(id,content,x,y,width,height,true);

    }
    static getButton(obj){
        console.log("new obj");
       return new Button(obj.id,obj.content,obj.x,obj.y,obj.content.width,obj.content.height,true);

    }
    
    static getButton2(name,img,x,y){
        console.log("call this");
       return new Button(name,img,x,y,img.width,img.height,true);
    }
    //update button postion 
    update(){
        CTX.clearRect(this.x,this.y,this.content.width,this.content.height);
        CTX.drawImage(this.content, this.x,this.y);
    }
    //call back 

    


}
