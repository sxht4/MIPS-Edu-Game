/**
 *
 *
 * @class SelectChapterMenu
 * @extends {GameScene}
 * 
 * @Objective This class will create a menu to select chapter
 */
class SelectChapterMenu extends GameScene{
    /**
     *Creates an instance of SelectChapterMenu.
     * @memberof SelectChapterMenu
     */
    constructor() {
        super();
        this.FPS=30;
        this.components=[];
        this.initMenu();
    }
/**
 *
 *@Objective initMenu is method that create buttons and button.eventController
 * @memberof SelectChapterMenu
 */
initMenu(){
        
        var chapter1Button= Button.getButton(RESOURCES.select_chapter_button[0]);
        chapter1Button.event_controller=new EventController(new NewSenceEvents(new GameUI()), new Event());
        this.components.push(chapter1Button);
    }

    
}






