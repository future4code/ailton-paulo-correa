// 1. a)
// const minhaString:string = 3
// neste caso não será aceito um número pelo fato de ter sido definido que é do tipo string, sendo assim só poderia colocar um número dentro de string, exemplo: "3"

// 1. b)
let meuNumero: number | string = 3;
meuNumero = "2";

// 1. c) e d)
enum RainbowColor {
  RED = "vermelho",
  ORANGE = "laranja",
  YELLOW = "amarelo",
  GREEN = "verde",
  BLUE = "azul",
  INDIGO = "anil",
  VIOLET = "violeta",
}
type typePerson = { name: string; age: number; favoriteColor: string };

const person1: typePerson = {
  name: "Paulo Correa",
  age: 26,
  favoriteColor: RainbowColor.ORANGE,
};

const person2: typePerson = {
  name: "Pessoa 2",
  age: 19,
  favoriteColor: RainbowColor.BLUE,
};

const person3: typePerson = {
  name: "Pessoa 3",
  age: 30,
  favoriteColor: RainbowColor.GREEN,
};

console.table([person1, person2, person3]);
