class EventController{
    constructor(){

       this.click_event=new Event();
       this.mouse_down_event=new Event();

    }

    clickEvent(){
        this.click_event.excute();
        console.log("excute event");

    }
    mouseDownEvent(){
        this.mouse_down_event.excute();
        console.log("excute event");
        
    }


    
}