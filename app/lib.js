/**
 * Sample functions to test
 */

var sampleFunctions = {};

sampleFunctions.addTwoNumbers = function(num1, num2) {
    return num1 + num2;
};

sampleFunctions.subtractTwoNumbers = function(num1, num2) {
    return num1 - num2;
};

sampleFunctions.errorThrowingFunction = function() {
    console.log(foo);
};

// Export the module
module.exports = sampleFunctions;
