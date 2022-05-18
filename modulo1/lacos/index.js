// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//   1. É uma repetição que vai rodar até o valor de i virar 5, e o resultado que será impresso é 10

//   2. a)
// 19
// 21
// 23
// 25
// 27
// 30

// b) tirar o if e colocar o console.log direto no for
// ou se deseja ver o indice dos valores impressos basta trocar o console.log por console.log(lista.indexOf(numero))

//   3.
// *
// **
// ***
// ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// const qntBixinhos = +prompt("Quantos bixinhos de extimação você tem?");
// const arr = [];
// if (qntBixinhos === 0) {
//   console.log("Que pena! Você pode adotar um pet!");
// } else {
//   for (let i = 0; i < qntBixinhos; i++) {
//     arr.push(prompt(`Qual o nome do seu ${i + 1}º pet?`));
//   }
// }
//console.log(arr);

// EXERCÍCIOS 2
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// const func1 = (arr) => {
//   for (const valor of arr) {
//     console.log(valor);
//   }
// };
// const func2 = (arr) => {
//   for (const valor of arr) {
//     console.log(valor / 10);
//   }
// };
// let novoArrayPar = [];
// const func3 = (arr) => {
//   for (const valor of arr) {
//     if (valor % 2 === 0) {
//       novoArrayPar.push(valor);
//     }
//   }
//   console.log(novoArrayPar);
// };
// let novoArrayString = [];
// const func4 = (arr) => {
//   for (const valor of arr) {
//     novoArrayString.push(
//       `O elemento do índex ${arr.indexOf(valor)} é: ${valor}`
//     );
//   }
//   for (const valor of novoArrayString) {
//     console.log(valor);
//   }
// };

// let maiorNumero = 0;
// let menorNumero = 999;
// for (const valor of arrayOriginal) {
//   if (maiorNumero < valor) {
//     maiorNumero = valor;
//   }
//   if (menorNumero > valor) {
//     menorNumero = valor;
//   }
// }
// func1(arrayOriginal);
// func2(arrayOriginal);
// func3(arrayOriginal);
// func4(arrayOriginal);
// console.log(
//   `O maior número é ${maiorNumero} e o menor número é ${menorNumero}`
// );

// DESAFIO
// 1
// const numeroJogador1 = +prompt("Jogador 1 informe um número:");
// let chuteJogador2 = -1;
// let tentativas = 1;
// while (chuteJogador2 !== numeroJogador1) {
//   chuteJogador2 = +prompt("Jogador 2 chute um número:");
//   console.log(`O número chutado foi: ${chuteJogador2}`);
//   if (chuteJogador2 > numeroJogador1) {
//     console.log("Errou. O número escolhido é menor!");
//   } else if (chuteJogador2 < numeroJogador1) {
//     console.log("Errou. O número escolhido é maior!");
//   } else {
//     console.log("Acertou!!");
//     console.log(`O número de tentativas foi: ${tentativas}`);
//   }
//   tentativas++;
// }

// 2
2.
const numeroAleatorio = parseInt((Math.random()* 100)+1);
let chuteJogador2 = -1;
let tentativas = 1;
while (chuteJogador2 !== numeroAleatorio) {
  chuteJogador2 = +prompt("Jogador 2 chute um número:");
  console.log(`O número chutado foi: ${chuteJogador2}`);
  if (chuteJogador2 > numeroAleatorio) {
    console.log("Errou. O número escolhido é menor!");
  } else if (chuteJogador2 < numeroAleatorio) {
    console.log("Errou. O número escolhido é maior!");
  } else {
    console.log("Acertou!!");
    console.log(`O número de tentativas foi: ${tentativas}`);
  }
  tentativas++;
}
// Não tive muito dificuldade pois apenas troquei o valor inserido pelo usuario por um comando Math.random que automatiza uma geração aleatoria, acredito que essa seria a forma mais facil de se fazer.













