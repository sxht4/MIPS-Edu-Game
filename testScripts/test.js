var Game=require('../JS/Game');
var Component=require('../JS/Component');
var Event=require('../JS/Event');
var EventController=require('../JS/EventController');
var Button=require('../JS/Button');
var GameScene=require('../JS/GameScene');
var MenuAnimation=require('../JS/MenuAnimation');
var Menu=require('../JS/Menu');
var RESOURCES=require('../JSON/Resources');
var SelectChapterMenu=require('../JS/selectChapterMenu');
var NewSceneEvent=require('../JS/NewSceneEvent');
var GameUI=require('../JS/GameUI');

var assert = require('assert');
//Author: Hanzhang Bai, Tianyu Cao
//26 Feb 2019
describe('Basic Mocha String Test: Testing whether mocha and chai works or not', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
describe('Game.js Unit Tests', function () {
    var someGame =new Game(320,480,30);
    it('should return a correct frame number, which is 30', function () {
        assert.equal(someGame.FPS, 30);
       });
    it('Game scene length should be 1', function () {
      
        var testscene =new GameScene();
        someGame.addScene(testscene);
        assert.equal(someGame.game_scenes.length, 1);
       });
});

// MenuAnimation tests

describe('MenuAnimation.js Unit Tests', function(){
    var animation = new MenuAnimation();
    it('id should be: MenuAnimation', function(){
        assert.equal(animation.id, "MenuAnimation");
    });
    it('Initial x component should 50', function(){
        assert.equal(animation.x, 50);
    });
    it('Initial y component should 0', function(){
        assert.equal(animation.y, 0);
    });
    it('Should be unclickable', function(){
        assert.equal(animation.clickable, false);
    });
    var animation_move = new MenuAnimation();
    animation_move.move();
    it('gravitySpeed should be 0.1', function(){
        assert.equal(animation_move.gravitySpeed, 0.1);
    });
    it('x component should not change (=50)', function(){
        assert.equal(animation_move.x, 50);
    });
    it('y comonent should be 0.1', function(){
        assert.equal(animation_move.y, 0.1);
    });
    var animation_move2 = new MenuAnimation();
    animation_move2.move();
    animation_move2.move();
    it('gravitySpeed should be 0.2', function(){
        assert.equal(animation_move2.gravitySpeed, 0.2);
    });
    it('x component should not change (=50)', function(){
        assert.equal(animation_move2.x, 50);
    });
    it('y comonent should be 0.3', function(){
        var truth = 0.3
        var value = Math.abs(animation_move2.y - 0.3); 
        if(value>0.01){
            assert.fail("y component is not 0.3 and lies out of tolerance zone")
        }
        //assert.should.be.closeTo(animation_move2.y, 0.3);

    });
    var animation_hitBottom = new MenuAnimation();
    var i;
    for(i = 0; i < 5000; i++){
        animation_hitBottom.move();
    }
    it('y comonent should <= bottom we set', function(){
        var bottom = 320/3- 50;
        assert.equal(animation_hitBottom.y <= bottom, true);
    });
});

//Event test
describe('Event.js Unit Tests', function(){
    var eve1 = new Event("e1", 3);
    it('Constructor should set event id correctly', function(){
        assert.equal(eve1.id, "e1");
    });
    it('Constructor should set event click countnumber correctly', function(){
        assert.equal(eve1.clickCount, 3);
    });
    var eve2 = new Event("e2", 0);
    eve2.excute();
    it('Execute function should not change event id', function(){
        assert.equal(eve2.id, "e2");
    });
    it('Execute function should not change event click Countnumber', function(){
        assert.equal(eve2.clickCount, 0);
    });
    // beforeEach(function() {
    //     this.sinon.stub(console, 'log');
    //   });
    // it('Execute function should not change event click Countnumber', function(){
    //     expect(console.log.calledWith("WARNING: YOU FUCKED UP. WROTE YOUR OWN EXECUTION")).to.be.ture;
    // });
});

//EventController tests
describe('EventController.js Unit Tests', function(){
    var eve1 = new Event("e1", 0);
    var eve2 = new Event("e2", 0);
    var evc = new EventController(eve1, eve2);

    // it('Constructor should  set event1 correctly', function(){

    // });
    // it('Constructor should  set event click countnumber correctly', function(){
    //     assert.equal(eve.clickCount, 3);
    // });
});


// Button tests
describe('Button.js Unit Tests', function(){
    var eve1 = new Event("e1", 0);
    var eve2 = new Event("e2", 0);
    var evc = new EventController(eve1, eve2);
    var bt1 = new Button("btId", "byC", 10, 20, 30, 40, evc);
    it('Constructor should set button id correctly', function(){
        assert.equal(bt1.id, "btId");
    });
    it('Constructor should set button content correctly', function(){
        assert.equal(bt1.content, "byC");
    });
    it('Constructor should set button x coordinate correctly', function(){
        assert.equal(bt1.x, 10);
    });
    it('Constructor should set button y coordinate correctly', function(){
        assert.equal(bt1.y, 20);
    });
    it('Constructor should set button width correctly', function(){
        assert.equal(bt1.width, 30);
    });
    it('Constructor should set button height correctly', function(){
        assert.equal(bt1.height, 40);
    });
    it('Constructor should set button eventController correctly', function(){
        assert.equal(bt1.event_controller, evc);
    });
});

//Component tests
describe('Component.js Unit Tests', function(){
    var cm = new Component("cmId", "cmC", 10, 20, 30, 40, true);
    it('Constructor should set button id correctly', function(){
        assert.equal(cm.id, "cmId");
    });
    it('Constructor should set button content correctly', function(){
        assert.equal(cm.content, "cmC");
    });
    it('Constructor should set button x coordinate correctly', function(){
        assert.equal(cm.x, 10);
    });
    it('Constructor should set button y coordinate correctly', function(){
        assert.equal(cm.y, 20);
    });
    it('Constructor should set button width correctly', function(){
        assert.equal(cm.width, 30);
    });
    it('Constructor should set button height correctly', function(){
        assert.equal(cm.height, 40);
    });
    it('Constructor should set button y coordinate correctly', function(){
        assert.equal(cm.y, 20);
    });
    it('Constructor should set button clickable correctly', function(){
        assert.equal(cm.clickable, true);
    });    
});

//GameScene Test
describe('GameScene.js Unit Tests', function(){
    var gs1 = new GameScene();
    it('Constructor should contruct an empty array of type Component', function(){
        assert.equal(gs1.components.length, 0);
    });
    var gs2 = new GameScene();
    var cm1 = new Component("cm1Id", "cmC", 10, 20, 30, 40, true);
    var cm2 = new Component("cm2Id", "cmC", 0, 0, 10, 20, true);
    gs2.components.push(cm1);
    gs2.components.push(cm2);
    it('GetClickedElement should return null if no component is found', function(){
        assert.equal(gs2.getClickedElement(50,50), null);
    });
    it('GetClickedElement should return corrent component if component is found', function(){
        assert.equal(gs2.getClickedElement(0,0), cm2);
    });    
    it('GetById should return null if no component is found', function(){
        assert.equal(gs2.getByID("c"), null);
    });
    it('GetById should return correct component if component is found', function(){
        assert.equal(gs2.getByID("cm1Id"), cm1);
    });
});

//NewSceneEvent Tests
describe('NewSceneEvents.js Unit Tests', function(){
    var gs = new GameScene();
    var nse1 = new NewSceneEvent(gs);
    it('Constructor should set id to "new game"', function(){
        assert.equal(nse1.id, "new game");
    });
    it('Contructor should set new_scene correctly', function(){
        assert.equal(nse1.new_scene, gs);
    });
});

//Menu Test
describe('Menu.js Unit Tests', function(){
    var mn1 = new Menu();
    it('Constructor should set FPS to 30', function(){
        assert.equal(mn1.FPS, 30);
    });
    it('Constructor should contruct an nonempty array of type Component', function(){
        assert.notEqual(mn1.length, 0);
    });
    it('initMenu should create a button which id is "NewGameButton"', function(){
        assert.notEqual(mn1.getByID("NewGameButton"), null);
    });
    it('initMenu should create a button which id is "ContinueButton"', function(){
        assert.notEqual(mn1.getByID("ContinueButton"), null);
    });
    it('initMenu should create a button which id is "OptionsButton"', function(){
        assert.notEqual(mn1.getByID("OptionsButton"), null);
    });
    it('initMenu should create a MenuAnimation component which id is "MenuAnimation"', function(){
        assert.notEqual(mn1.getByID("MenuAnimation"), null);
    });
});

//GameUI Tests
describe('GameUI.js Unit Tests', function(){
    var gui = new GameUI();
    it('Constructor should set fps to 30', function(){
        assert.equal(gui.FPS, 30);
    });
    it('Contructor should construct a nonempty array of Component', function(){
        assert.notEqual(gui.components.length, 0);
    });
    it('initMenu should create a button which has id "gameUIButton"', function(){
        assert.notEqual(gui.getByID("gameUIButton"), "gameUIButton");
    });
});
