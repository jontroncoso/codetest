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
        // limit to the thousandth place
        var placeGranularity = 3;


        // use Infinity if you want to go to the very end of the number
        // - WARNING - (near?) infinite loop possible depending on number
        //
        // var placeGranularity = Infinity;


        var target = n / 2; // what number i'm using for comparison
        var targetGranularity = 0; // what place I'm in.
        var precision = Math.pow(10, -targetGranularity);
        var targetSquare = Math.pow(target, 2); //((Math.pow(target, 2) * precision) / precision); // number to compare against
        var roundedN = ((n * precision) / precision);

        function square(target, precision){
            console.log('L7 target: %o | precision: %o | square: %o', target, precision, (Math.round(Math.pow(target, 2) * precision) / precision));
            return (Math.round(Math.pow(target, 2) * precision)) / precision;
        };
        function recalculateTarget(number, precision, negative){
            return (((target * precision) + (negative === true ? 0-precision : precision)) / precision);;
        }


        var i = 0;
        var tries = [];
        while (targetSquare != n && targetGranularity < placeGranularity && i < 1000) {
            i++;
            console.log('WHILE: (%o != %o && %o< %o && %o < 1000) /////  roundedN: %o | target: %o', targetSquare, n, targetGranularity, placeGranularity, i, 1000, roundedN, target);
            console.log(tries);
            if (targetSquare == roundedN || tries.indexOf(target) != -1) {
                console.log('CHANGE PLACES!! targetGranularity: %o, targetSquare: %o, precision: %o, roundedN: %o', targetGranularity, targetSquare, precision, roundedN);
                targetGranularity++;
                precision = Math.pow(10, targetGranularity);
                roundedN = ((n * precision) / precision);
                console.log('111 target: %o, targetSquare: %o, targetGranularity: %o, precision: %o, roundedN: %o', target, targetSquare, targetGranularity, precision, roundedN);
                target = recalculateTarget(target, precision, true);
                //tries = [];
                targetSquare = square(target, precision);


            }
            if (targetSquare > roundedN) {
                console.log('FOO1 %o^2 == %o | precision: %o, roundedN: %o', target, targetSquare, precision, roundedN);
                target = recalculateTarget(target, precision, true);

            } else if (targetSquare < roundedN) {
                console.log('FOO2 %o^2 == %o | precision: %o, roundedN: %o', target, targetSquare, precision, roundedN);
                target = recalculateTarget(target, precision);
            }
            targetSquare = square(target, precision);
            console.log('BAR %o^2 == %o', target, targetSquare);

            tries.push(target);

            console.log('NEW target: %o | targetSquare: %o, roundedN: %o', target, targetSquare, roundedN);
        }
        console.log('LAST: %o | (%o != %o && %o< %o && %o < 1000)', target, targetSquare, n, targetGranularity, placeGranularity, i);

        return target;
    }
};
module.exports = code;
