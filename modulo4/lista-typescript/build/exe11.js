"use strict";
const aux = [
    { letter: "M", value: 1000 },
    { letter: "CM", value: 900 },
    { letter: "D", value: 500 },
    { letter: "CD", value: 400 },
    { letter: "C", value: 100 },
    { letter: "XC", value: 90 },
    { letter: "L", value: 50 },
    { letter: "XL", value: 40 },
    { letter: "X", value: 10 },
    { letter: "IX", value: 9 },
    { letter: "V", value: 5 },
    { letter: "IV", value: 4 },
    { letter: "I", value: 1 },
];
const exe11 = (num) => {
    let romanNumerals = "";
    let auxNum = num;
    for (const item of aux) {
        while (auxNum >= item.value) {
            romanNumerals += item.letter;
            console.log(auxNum);
            auxNum -= item.value;
        }
    }
    return romanNumerals;
};
console.log(exe11(9003));
//# sourceMappingURL=exe11.js.map