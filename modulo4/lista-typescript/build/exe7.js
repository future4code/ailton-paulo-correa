"use strict";
const stock = [
    { name: "MacMugffin", quantity: 37, valueUnitary: 51.04 },
    { name: "Vassoura voadora", quantity: 56, valueUnitary: 210.0 },
    { name: "Laço da verdade", quantity: 32, valueUnitary: 571.5 },
    { name: "O precioso", quantity: 1, valueUnitary: 9181.923 },
    { name: "Caneta de 250 cores", quantity: 123, valueUnitary: 17 },
    { name: "Plumbus", quantity: 13, valueUnitary: 140.44 },
    { name: "Pokebola", quantity: 200, valueUnitary: 99.9915 },
];
const ajustPrice = (price) => {
    const valueAjust = price.toFixed(2).replace(".", ",");
    return "R$ " + valueAjust;
};
const exe7 = (list) => {
    const arrayList = list
        .map((item) => {
        return Object.assign(Object.assign({}, item), { valueUnitary: ajustPrice(Number(item.valueUnitary)) });
    })
        .sort((a, b) => { return a.quantity - b.quantity; });
    return arrayList;
};
console.table(exe7(stock));
//# sourceMappingURL=exe7.js.map