
/**
 *
 *
 * @class EventController
 */
class EventController{
    /**
     *Creates an instance of EventController.
     * @param {*} clickEvent
     * @param {*} mouse_down_event
     * @memberof EventController
     */
    constructor(clickEvent,mouse_down_event){

       this.click_event=clickEvent;
       this.mouse_down_event=mouse_down_event; //click_event and mouse_down event are both event

    }

    clickEvent(){
        this.click_event.excute();
      
    }
    mouseDownEvent(){
        this.mouse_down_event.excute();
      
        
    }


    
}