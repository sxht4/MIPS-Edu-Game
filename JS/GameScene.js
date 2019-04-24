/**
 * 
 * @version 2019/3/29
 * @author Sai Cao
 * @class GameScene
 */
class GameScene {
    /**
     *Creates an instance of GameScene.
     * @memberof GameScene
     */
    constructor(id) {
        this.id=id;
        this.layers = [];
        this.layers.push(new Layer());

    }
    /**
     * append a layer to this Scene
     *
     * @memberof GameScene
     */
    addLayer(){
        
        this.layers.push(new Layer());
    }
    removeLayer(i){
        if(i==-1){
            this.layers.pop();

        }else{
            this.layers.slice(i,i);
        }
    }
    /**
     * add Component to this Game Scene
     *
     * @param {Object} component
     * @param {number} index the layer index to be added, -1 to add top layer
     * @memberof GameScene
     */
    addComponent(component,index ){
        
        var size=this.layers.length;
        if(index==-1){
            this.layers[size-1].addComponent(component);
            return;
        }
        if( index>size-1&&index<-1){
            throw 'out of bound fail to add component @'+component.id+' at '+index;
        }else{
            this.layers[index].addComponent(component);
        }

    }
    /**
     *get Clicked Element or compoment in game scene.
     *
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @returns compoment that be clicked or null if not be found
     * @memberof GameScene
     */
    getClickedElement(x, y) {

        for (var i = this.layers.length-1; i >=0 ; i--) {
           var component = this.layers[i].getClickedElement(x,y);
            if (component!=null) {
                return component;
            }
        }
        return null;

    }
    /**
     *get  Element or compoment by thier ID in game scene.
     *
     * @param {string} id
     * @returns {Component} component that be has the id or null if not be found
     * @memberof GameScene
     */
    getByID(id){

        for (var i = 0; i <  this.components.length; i++) {
            var component = this.layers[i].getByID(id);
            if (component!=null) {
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

        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i].updateLayer();
        }

    }
    
    
}
