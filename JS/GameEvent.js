class GameEvent {

  /**
  * Creates an instance of Event.
  * @param {string} id Name Id of event
  * @param {number} clickCount clickCount indicates how many times has this button has be clicked.  
  * @memberof GameEvent
  */

  constructor(id, clickCount) {
    this.id = id;
    this.clickCount = clickCount;
  }

  /**
  * All objects that extend event should overwrite this function.
  * @memberof GameEvent
  */

  excute(x, y) {
    console.log("WARNING: YOU FUCKED UP. WROTE YOUR OWN EXECUTION");
    throw "WARNING: YOU FUCKED UP. WROTE YOUR OWN EXECUTION"
  }

}
