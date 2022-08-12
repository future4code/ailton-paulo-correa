"use strict";
const exe9 = (text) => {
    let textNoRepeatLetter = "";
    for (const letter of text) {
        if (!textNoRepeatLetter.toLowerCase().includes(letter.toLowerCase())) {
            textNoRepeatLetter += letter;
        }
    }
    let result = 1;
    for (let i = 1; i <= textNoRepeatLetter.length; i++) {
        result *= i;
    }
    return result;
};
console.log(exe9("Paulo"));
//# sourceMappingURL=exe9.js.map