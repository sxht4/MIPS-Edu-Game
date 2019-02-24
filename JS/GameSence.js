class GameSence {
    constructor(game_canvas) {
        this.components = [];
        this.game_canvas=game_canvas;
    }
    getClickEelement(x, y) {

        for (var i = 0; i < this.components.length; i++) {
            component = this.components[i];
            if (x >= component.x && x <= component.x + component.width) {
                if (y >= component.y && y <= component.y + component.height) {
                    return component;
                }
            }
        }
        return null;
    }
    getByID(id){
        for (var i = 0; i <  this.components.length; i++) {
            component = this.components[i];
            if (id ===component.ID) {
                    return component;
            }
        }
        return null;
    }
    updateFrame(){
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].update();
        }
    }
    
}
