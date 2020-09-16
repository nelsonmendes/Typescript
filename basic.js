"use strict";
function add(n1, n2, showResult, resultPhrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    return n1 + n2;
}
var printResult = true;
var resultPhrase = "The result is: ";
add(1, 2, printResult, resultPhrase);
