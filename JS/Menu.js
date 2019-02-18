class Menu {




    constructor(CTX) {
        this.CTX = CTX;
        this.clickmap = new ClickMap();

    }

    //load Menu resources

    loadMenu(callBack) {


        let menu_clickmap = this.clickmap;
        console.log("loading menu");
        let count = 0;
        for (let i = 0; i < buttons.length; i++) {
            var img = new Image();


            img.onload = function () {

                console.log("load image " + buttons[i].name);

                menu_clickmap.components.push(new Button(this, buttons[i].x, buttons[i].y));
                if (count == buttons.length - 1) {
                    callBack();
                }
                
                count++;
            }

            img.src = buttons[i].src;


        }



    }
    drawComponents() {

        let clickmap = this.clickmap;
        this.loadMenu(function () {
            console.log("run call bcak");

            for (let i = 0; i < clickmap.components.length; i++) {
                clickmap.components[i].update(CTX);

            }
            console.log("finish drawing of buttons");


        });


    }

}