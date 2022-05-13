// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//   1. a. 10
//         50
//      b. A função iria realizar suas tarefas mas nada seria apresentado no console, pois sem o console.log nada é apresentado nele

//   2. a. a função ira receber um texto e retornar true ou false para caso tenha a palavra cenoura inserida nela
//      b. Ira retornar true para as 3 entradas

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a)
// const sobreMim = () =>
//   console.log(
//     "Eu sou Paulo Henrique, tenho 26 anos, moro em Quatá interior de SP e sou estudante da Labenu!"
//   );
// sobreMim();

// // b)
// const bioUsuario = (nome, idade, cidade, profissao) =>
//   console.log(
//     `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
//   );

// bioUsuario(
//   prompt("Qual é o seu nome?"),
//   Number(prompt("Qual é a sua idade?")),
//   prompt("Onde você mora?"),
//   prompt("Qual é a sua profissão?")
// );

// EXERCÍCIO 2
// a)
// const soma = (num1, num2) => num1 + num2;
// console.log(
//   "a) ",
//   soma(
//     Number(prompt("Informe o primeiro número:")),
//     Number(prompt("Informe o primeiro número:"))
//   )
// );

// // b)
// const funcMaiorIgual = (num1, num2) => num1 >= num2;
// console.log(
//   "b) ",
//   funcMaiorIgual(
//     Number(prompt("Informe o primeiro número:")),
//     Number(prompt("Informe o primeiro número:"))
//   )
// );

// // c)
// const funcParImpar = (num1) => num1 % 2 === 0;
// console.log(
//   "c) ",
//   funcParImpar(
//     Number(prompt("Informe um número para saber se é par ou ímpar:"))
//   )
// );

// d)
// const funcTexto = (texto) => [texto.toUpperCase(), texto.length];
// const textoArray = funcTexto(prompt("Digite uma frase:"));
// console.log(`A frase é "${textoArray[0]}"
// O tamanho da frase é ${textoArray[1]}`);

// EXERCÍCIO 3
// const soma = (num1, num2) => num1 + num2;
// const subtracao = (num1, num2) => num1 - num2;
// const multiplicacao = (num1, num2) => num1 * num2;
// const divisao = (num1, num2) => num1 / num2;

// const num1 = Number(prompt("Informe o primeiro número:"));
// const num2 = Number(prompt("Informe o primeiro número:"));

// console.log(`Números inseridos: ${num1} e ${num2}
// Soma: ${soma(num1, num2)}
// Diferença: ${subtracao(num1, num2)}
// Multiplicação ${multiplicacao(num1, num2)}
// Divisão: ${divisao(num1, num2)}`);

// DESAFIO
// 1.
// a)
// const imprimir = (texto) => console.log(texto);
// imprimir(prompt("Digite algo:"));

// // b)
// const funcChamaFuncao = (valor1, valor2) => imprimir(valor1 + valor2);
// funcChamaFuncao(
//   Number(prompt("Informe o primeiro número:")),
//   Number(prompt("Informe o segundo número:"))
// );

// 2.
const teoremaDePitagoras = (cateto1, cateto2) => {
  const somaCatetos = cateto1 ** 2 + cateto2 ** 2;
  console.log(`A hipotenusa é ${somaCatetos ** 0.5}`);//Nessa parte quem me salvou foi o Daniel e Gabriel Theodoro, eu estava quase usando um Math.sqrt, eles me lembraram que 0,5 equivale a tirar raiz
};
teoremaDePitagoras(
  Number(prompt("Informe o primeiro cateto:")),
  Number(prompt("Informe o segundo cateto:"))
);
