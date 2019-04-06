class NewSceneEvent extends Event {
    /**
     *Creates an instance of NewsceneEvents.
     * @param {GameScene} new_scene  is latest scene that will be added to GAME
     * @memberof NewSceneEvent
     */
    constructor(new_scene){
        super("new game");
        this.new_scene=new_scene;
    }

  
    /**
     *
     * excute to add GameScene for game
     * @param {number} x
     * @param {number} y
     * @memberof NewSceneEvent
     */
    excute(x,y){
        CTX.clearRect(0, 0, 480, 320);
        GAME.addScene(this.new_scene);
        this.new_scene.init();
    }
   
}
