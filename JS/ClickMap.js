 

class ClickMap{
    constructor  (){
        this.components=[];

    }


     getClickEelement(x, y) {
   
   
   
       for (var i = 0; i < this.components.length; i++) {
           component = this.components[i];
           if (x >= component.x && x <= component.x + component.width) {
   
               if (y >= component.y && y <= component.y + component.height) {
   
                   return component;
   
               }
           }
           else {
   
               return null;
   
           }
   
   
   
       }
   
   
   
   
   
   }


}
 