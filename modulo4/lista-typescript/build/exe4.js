"use strict";
var SECTORS;
(function (SECTORS) {
    SECTORS["MARKETING"] = "marketing";
    SECTORS["FINANCIAL"] = "financeiro";
    SECTORS["SALES"] = "vendas";
})(SECTORS || (SECTORS = {}));
const collaborators = [
    { name: "Marcos", salary: 2500, sector: SECTORS.MARKETING, presential: true },
    { name: "Maria", salary: 1500, sector: SECTORS.SALES, presential: false },
    { name: "Salete", salary: 2200, sector: SECTORS.FINANCIAL, presential: true },
    { name: "João", salary: 2800, sector: SECTORS.MARKETING, presential: false },
    { name: "Josué", salary: 5500, sector: SECTORS.FINANCIAL, presential: true },
    { name: "Natalia", salary: 4700, sector: SECTORS.SALES, presential: true },
    { name: "Paola", salary: 3500, sector: SECTORS.MARKETING, presential: true },
];
const exe4 = (list) => {
    return list.filter((item) => {
        if (item.sector === SECTORS.MARKETING && item.presential) {
            return item;
        }
    });
};
console.table(exe4(collaborators));
//# sourceMappingURL=exe4.js.map