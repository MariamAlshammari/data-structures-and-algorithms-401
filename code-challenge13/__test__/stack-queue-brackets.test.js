"use strict";

const validateBrackets = require('../stack-queue-brackets');

describe('Stack', () => {
it('representing the brackets in the string are balanced and return true', () => {
    let string = "()[[]]";
    let string2='{}{Code}[Fellows](())';

    expect(validateBrackets(string)).toBe(true);
    expect(validateBrackets(string2)).toBe(true);

});
it('representing the brackets in the string are unbalanced and return false', () => {
    let string = "[({}]";
    let string2='{(})';

    expect(validateBrackets(string)).toBe(false);
    expect(validateBrackets(string2)).toBe(false);

});



})
