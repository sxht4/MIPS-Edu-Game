/**
 *
 *
 * @class Memory
 * @extends {Component}
 */
class Memory extends Component{
    /**
     *Creates an instance of memory.
     * @memberof Memory
     * this class is created to display and setup memory
     */
    constructor(id, content, x, y, width, height, clickable){
        super(id, content, x, y, width, height, clickable);
        this.content=[];
        this.maxSize=13;
        //this.store.length=100;
    }
    

    add(value){ //add value to memory
        if(this.content.length >= this.maxSize){
            console.log("you reach maxsize");
        }else{
            this.content.push(value);
        }
    }



    delete(index){
        if(index >= this.maxSize-1){
            console.log("The maxium size of memory is reached");
        }else{
            this.content[index]=undefined;
        }
    }

    get(index){ //get value at this index(address)
        if(index >= this.maxSize-1){
            console.log("The maxium size of memory is reached");
            return null;
        }else{
            return this.content[index];
        }
       
    }

    set(index, value){ //set this index(memory)
        if(index >= this.maxSize-1){
            console.log("The maxium size of memory is reached");
        }else{
            this.content[index]=value;
        }
    
    }


    update(){
        let xOfMemory=10;
        let yOfMemory=20;
        CTX.clearRect(this.x,this.y,this.width,this.height);
        CTX.fillStyle = "black";
        //CTX.font="12px Times New Roma";
        CTX.drawImage(RESOURCES.MenuBackGround[3].content, 17, 17, 40, 38, this.x, this.y, this.width, this.height);

        for(let i=0; i<this.content.length; i++){
            CTX.fillText(4*i+". ", xOfMemory, yOfMemory);
            CTX.fillText(this.content[i], xOfMemory+20, yOfMemory);
            // CTX.moveTo(xOfMemory, yOfMemory+5);
            // CTX.lineTo(xOfMemory+90, yOfMemory+5);
            // CTX.stroke();
            yOfMemory=yOfMemory+20;
        }
        
    }
}



