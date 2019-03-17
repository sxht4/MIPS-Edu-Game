var assert = require('assert');
describe('Basic Mocha String Test: Testing whether mocha and chai works or not', function () {
    it('should return correct string length', function () {
           assert.equal("Hello".length, 5);
       });
    it('should return first charachter of the string', function () {
           assert.equal("Hello".charAt(0), 'H');
       });
   });