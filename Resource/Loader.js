
/**
 * this is a resource loader for game
 *
 * @class Loader
 */
class Loader {
    constructor(callback) {
        this.end = 0;
        this.count = 0;
        this.callback = callback;
    }
    /**
     *
     * call it load all resources in Resources.js
     * @memberof Loader
     */
    loadResources() {
        this.end = RESOURCES.CPU_sprites.length+RESOURCES.buttons.length;
        this.loadPiece(RESOURCES.buttons);
        this.loadPiece(RESOURCES.CPU_sprites);
        this.loadPiece(RESOURCES.MenuBackGround);
    }
    /**
     *
     * a array contain resoures that need to be loaded
     * @param {Array} part
     * @memberof Loader
     */
    loadPiece(part) {
        let array=part;
        let self = this;
        console.log('load piece');
        
        for (let i = 0; i < array.length; i++) {
           
            let array=part;
            
            var img = new Image();
            
            img.onload = function () {
                
                CTX.font = '12px Time New Roma';
                CTX.fillText(("loading image " + array[i].id),180,(self.count+1)*14);
                
                self.count++;
                if (self.count == self.end) {
                    CTX.clearRect(0, 0, 480, 320);
                    self.callback();
                }
                

            }
            img.src = array[i].src;
            array[i].content = img;
            
        }
    }


}