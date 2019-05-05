Button=require('../Button');
GameScene=require('../GameScene');
MainScene=require('../MainScene');
NewSenceEvents=require('../Event/NewSceneEvent');
LongPressEvent=require('../Event/LongPressEvent');
RESOURCES=require('../../Resource/Resources');
TutorialChapter=require('../Chapter/TutorialChapter');
ChapterOne=require('../Chapter/ChapterOne');
ReturnEvent=require('../Event/ReturnEvent');
/**
 *
 * This menu
 * @class SelectChapterMenu
 * @extends {GameScene}
 */
class SelectChapterMenu extends GameScene{
    /**
     *Creates an instance of SelectChapterMenu.
     * @memberof SelectChapterMenu
     */
    constructor() {
        super();
        this.components=[];
       
    }
/**
 *
 *  initialize this Sence
 * @memberof SelectChapterMenu
 */
init(){
        super.init();
        //CTX.clearRect(0, 0, 480, 320);
        console.log("create select game menu");
        var tutorialButton= Button.getButton('Tutorial_Button',185,160,0,0,'Tutorial');
        tutorialButton.addClickEvent(new NewSceneEvent(new TutorialChapter()));
        var chapter1Button= Button.getButton('Chapter_1_Button',185,210,0,0,'Chapter 1');
        chapter1Button.addClickEvent(new NewSceneEvent(new ChapterOne()));
        
        var background =new Component('Chapter_Menu_Background',RESOURCES.MenuBackGround[2].content,0,0,480,320,false);
        this.addComponent(background,-1);
        this.addLayer();
        var returnButton= Button.getButton('Return_Main', 192, 250, 0, 3, 'Return');
        returnButton.addClickEvent(new ReturnEvent(true));
        this.addComponent(returnButton,-1);
        this.addComponent(chapter1Button,-1);
        this.addComponent(tutorialButton,-1);
        console.log("finish loadding selectChapterButtons");
        //this.components.push(new MenuAnimation());
    }

    
}
module.exports=SelectChapterMenu;






