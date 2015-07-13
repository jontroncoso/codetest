"use strict";
var code = {
    // Returns "Hello World!"
    helloWorld: function () {
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function (sentence, offset, n) {
        if (typeof sentence != 'string') throw new Error("invalid sentence passed");
        if (typeof offset != 'number')offset = 0;
        if (typeof n != 'number')n = 0;

        return sentence.match(/\S+/g).map(function (e, i) {
            if (i >= offset && i % n == 0) return e.charAt(0).toUpperCase() + e.slice(1);
            return e;
        }).join(' ');
    },

    // Determine if a number is prime
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

    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio.
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function (a, b) {
        var ratio = 0;
        var lastRatio = 1;
        // wasn't sure how far you wanted to go so just went out to the thousandth place
        while (Math.round(ratio * 1000) / 1000 != Math.round(lastRatio * 1000) / 1000) {
            var c = a + b;
            lastRatio = ratio;
            ratio = c / b;
            a = b;
            b = c;
        }

    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function (n) {
        var a = 0;
        var b = 1;
        var c, i;
        for (i = 0; i < n; i++) {
            var c = a + b;
            a = b;
            b = c;
        }
        return a;
    },

    squareRoot: function (n) {
        // limit to the millionth place (3 for thousandth place, etc..)
        var granularity = 6;
        // var granularity = Infinity; // - WARNING - (near?) infinite loop possible depending on number

        var target = n / 2; // what number i'm using for comparison
        var targetGranularity = 0; // what place I'm in.
        var targetSquare = Math.pow(target, 2); // number to compare against
        var precision = Math.pow(10, -targetGranularity);
        var roundedN = ((n * precision) / precision); // can effectively find square root of floating "n".

        function square(target, precision){
            return((Math.pow(target, 2) * precision) / precision);
        };
        function recalculateTarget(number, precision, negative){
            return (Math.round((target * precision) + (negative === true ? -1 : 1)) / precision);
        }

        var i = 0;
        var tries = [];
        while (targetSquare != n && targetGranularity <= granularity && i < 1000) {
            i++;

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
            targetSquare = square(target, precision);

            tries.push(target);

        }
        return target;

    }
};
module.exports = code;
