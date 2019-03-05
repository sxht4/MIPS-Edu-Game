/**
 * all events in game will extends this class
 *
 * @class Event
 */
class Event{

     /**
     * Creates an instance of Event.
     * @param {string} id Name Id of event
     * @param {number} clickCount clickCount indicates how many times has this button has be clicked.  
     * @memberof Event
     */

    constructor(id, clickCount) {
        this.id = id;
  	    this.clickCount = clickCount;
    }

     /**
     * All objects that extend event should overwrite this function.
     * @memberof Event
     */

    excute()
    {
      throw "null event";
    }

}
