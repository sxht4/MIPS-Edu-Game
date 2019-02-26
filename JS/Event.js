class Event{

     /**
     * Creates an instance of Event.
     * @param {string} id Name Id of event
     * @param {function} function Name of function
     * @param {boolean} open If this event is opened
     * @memberof Event
     */

    constructor(id, func, open) {
        this.id = id;
        this.func = func;
        this.open = open;
    }

     /**
     * If the event is currently opened, then execute the event.
     * @memberof Event
     */

    execute(){
        if(open == true){
            this.func();
     	}
    }

}
