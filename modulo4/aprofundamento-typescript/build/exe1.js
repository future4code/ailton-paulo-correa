"use strict";
let meuNumero = 3;
meuNumero = "2";
var RainbowColor;
(function (RainbowColor) {
    RainbowColor["RED"] = "vermelho";
    RainbowColor["ORANGE"] = "laranja";
    RainbowColor["YELLOW"] = "amarelo";
    RainbowColor["GREEN"] = "verde";
    RainbowColor["BLUE"] = "azul";
    RainbowColor["INDIGO"] = "anil";
    RainbowColor["VIOLET"] = "violeta";
})(RainbowColor || (RainbowColor = {}));
const person1 = {
    name: "Paulo Correa",
    age: 26,
    favoriteColor: RainbowColor.ORANGE,
};
const person2 = {
    name: "Pessoa 2",
    age: 19,
    favoriteColor: RainbowColor.BLUE,
};
const person3 = {
    name: "Pessoa 3",
    age: 30,
    favoriteColor: RainbowColor.GREEN,
};
console.table([person1, person2, person3]);
//# sourceMappingURL=exe1.js.map