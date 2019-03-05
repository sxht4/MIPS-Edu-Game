/**
 *all the Scene for this game will extend this class 
 *ex:Menu,SelcetChapterMenu
 * @class GameScene
 */
class GameScene {
    /**
     *Creates an instance of GameScene.
     * @memberof GameScene
     */
    constructor() {

        this.components = [];

    }
    /**
     *get Clicked Element or compoment in game sence.
     *
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @returns compoment that be clicked or null if not be found
     * @memberof GameScene
     */
    getClickedElement(x, y) {

        for (var i = 0; i < this.components.length; i++) {
           var component = this.components[i];
            if (x >= component.x && x <= component.x + component.width) {
                if (y >= component.y && y <= component.y + component.height) {
                    return component;
                }
            }
        }
        return null;
    }
    /**
     *get  Element or compoment by thier ID in game sence.
     *
     * @param {string} id
     * @returns compoment that be has the id or null if not be found
     * @memberof GameScene
     */
    getByID(id){
        for (var i = 0; i <  this.components.length; i++) {
            component = this.components[i];
            if (id ===component.ID) {
                    return component;
            }
        }
        return null;
    }
    /**
     *draw this Scene
     * @memberof GameScene
     */
    updateFrame(){
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].update();
        }
    }


    
}
