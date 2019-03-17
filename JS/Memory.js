class Memory{
    constructor(memory_store){
        this.memory_store=memory_store; //memory_store is a array that stores value
    }

     get(index) {
        return memory_store[index];
    }

    set(index, value){
        memory_store[index]=value;
    }
}