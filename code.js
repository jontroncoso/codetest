"use strict";
var code = {

    helloWorld: function () {
        return "Hello World!";
    },

    capitalizeEveryNthWord: function (sentence, offset, n) {
        // Simple validation. realized after coding this probably unnecessary for a codetest.
        if (typeof sentence != 'string') throw new Error("invalid sentence passed");
        if (typeof offset != 'number')offset = 0;
        if (typeof n != 'number')n = 0;

        return sentence.match(/\S+/g).map(function (e, i) {
            if (i >= offset && i % n == 0) return e.charAt(0).toUpperCase() + e.slice(1);
            return e;
        }).join(' ');
    },

    isPrime: function (n) {
        var i;
        if (n <= 1)return false;
        for (i = 2; i < (n / 2); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    },

    goldenRatio: function (a, b) {
        var ab =code.sequencify(1000, a,b);
        return ab[1]/ab[0];
    },


    fibonacci: function (n) {
        return code.sequencify(n, 0, 1)[0];
    },


    squareRoot: function (n) {
        // limit to the millionth place (3 for thousandth place, etc..)
        var granularity = 6;
        // var granularity = Infinity; // - WARNING - (near?) infinite loop possible depending on number

        var target = n / 2; // what number i'm using for comparison
        var targetGranularity = 0; // what place I'm in.
        var targetSquare = Math.pow(target, 2); // number to compare against
        var precision = Math.pow(10, -targetGranularity);
        var roundedN = ((n * precision) / precision); // can effectively find square root of floating "n" (like 25.12345 instead of just 25.0).

        function recalculateTarget(number, precision, negative){
            return (Math.round((target * precision) + (negative === true ? -1 : 1)) / precision);
        }


        var tries = [];
        while (targetSquare != n && targetGranularity <= granularity) {

            if (targetSquare > roundedN) {
                target = recalculateTarget(target, precision, true);

            } else if (targetSquare < roundedN) {
                target = recalculateTarget(target, precision);
            }
            if (targetSquare == roundedN || tries.indexOf(target) != -1) {
                targetGranularity++;
                precision = Math.pow(10, targetGranularity);
                roundedN = (Math.round(n * precision) / precision);
            }
            targetSquare = Math.pow(target, 2);

            tries.push(target);

        }
        return target;

    },

    // I had an idea for using an array key/value instead of seperate a/b vars.
    // Decided instead to fiddle with scala.
    sequencify: function (n, a, b) {
        var c, i;
        for (i = 0; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return [a,b];
    }
};
module.exports = code;
