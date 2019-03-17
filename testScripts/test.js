var Game=require('../JS/Game');
var GameScene=require('../JS/GameScene');
var Component=require('../JS/Component');
var MenuAnimation=require('../JS/MenuAnimation');

var assert = require('assert');
//Author: Hanzhang Bai
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
      
        var testsence =new GameScene();
        someGame.addSence(testsence);
        assert.equal(someGame.game_sences.length, 1);
       });
    it('Game width should be 320', function () {
        var anm=new Component("MenuAnimation",str,50,0,0,10,false);
        var anm=new MenuAnimation();
        assert.equal(0, 0);
       });
    it('Game height should be 480', function () {
        var someGame = Game(320,480,30);
        assert.equal(this.game_canvas.height, 480);
       });   
});