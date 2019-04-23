
/**
 *
 *
 * @class Register
 * @extends {Component}
 * @param content: is registerCell
 */
class Register extends Component {
    constructor(id, content, x, y, width, height, clickable) {
        super(id, content, x, y, width, height, clickable);

    }


    /**
     *initialize Resgiter
     *add Register cells
     * @memberof Register
     */
    init() {
        console.log("addAllRegisterCell");
        let xOfRegister = 100;
        let yOfRegister = 220;
        for (var i = 0; i < 4; i++) {
            this.content.push(new RegisterCell(i, 0, xOfRegister, yOfRegister, 50, 50, true));
            console.log("addAllRegisterCell number" + i);
            xOfRegister = xOfRegister + 50;
        }
        yOfRegister=yOfRegister+50;
        xOfRegister=100;
        for (var i = 4; i < 8; i++) {
            this.content.push(new RegisterCell(i, 0, xOfRegister, yOfRegister, 50, 50, true));
            console.log("addAllRegisterCell number" + i);
            xOfRegister = xOfRegister + 50;
        }
    }

    /**
     * @returns  all of the cells
     * @memberof Register
     */
    getContent() {
        return this.content;
    }
    /**
     *
     *
     * @param {int} i
     * @memberof Register
     */
    getCellAt(i) {
        return this.content[i];

    }




    excuteClick(x, y) {

        for (var i = 0; i < this.content.length; i++) {
            var component = this.content[i];
            if (x >= component.x && x <= component.x + component.width) {
                if (y >= component.y && y <= component.y + component.height) {
                    component.excuteClick();
                    return;
                }
            }
        }


    }



    update() {

        for (var i = 0; i < this.content.length; i++) {
            CTX.drawImage(RESOURCES.MenuBackGround[3].content, 17, 17, 40, 40, this.content[i].x, this.content[i].y, this.content[i].width, this.content[i].height);
            this.content[i].update();
        }
    }
}