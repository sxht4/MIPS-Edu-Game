var assert = require('assert');
//Author: Hanzhang Bai
describe('Basic Mocha String Test: Testing whether mocha and chai works or not', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
describe('Game.js Unit Tests', function () {
    it('should return a correct frame number, which is 30', function () {
        var someGame = Game(320,480,30);
        assert.equal(this.FPS, 30);
       });
    it('Game scene length should be 1', function () {
        var someGame = Game(320,480,30);
        someGame.addSence(abba);
        assert.equal(this.current_sence, 1);
       });
    it('Game width should be 320', function () {
        var someGame = Game(320,480,30);
        assert.equal(this.game_canvas.width, 320);
       });
    it('Game height should be 480', function () {
        var someGame = Game(320,480,30);
        assert.equal(this.game_canvas.height, 480);
       });   
});