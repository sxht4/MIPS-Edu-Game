var CodePanel=require('../JS/Code_Panel/CodePanel');
var TextCell=require('../JS/Code_Panel/TextCell');

var CPU=require('../JS/Character/CPU');

var MenuAnimation=require('../JS/Menu/MenuAnimation');
var Menu=require('../JS/Menu/Menu');
var MenuBackGround=require('../JS/Menu/MenuBackGround');
var SelectChapterMenu=require('../JS/Menu/SelectChapterMenu');
var InstructionMenu=require('../JS/Menu/InstructionMenu');

var GameEvent=require('../JS/Event/GameEvent');
var LongPressEvent=require('../JS/Event/LongPressEvent');
var NewSenceEvent=require('../JS/Event/NewSceneEvent');
var RunCodeEvent=require('../JS/Event/RunCodeEvent');

var Interpreter=require('../JS/Interpreter/Interpreter');

var Button=require('../JS/Button');
var Component=require('../JS/Component');
var Game=require('../JS/Game');
var GameScene=require('../JS/GameScene');
var Layer=require('../JS/Layer');
var Memory=require('../JS/Memory');
var MainScene=require('../JS/MainScene');
var Register=require('../JS/Register');
var RegisterCell=require('../JS/RegisterCell');

var RESOURCES=require('../Resource/Resources');
var Loader=require('../Resource/Loader');


var assert = require('assert');
//var expect = require('expect');
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

//Menu Test
describe('Menu.js Unit Tests', function(){
    var mn = new Menu();
    it('Constructor should create a array of type Layer which contains one element', function(){
        assert.equal(mn.layers.length, 1);
    });
    var mn1 = new Menu();
    mn1.init();
    it('init function should create a button which id is "New_Game_Button"', function(){
        assert.notEqual(mn1.getByID("New_Game_Button"), null);
        assert.equal(mn1.getByID("New_Game_Button").text, "NEW GAME")
    });
    it('init should create a button which id is "Option_Button"', function(){
        assert.notEqual(mn1.getByID("Option_Button"), null);
        assert.equal(mn1.getByID("Option_Button").text, "OPTION");
    });
    it('init should create a button which id is "about_us"', function(){
        assert.notEqual(mn1.getByID("about_us"), null);
        //assert.notEqual(mn1.getByID("about_us").text, "ABOUT US");
    });
    it('init should create a MenuAnimation component which id is "MenuAnimation"', function(){
        assert.notEqual(mn1.getByID("MenuAnimation"), null);
    });
    it('init should create a MenuAnimation component which id is "MenuBackGround"', function(){
        assert.notEqual(mn1.getByID("MenuBackGround"), null);
    });
});

//Instruction Menu Test
describe('InstructionMenu.js Unit Tests', function(){
    var im = new InstructionMenu();
    it('Constructor should create a array of type Layer which contains one element', function(){
        assert.equal(im.layers.length, 1);
    });
    it('init function should create a button which id is "Add_Ins"', function(){
        assert.notEqual(im.getByID("Add_Ins"), null);
        assert.equal(im.getByID("Add_Ins").text, "Add")
    });
});


//MenuBackGround Test
describe('MenuBackground.js Unit Tests', function(){
    var mb = new MenuBackGround();
    it('Constructor should set id properly', function(){
        assert.equal(mb.id, "MenuBackGround");
    });
    it('MenuBackGround is not clickable', function(){
        assert.equal(mb.clickable, false);
    });
});

//SelectChapterMenu Test
describe('SelectChapterMenu.js Unit Tests', function(){
    var sc = new SelectChapterMenu();
    it('Constructor should create a array of type Layer which contains one element', function(){
        assert.equal(sc.layers.length, 1);
    });
    var sc1 = new SelectChapterMenu();
    sc1.init();
    it('init function should create a button which id is "Chpater_1_Button"', function(){
        assert.notEqual(sc1.getByID("Chapter_1_Button"), null);
        //assert.equal(sc1.getByID("Chapter_1_Button").text, "Chapter 1")
    });
    it('init should create a component which id is "Chapter_Menu_Background"', function(){
        assert.notEqual(sc1.getByID("Chapter_Menu_Background"), null);
    });
});


//Game test
describe('Game.js Unit Tests', function () {
    var someGame =new Game(320,480,30);
    it('Constructors hould return a correct FPS number, which is 30', function () {
        assert.equal(someGame.FPS, 30);
    });
    it('Cons ructor should return a correct width number', function () {
        assert.equal(someGame.width, 320);
    });
    it('Constructor should return a correct height number', function () {
        assert.equal(someGame.height, 480);
    });
    it('Constructor should return a correct speed number', function () {
        assert.equal(someGame.speed, 1);
    });
    it('Constructor should return a empty game_scences array', function () {
        assert.equal(someGame.game_scenes.length, 0);
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

//GameEvent test
describe('GameEvent.js Unit Tests', function(){
    var eve1 = new GameEvent("e1", 3);
    it('Constructor should set event id correctly', function(){
        assert.equal(eve1.id, "e1");
    });
    it('Constructor should set event click countnumber correctly', function(){
        assert.equal(eve1.clickCount, 3);
    });
  //  var eve2 = new GameEvent("e2", 0);
    //expect(eve2.excute(1, 2)).to.throw('WARNING: YOU FUCKED UP. WROTE YOUR OWN EXECUTION');
    
    // beforeEach(function() {
    //     this.sinon.stub(console, 'log');
    //   });
    // it('Execute function should not change event click Countnumber', function(){
    //     expect(console.log.calledWith("WARNING: YOU FUCKED UP. WROTE YOUR OWN EXECUTION")).to.be.ture;
    // });
});

//LongPressEvent test
describe('LongPressEvent.js Unit Tests', function(){
    var lpe = new LongPressEvent();
    it('Constructor should set event id correctly', function(){
        assert.equal(lpe.id, "longPress");
    });
    it('Constructor should set event click countnumber correctly', function(){
        assert.equal(lpe.clickCount, 0);
    });
});

//NewSceneEvent test
describe('NewSceneEvent.js Unit Tests', function(){
    var gm = new GameScene();
    var nse = new NewSenceEvent(gm);
    it('Constructor should set event id correctly', function(){
        assert.equal(nse.id, "new game");
    });
    it('Constructor should set event click countnumber correctly', function(){
        assert.equal(nse.clickCount, 0);
    });
    it('Constructor should set scene correctly', function(){
        assert.equal(nse.new_scene, gm);
    });
});

//RunCodeEvent test
describe('RunCodeEvent.js Unit Tests', function(){
    var cpu = new CPU();
    var cp= new CodePanel();
    var m = new Memory("me", [], 0, 0, 0, 0, true);
    var r = new Register("re", [], 0, 0, 0, 0, true);
    var ip = new Interpreter(cpu, cp, m, r);
    var nse = new RunCodeEvent(ip);
    it('Constructor should set event id correctly', function(){
        assert.equal(nse.id, "run code");
    });
    it('Constructor should set event click countnumber correctly', function(){
        assert.equal(nse.clickCount, 0);
    });
    it('Constructor should set Interpreter correctly', function(){
        assert.equal(nse.interpreter, ip);
    });
    it('excute function should advance clickcount', function(){
        for(var i = 0; i < 50; i++)
            nse.excute(0,0);
        assert.equal(nse.clickCount, 50);
    });
});

// CPU tests
describe('CPU.js Unit Tests', function(){
    var cpu1 = new CPU();
    it('Constructor should set CPU id correctly', function(){
        assert.equal(cpu1.id, "CPU");
    });
    it('Constructor should set x coordinate correctly', function(){
        assert.equal(cpu1.x, 220);
    });
    it('Constructor should set y coordinate correctly', function(){
        assert.equal(cpu1.y, 0);
    });
    it('Constructor should set width correctly', function(){
        assert.equal(cpu1.width, 32);
    });
    it('Constructor should set height correctly', function(){
        assert.equal(cpu1.height, 32);
    });
    it('CPU should clickable', function(){
        assert.equal(cpu1.clickable, true);
    });
    it('Constructor should set Speed correctly', function(){
        assert.equal(cpu1.speedY, 4);
        assert.equal(cpu1.speedX, 4);
    });
    it('Constructor should set frame count correctly', function(){
        assert.equal(cpu1.frame_count, 0);
    });
    it('Constructor should set sleeptie correctly', function(){
        assert.equal(cpu1.sleeptime, 0);
    });
    it('moveTo function should set destination correctly', function(){
        cpu1.moveTo(25,35);
        assert.equal(cpu1.destination.x,25);
        assert.equal(cpu1.destination.y,35);
    });

    //Move Test here

    //Moveup, down, left, right tests
    it('moveUp function should change y correctly, and it should not change x', function(){
        var xOrg = cpu1.x;
        var yOrg = cpu1.y;
        cpu1.setSpeed(2);
        cpu1.moveUp();
        assert.equal(cpu1.y,yOrg-cpu1.speedY);
        assert.equal(cpu1.x,xOrg);
    });
    it('moveDown function should change y correctly, and it should not change x', function(){
        var xOrg = cpu1.x;
        var yOrg = cpu1.y;
        cpu1.setSpeed(2);
        cpu1.moveDown();
        assert.equal(cpu1.y,yOrg+cpu1.speedY);
        assert.equal(cpu1.x,xOrg);
    });
    it('moveLeft function should change x correctly, and it should not change y', function(){
        var xOrg = cpu1.x;
        var yOrg = cpu1.y;
        cpu1.setSpeed(1);
        cpu1.moveLeft();
        assert.equal(cpu1.x,xOrg-cpu1.speedX);
        assert.equal(cpu1.y,yOrg);
    });    
    it('moveRight function should change x correctly, and it should not change y', function(){
        var xOrg = cpu1.x;
        var yOrg = cpu1.y;
        cpu1.setSpeed(1);
        cpu1.moveRight();
        assert.equal(cpu1.x,xOrg+cpu1.speedX);
        assert.equal(cpu1.y,yOrg);
    });
});

//CodePaneL Test
describe('CodePanel.js Unit Tests', function(){
    var cp = new CodePanel();
    it('Constructor should set id correctly', function(){
        assert.equal(cp.id, "code_panel");
    });
    it('Constructor should set x coordinate correctly', function(){
        assert.equal(cp.x, 365);
    });
    it('Constructor should set y coordinate correctly', function(){
        assert.equal(cp.y, 90);
    });
    it('Constructor should set width correctly', function(){
        assert.equal(cp.width, 100);
    });
    it('Constructor should set height correctly', function(){
        assert.equal(cp.height, 16*14);
    });
    it('CodePanel should be clickable', function(){
        assert.equal(cp.clickable, true);
    });
    it('addTextCell function should add a textcell to content', function(){
        var oSize=cp.content.length;
        cp.addTextCell();
        assert.equal(cp.content.length, oSize+1);
    });
});

// TextCell Test
describe('TextCell.js Unit Tests', function(){
    var tc = new TextCell("tc1","tcc",0,10,23,43,false);
    it('Constructor should set id correctly', function(){
        assert.equal(tc.id, "tc1");
    });
    it('Constructor should set content coordinate correctly', function(){
        assert.equal(tc.content, "tcc");
    });
    it('Constructor should set x coordinate correctly', function(){
        assert.equal(tc.x, 0);
    });
    it('Constructor should set y coordinate correctly', function(){
        assert.equal(tc.y, 10);
    });
    it('Constructor should set width correctly', function(){
        assert.equal(tc.width, 23);
    });
    it('Constructor should set height correctly', function(){
        assert.equal(tc.height, 43);
    });
    it('Constructor should set clickable correctly', function(){
        assert.equal(tc.clickable, false);
    });

});

//Interpreter test
describe('Interpreter.js Unit Tests', function(){
    var cpu = new CPU();
    var cp= new CodePanel();
    var m = new Memory("me", [], 0, 0, 0, 0, true);
    var r = new Register("re", [], 0, 0, 0, 0, true);
    r.init();
    var ip = new Interpreter(cpu, cp, m, r);
    it('Constructor should set event cpu correctly', function(){
        assert.equal(ip.cpu, cpu);
    });
    it('Constructor should set codepanel correctly', function(){
        assert.equal(ip.code_panel, cp);
    });
    it('Constructor should set Memory correctly', function(){
        assert.equal(ip.memeory, m);
    });
    it('Constructor should set Register correctly', function(){
        assert.equal(ip.register, r);
    });
    it('excuteADD function should add value correctly', async function(){
        //test failed
        r.getCellAt(0).setContent(2);
       
        
        await  ip.executeADD('t0', 't1', 't2'); // t0 = 0 + 0 
       // console.log(ip.getRegister('t0'));
        assert.equal(ip.getRegister('t0').value, 0);
        //test passed
        r.getCellAt(3).setContent(3);
        
        await ip.executeADD('t1', 't2', 't3');
        assert.equal(ip.getRegister('t1').value, 3);
        r.getCellAt(4).setContent(12);
        await   ip.executeADD('t2', 't3', 't4'); //t2 = 3 + 12
        await  ip.executeADD('t2', 't3', 't1'); //t2 = 3 + 3
        assert.equal(ip.getRegister('t2').value, 6);
    });
    it('excuteADDI function should add value correctly',async function(){
        //test failed
        r.getCellAt(0).setContent(2);
        await ip.executeADDI('t0', 't1', '1');
        assert.equal(ip.getRegister('t0').value, 4);

        //test passed
        r.getCellAt(4).setContent(5);
        await ip.executeADDI('t1', 't4', '-1');
        assert.equal(ip.getRegister('t1').value, 4);
        r.getCellAt(4).setContent(19);
        await  ip.executeADDI('t2', 't1', '-1'); // t2 = 4 - 1
        try {
            await  ip.executeADDI('t2', 't2', 't4'); // t2 = t2 + 19 = 3 + 19
        } catch (error) {
            assert.equal(error, 'not a number '+ 't4');
        }
        
        assert.equal(ip.getRegister('t2').value, 3);
    });
    it('excuteSLL function should shift value correctly',async function(){
        r.getCellAt(0).setContent(2);
        await ip.executeSLL('t0', 't0', '1');
        assert.equal(ip.getRegister('t0').value, 4);

        r.getCellAt(4).setContent(5);
        await ip.executeSLL('t1', 't4', '3');
        assert.equal(ip.getRegister('t1').value, 40); 
        try {
            await  ip.executeSLL('t2', 't2', 't4'); 
        } catch (error) {
            assert.equal(error, 'not a number '+ 't4');
        }
        r.getCellAt(3).setContent(19);
        await ip.executeSLL('t3', 't3', '0');
        assert.equal(ip.getRegister('t3').value, 19);
    });
    it('excuteSRL function should shift value correctly',async function(){
        r.getCellAt(0).setContent(2);
        await ip.executeSRL('t0', 't0', '1');
        assert.equal(ip.getRegister('t0').value, 1);

        r.getCellAt(1).setContent(5);
        await ip.executeSRL('t2', 't1', '1');
        assert.equal(ip.getRegister('t2').value, 2); 
        try {
            await  ip.executeSRL('t2', 't2', 't4'); 
        } catch (error) {
            assert.equal(error, 'not a number '+ 't4');
        }
        r.getCellAt(3).setContent(19);
        await ip.executeSRL('t3', 't3', '3');
        assert.equal(ip.getRegister('t3').value, 2);
    });
    it('excuteSTL function should compare values and set result value correctly', async function(){
        r.getCellAt(2).setContent(2);
        r.getCellAt(1).setContent(1);
        r.getCellAt(3).setContent(3);
        await  ip.executeSLT('t0', 't1', 't2'); 
       // console.log(ip.getRegister('t0'));
        assert.equal(ip.getRegister('t0').value, 1);
        //test passed
        await  ip.executeSLT('t4', 't3', 't2');
        assert.equal(ip.getRegister('t4').value, 0);
    });
    it('When two values are equal to each other, 0 should be set to destination reg', async function(){
        r.getCellAt(2).setContent(2);
        r.getCellAt(1).setContent(2);        
        await  ip.executeSLT('t0', 't1', 't2'); 
        assert.equal(ip.getRegister('t0').value, 0);
    });

});

// //EventController tests
// describe('EventController.js Unit Tests', function(){
//     var eve1 = new Event("e1", 0);
//     var eve2 = new Event("e2", 0);
//     var evc = new EventController(eve1, eve2);

//     // it('Constructor should  set event1 correctly', function(){

//     // });
//     // it('Constructor should  set event click countnumber correctly', function(){
//     //     assert.equal(eve.clickCount, 3);
//     // });
// });


// Button tests
describe('Button.js Unit Tests', function(){
    var bt1 = new Button("btId", "byC", 10, 20, 30, 40, "text", { size: 15, type: 'MyType' }, "white", 1);
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
    it('Constructor should set button text correctly', function(){
        assert.equal(bt1.text, "text");
    });
    it('Constructor should set button font size correctly', function(){
        assert.equal(bt1.font.size, 15);
    });
    it('Constructor should set button font type correctly', function(){
        assert.equal(bt1.font.type, "MyType");
    });
    it('Constructor should set button color correctly', function(){
        assert.equal(bt1.color, "white");
    });
    it('Constructor should set button sprite_index correctly', function(){
        assert.equal(bt1.sprite_index,1);
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
    it('Constructor should set button clickable correctly', function(){
        var cm2 = new Component("cmId", "cmC", 10, 20, 30, 40, false);
        assert.equal(cm2.clickable, false);
    });   
});

//GameScene Test
describe('GameScene.js Unit Tests', function(){
    var gs1 = new GameScene();
    it('Constructor should contruct array of type layer which contains one element', function(){
        assert.equal(gs1.layers.length, 1);
    });
    it('AddLayer should add a layer to layers array', function(){
        gs1.addLayer();
        assert.equal(gs1.layers.length, 2);
    });
    var gs2 = new GameScene();
    var cm1 = new Component("cm1Id", "cmC", 10, 20, 30, 40, true);
    var cm2 = new Component("cm2Id", "cmC", 0, 0, 10, 20, true);
    gs2.addComponent(cm1,0);
    //gs2.addComponent(cm3,-1);
    it('GetClickedElement should return null if no component is found', function(){
        assert.equal(gs2.getClickedElement(50,50), null);
    });
    it('GetClickedElement should return corrent component if component is found', function(){
        gs2.addComponent(cm2,-1);
        assert.equal(gs2.getClickedElement(0,0), cm2);
    });    
    it('GetById should return null if no component is found', function(){
        assert.equal(gs2.getByID("c"), null);
    });
    it('GetById should return correct component if component is found', function(){
        assert.equal(gs2.getByID("cm1Id"), cm1);
    });
});



//Layer Test
describe('Layer.js Unit Tests', function(){
    var ly1 = new Layer();
    it('Constructor should contruct an empty array of type Component', function(){
        assert.equal(ly1.components.length, 0);
    });
    var ly2 = new Layer();
    var cm1 = new Component("cm1Id", "cmC", 10, 20, 30, 40, true);
    var cm2 = new Component("cm2Id", "cmC", 0, 0, 10, 20, true);
    ly2.components.push(cm1);
    ly2.components.push(cm2);
    it('GetClickedElement should return null if no component is found', function(){
        assert.equal(ly2.getClickedElement(50,50), null);
    });
    it('GetClickedElement should return corrent component if component is found', function(){
        assert.equal(ly2.getClickedElement(0,0), cm2);
    });    
    it('GetById should return null if no component is found', function(){
        assert.equal(ly2.getByID("c"), null);
    });
    it('GetById should return correct component if component is found', function(){
        assert.equal(ly2.getByID("cm1Id"), cm1);
    });
});

//InstructionMenu Tests
// describe('InstructionMenu.js Unit Tests', function(){
//     var gs = new GameScene();
//     var nse1 = new NewSenceEvent(gs);
//     it('Constructor should set id to "new game"', function(){
//         assert.equal(nse1.id, "new game");
//     });
//     it('Contructor should set new_scene correctly', function(){
//         assert.equal(nse1.new_sence, gs);
//     });
// });


//LongPressEvent Tests
describe('LongPressEvent.js Unit Tests', function(){
    var nse1 = new LongPressEvent();
    it('Constructor should set id to "longPress"', function(){
        assert.equal(nse1.id, "longPress");
    });
});

//NewSenceEvent Tests
describe('NewSceneEvents.js Unit Tests', function(){
    var gs = new GameScene();
    var nse1 = new NewSceneEvent(gs);
    it('Constructor should set id to "new game"', function(){
        assert.equal(nse1.id, "new game");
    });
    it('Constructor should set clickCount to 0', function(){
        assert.equal(nse1.clickCount, 0);
    }); 
    it('Contructor should set new_scene correctly', function(){
        assert.equal(nse1.new_scene, gs);
    });
});


//GameUI Tests
// describe('GameUI.js Unit Tests', function(){
//     var gui = new GameUI();
//     it('Constructor should set fps to 30', function(){
//         assert.equal(gui.FPS, 30);
//     });
//     it('Contructor should construct a nonempty array of Component', function(){
//         assert.notEqual(gui.components.length, 0);
//     });
//     it('initMenu should create a button which has id "gameUIButton"', function(){
//         assert.notEqual(gui.getByID("gameUIButton"), "gameUIButton");
//     });
// });

//MainScene Tests
describe('MainScene.js Unit Tests', function(){
    var gui = new MainScene();
    it('Constructor should create an array of type Layer with only one element', function(){
        assert.equal(gui.layers.length, 1);
    });
    var gui2 = new MainScene();
    gui2.init();
    it('init function should create CodePanel which has id "code_panel"', function(){
        assert.notEqual(gui2.getByID("code_panel"), null);
    });
    it('init function should create a CodePanel which is clickable', function(){
        assert.equal(gui2.getByID("code_panel").clickable, true);
    });
    it('init function should create a button which has id "Instruction_Menu"', function(){
        assert.notEqual(gui2.getByID("Instruction_Menu"), null);
    });
    it('init function should create a button which has id "Code_Run"', function(){
        assert.notEqual(gui2.getByID("Code_Run"), null);
    });
    it('init function should create a Memory which has id "Memory"', function(){
        assert.notEqual(gui2.getByID("Memory"), null);
    });
    it('init function should create a Memory which is clickable', function(){
        assert.equal(gui2.getByID("Memory").clickable, true);
    });
    it('init function should create a Register which has id "Register"', function(){
        assert.notEqual(gui2.getByID("Register"), null);
    });
    it('init function should create a Register which is clickable', function(){
        assert.equal(gui2.getByID("Register").clickable, true);
    });
    it('init function should create 7 elements in total in layers array', function(){
        assert.notEqual(gui2.layers.length, 7);
    });
});

//Memory Tests
describe('Memory.js Unit Tests', function(){
    var mem = new Memory("mID1", [], 10, 20, 30, 50, true);
    it('Constructor should set id correctly', function(){
        assert.equal(mem.id, 'mID1');
    }); 
    it('Constructor should set x coordinate correctly', function(){
        assert.equal(mem.x, 10);
    });
    it('Constructor should set y coordinate correctly', function(){
        assert.equal(mem.y, 20);
    });
    it('Constructor should set width correctly', function(){
        assert.equal(mem.width, 30);
    });
    it('Constructor should set height correctly', function(){
        assert.equal(mem.height, 50);
    });
    it('Memory should be clickable', function(){
        assert.equal(mem.clickable, true);
    });
    it('Memory should store no more than 13 elements', function(){
        assert.equal(mem.maxSize, 13);
    });
    var mem2 = new Memory("mID2", [], 10, 20, 30, 50, true);
    mem2.add(0);
    mem2.add(5);
    mem2.add(0);
    it('add function should add value correctly', function(){
        assert.equal(mem2.get(0), 0);
        assert.equal(mem2.get(2), 0);
    });
    it('add function should modify memory size correctly', function(){
        assert.equal(mem2.content.length, 13);
    });
    it('delete function should delete element correctly', function(){
        mem2.delete(1);
        assert.equal(mem2.get(1), undefined);
        assert.equal(mem2.get(0), 0);
        assert.equal(mem2.get(2), 0);
    });
    it('set function should set value correctly for a specific index', function(){
        mem2.set(2, 3);
        assert.equal(mem2.get(2), 3);
    });
    it('set function should modify the size of memory', function(){
        mem2.set(1, 8);
        assert.equal(mem2.content.length, 13);
    });

    //test failed
    it('set function should be able to set value to any position if it it does not reach the maximum size of memory', function(){
        mem2.set(12, 6);
        assert.equal(mem2.get(12), 6);
    });


    it('set function should noy be able to set value to the position that exceed the maximum size of memory', function(){
        mem2.set(13, 6);
        assert.equal(mem2.get(13), undefined);
    });
});


//Register Tests
describe('Register.js Unit Tests', function(){
    var Reg = new Register("rID1", [], 10, 20, 30, 50, true);
    it('Constructor should set id correctly', function(){
        assert.equal(Reg.id, 'rID1');
    }); 
    it('Constructor should set x coordinate correctly', function(){
        assert.equal(Reg.x, 10);
    });
    it('Constructor should set y coordinate correctly', function(){
        assert.equal(Reg.y, 20);
    });
    it('Constructor should set width correctly', function(){
        assert.equal(Reg.width, 30);
    });
    it('Constructor should set height correctly', function(){
        assert.equal(Reg.height, 50);
    });
    it('Register should be clickable', function(){
        assert.equal(Reg.clickable, true);
    });
    var Reg2 = new Register("rID2", [], 10, 20, 30, 50, true);
    Reg2.init();
    it('init function should push 5 elements to content', function(){
        assert.equal(Reg2.content.length, 5);
    });
});
//RegisterCell Tests
describe('RegisterCell.js Unit Tests', function(){
    var RegCell = new RegisterCell("rcID1", 5, 10, 20, 30, 50, true);
    it('Constructor should set id correctly', function(){
        assert.equal(RegCell.id, 'rcID1');
    }); 
    it('Constructor should set content correctly', function(){
        assert.equal(RegCell.content, 5);
    }); 
    it('Constructor should set x coordinate correctly', function(){
        assert.equal(RegCell.x, 10);
    });
    it('Constructor should set y coordinate correctly', function(){
        assert.equal(RegCell.y, 20);
    });
    it('Constructor should set width correctly', function(){
        assert.equal(RegCell.width, 30);
    });
    it('Constructor should set height correctly', function(){
        assert.equal(RegCell.height, 50);
    });
    it('Register should be clickable', function(){
        assert.equal(RegCell.clickable, true);
    });
});


describe('CodePanel.js Change Page Unit Tests', function(){
    var cp = new CodePanel();
    for(var i=0;i<30;i++){
        cp.instructions.push('ins'+i);
    }
    it('changePage (1) should change the page to next page', function(){
       cp.changePage(1);
       assert.equal(cp.line_index,13 );
    }); 
    it('Constructor should set content correctly', function(){
        cp.changePage(1);
        assert.equal(cp.line_index,13 );
        assert.equal(cp.getContent(1).content,'ins 14');

    }); 

    it('changePage (-1) should change the page to content', function(){
    
        cp.changePage(1);
        cp.changePage(-1);
        assert.equal(cp.line_index,0 );
     }); 
     it('changePage (-1) should change the content', function(){
         cp.changePage(1);
         cp.changePage(1);
         cp.changePage(-1);
         assert.equal(cp.line_index,13 );
         assert.equal(cp.getContent(1).content,'ins 14');
     }); 
    
});

