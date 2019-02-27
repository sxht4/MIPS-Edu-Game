class Memory{
    constructor(){
        this.memory_store=[]; //memory_store is a array that stores value
        this.maxSize=100;
    }

     get(index) {
         if(index >= maxSize){
             return null;
         }
        return memory_store[index];
    }

    set(index, value){
        if(index >= maxSize){
            return null;
        }
        memory_store[index]=value;
    }

    size(){
        return memory_store.length;
    }
}