
/**
 * @author Sai Cao
 * @class Component
 * 
 */
class Component {

  
    constructor(id, content, x, y, width, height, clickable) {
        
        this.id = id;
        this.content = content;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clickable = clickable;

    }


    update() {
        
        CTX.clearRect(this.x, this.y,this.width,this.height);
        CTX.drawImage(this.content, this.x, this.y);

    }


}