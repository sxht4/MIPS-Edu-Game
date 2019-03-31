const CPU_CONST = { STATIC: 0, UP: 4, DOWN: 1, LEFT: 3, RIGHT: 2, START_MOVE: 5, CARRAY:-1  };

class CPU extends Component {
    constructor() {
        super('CPU', null, 220, 0, 32, 32, true);
        this.speedX = 4;
        this.speedY = 4;
        this.destination = { x: this.x, y: this.y };
        this.state = CPU_CONST.STATIC;
        this.callback = undefined;
        this.interval = null;
        this.updateIndex = 0;
    }

    moveTo(x, y, callback) {

        this.destination.x = x;
        this.destination.y = y;
        this.state = CPU_CONST.START_MOVE;
        this.doNext(CPU_CONST.STATIC, callback);

    }
    move() {
        var distanceX = this.destination.x - this.x;

        if (Math.abs(distanceX) < this.speedX) {
            this.x = this.destination.x;

        } else {
            if (distanceX > 0) {
                this.moveRight();
                return
            }
            if (distanceX < 0) {
                this.moveLeft();
                return;
            }
        }
        var distanceY = this.destination.y - this.y;
        if (Math.abs(distanceY) < this.speedY) {
            this.y = this.destination.y;
            this.state = CPU_CONST.STATIC;
            return;


        } else {

            if (distanceY > 0) {
                this.moveDown();

                return;
            }
            if (distanceY < 0) {
                this.moveUp();

                return;
            }
        }




    }


    moveUp() {
        this.state = CPU_CONST.UP;
        this.y = this.y - this.speedY;
    }
    moveRight() {
        this.state = CPU_CONST.RIGHT;
        this.x = this.x + this.speedX;
    }
    moveLeft() {
        this.state = CPU_CONST.LEFT;
        this.x = this.x - this.speedX;
    }
    moveDown() {
        this.state = CPU_CONST.DOWN;
        this.y = this.y + this.speedY;

    }


    doNext(state, callback) {
        let CPU = this;
        this.interval = setInterval(function () {
            if (CPU.state == state) {
                console.log('run call back');
                callback();
                clearInterval(CPU.interval);
            }

        }, 10);

    }



    update() {
        this.move();
        this.drawSprite();

    }

    drawSprite() {
        if (this.updateIndex >= 2) {
            this.updateIndex = 0;
        }
        CTX.drawImage(RESOURCES.CPU_sprites[0].content,
            this.updateIndex * this.width, this.height * this.state,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height);
        this.updateIndex++;


    }




}