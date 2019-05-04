/**
 * a part of game scene for mulitlayered feature
 * @version 3/29/2019
 * @author Sai Cao
 * @class Layer
 */
class Layer {
    /**
     *Creates an instance of Layer in GameScene.
     * @memberof Layer
     */
    constructor() {
        this.components = [];

    }
    /**
     *
     *add a component into this layer.
     * @param {Component} component
     * @memberof Layer
     */
    addComponent(component){
        
        this.components.push(component);
    }
    /**
     *get Clicked Element or compoment in this Layer.
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
     *get  Element or compoment by thier ID in this Layer.
     *
     * @param {string} id
     * @returns compoment that be has the id or null if not be found
     * @memberof GameScene
     */
    getByID(id){
        for (var i = 0; i <  this.components.length; i++) {
            var component = this.components[i];
            if (id ===component.ID) {
                    return component;
            }
        }
        return null;
    }
    /**
     *draw this Layer
     * @memberof GameScene
     */
    updateLayer(){
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].update();
        }
    }


    
}
module.exports=Layer;
