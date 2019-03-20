class Memory extends Component{
    /**
     *Creates an instance of memory.
     * @memberof memory
     * this class is created to display and setup memory
     */
    constructor(id, content, x, y, width, height, clickable){
        super(id, content, x, y, width, height, true);
        this.store=[];
        this.maxSize=100;
        //this.store.length=100;
    }

    add(value){ //add value to memory
        this.store.push(value);
    }

    delete(index){
        if(index >= this.maxSize-1){
            console.log("The maxium size of memory is reached");
        }else{
            this.store[index]=undefined;
        }
    }

    get(index){ //get value at this index(address)
        if(index >= this.maxSize-1){
            console.log("The maxium size of memory is reached");
            return null;
        }else{
            return this.store[index];
        }
       
    }

    set(index, value){ //set this index(memory)
        if(index >= this.maxSize-1){
            console.log("The maxium size of memory is reached");
        }else{
            this.store[index]=value;
        }
    
    }

    update(){
        CTX.clearRect(this.x,this.y,this.width,this.height);
        CTX.font="12px Times New Roma";
        //CTX.fillText(this.store[0], 50, 50);
        for(var i=0; i<this.store.length; i++){
            var a=i*50+50;
            CTX.fillText(this.store[i], a, a);
        }
        
    }
}






