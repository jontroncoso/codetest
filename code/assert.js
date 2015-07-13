var assert = {
    areEqual: function(expected, actual, failText) {
        if (expected !== actual) 
            throw new Error(failText || ["Expected '", expected, "', but got '", actual, "'."].join(''));
    },
    isTrue: function(condition, failText) {
        if (!condition) 
            throw new Error(failText || "Expected true.");
    },
    isFalse: function(condition, failText) {
        if (condition)
            throw new Error(failText || "Expected false.")
    },
    isInRange: function(least, most, actual, failText) {
        if (typeof actual != 'number' || actual < least || actual > most) { 
            // I fixed the if statement ( added `typeof actual != 'number' || `)
            // I discovered this when I noticed I forgot to return the ratio and got a PASS anyway!
            throw new Error(failText || "Expected " + least + " to " + most + ", but got " + actual + ".");
        }
    }
}

module.exports = assert;
