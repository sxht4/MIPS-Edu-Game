
var Component=require('../Component');

const CPU_CONST = { STATIC: 0, UP: 4, DOWN: 1, LEFT: 3, RIGHT: 2, START_MOVE: 5, CARRAY: -1 };
/**
 *
 * a charater play a role of CPU
 * @class CPU
 * @extends {Component}
 * @author Sai Cao
 */
class CPU extends Component {
    /**
     *Creates an instance of CPU.
     * @memberof CPU
     */
    constructor() {
        super('CPU', null, 220, 0, 32, 32, true);
        this.speedX = 4;
        this.speedY = 4;
        this.destination = { x: this.x, y: this.y };
        this.state = CPU_CONST.STATIC;
        this.callback = undefined;
        this.interval = null;
        this.updateIndex = 0;
        this.animation_speed = 6;
        this.frame_count = 0;
        this.sleeptime = 0;

    }


    /**
     *
     * this character move to the x and y
     * @param {number} x
     * @param {number} y
     * @memberof CPU
     */
    async moveTo(x, y) {

        this.destination.x = x;
        this.destination.y = y;
        this.state = CPU_CONST.START_MOVE;
        while (this.state != CPU_CONST.STATIC) {
            await sleep(100 * this.animation_speed);

        }


            await  this.sleep(10);


    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    /**
     *
     * call before each frame to update x,y
     * @returns
     * @memberof CPU
     */
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

    /**
     *
     * make this component move up with distance speed
     * @memberof CPU
     */
    moveUp() {
        this.state = CPU_CONST.UP;
        this.y = this.y - this.speedY;
    }
    /**
    *
    * make this component move Right with distance speed
    * @memberof CPU
    */
    moveRight() {
        this.state = CPU_CONST.RIGHT;
        this.x = this.x + this.speedX;
    }
    /**
    *
    * make this component move Left with distance speed
    * @memberof CPU
    */
    moveLeft() {
        this.state = CPU_CONST.LEFT;
        this.x = this.x - this.speedX;
    }
    /**
     *
     * make this component move Down with distance speed
     * @memberof CPU
     */
    moveDown() {
        this.state = CPU_CONST.DOWN;
        this.y = this.y + this.speedY;

    }

    /**
     *
     * to change this character moving speed.
     * @param {number} speed
     * @memberof CPU
     */
    setSpeed(speed) {
        if (0 < speed && speed < 4) {
            this.speedX = 4 * speed;
            this.speedY = 4 * speed;
            this.animation_speed = 6 / speed;
        } else {
            throw new RangeError('speed should in range 1 to 3');
        }


    }



    update() {
        this.move();
        this.drawSprite();

    }
    /**
     *cho0se wich sprite should be draw in sprite sheet
     *
     * @memberof CPU
     */
    drawSprite() {
        if (this.frame_count >= this.animation_speed) {
            this.frame_count = 0;
            this.updateIndex++;
            if (this.updateIndex > 1) {
                this.updateIndex = 0;
            }

        }

        CTX.drawImage(RESOURCES.CPU_sprites[0].content,
            this.updateIndex * this.width, this.height * this.state,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height);


        this.frame_count++;
    }


    setLocation(x, y) {
        this.x = x;
        this.y = y;
        this.destination = { x: this.x, y: this.y };
    }


}   

module.exports=CPU;

