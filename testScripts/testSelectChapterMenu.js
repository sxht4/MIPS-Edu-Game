var SelectChapterMenu=require('../JS/SelectChapterMenu');
var RESOURCES=require('../JSON/Resources');

var assert = require('assert');

describe('test selectChapterMenu', function(){
    it('initMenu works', function(){

        var someMenu=new SelectChapterMenu();
        assert.equal(someMenu.components.length, 1);
    } );

    // it('test button', function(){
    //     var someMenu=new Game();
    //     var someSelectChapterMenu = new SelectChapterMenu();
    //     someMenu.addSence(someSelectChapterMenu);

    // });
});