"use strict";
const monthsList = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
];
const exe1 = (name, date) => {
    const arrayDate = date.split("/");
    return `Olá me chamo ${name}, nasci no dia ${arrayDate[0]} do mês de ${monthsList[Number(arrayDate[1]) - 1]} do ano de ${arrayDate[2]}`;
};
console.log(exe1("Paulo Correa", "11/10/1995"));
//# sourceMappingURL=exe1.js.map