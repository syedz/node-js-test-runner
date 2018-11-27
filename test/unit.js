/**
 * Unit Tests
 */

// Dependencies
var assert = require('assert');
var _sampleFunctions = require('../app/lib');

// Holder for tests
var unit = {};

// Assert that _sampleFunctions.addTwoNumbers is adding two numbers together
unit['_sampleFunctions.addTwoNumbers should add 2 numbers together'] = function(done) {
    var sum = _sampleFunctions.addTwoNumbers(2, 1);
    assert.equal(sum, 3);

    done();
};

unit['_sampleFunctions.subtractTwoNumbers should subtract the second arg from the first'] = function(done) {
    var difference = _sampleFunctions.subtractTwoNumbers(4, 3);
    assert.equal(difference, 1);

    done();
};

unit['_sampleFunctions.subtractTwoNumbers should failed'] = function(done) {
    var difference = _sampleFunctions.subtractTwoNumbers(4, 3);
    assert.equal(difference, 10);

    done();
};

unit['_sampleFunctions.errorThrowingFunction should not throw an error'] = function() {
    assert.doesNotThrow(function() {
        _sampleFunctions.errorThrowingFunction();
        done();
    }, TypeError);
};

module.exports = unit;
