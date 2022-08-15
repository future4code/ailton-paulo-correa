"use strict";
function exe6(num1, num2) {
    const sum = num1 + num2;
    console.log(`A) A soma desses números é ${sum}`);
    const sub = num1 - num2;
    console.log(`B) A subtração desses números é ${sub}`);
    const mult = num1 * num2;
    console.log(`C) A multiplicação desses números é ${mult}`);
    if (num1 > num2) {
        console.log(`D) O maior número é ${num1}`);
    }
    else if (num1 < num2) {
        console.log(`D) O maior número é ${num2}`);
    }
    else {
        console.log(`D) Os números são iguais`);
    }
}
exe6(3, 56);
//# sourceMappingURL=exe6.js.map