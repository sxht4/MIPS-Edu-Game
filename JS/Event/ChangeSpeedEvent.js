
class ChangeSpeedEvent extends GameEvent{
    constructor(cpu){
        super();
        this.cpu=cpu;
        this.speed=0;
    }
    excute(){
        this.speed++;
        if(this.speed>3){
            this.speed=1;
        }
        this.cpu.setSpeed(this.speed);
       
    }
}
