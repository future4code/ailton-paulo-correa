// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//   1. a. codigo recebe um valor do usuario e testa para saber se o resto é 0, um teste de par ou impar
//      b. todos numeros pares
//      c. todos numeros impares

//   2. a. O codigo recebe do usuario uma fruta e procura em um switch se tem um para definir o valor da fruta
//      b. O preço da fruta Maçã é R$ 2.25
//      c. O preço da fruta Maçã é R$ 5

//   3. a. Recebe do usuario um numero
//      b. para o número 10 imprime "Esse número passou no teste" e também undefined, e para -10 imprime undefined
//      c. na ultima linha será apresentado undefined, pois a variavel foi criada dentro do if e ela não transferiu seu valor para fora dela

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a) b)
const idade = Number(prompt("Qual é a sua idade?"));

// c)
if (idade >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

// EXERCÍCIO 2
const turnoEx2 = prompt(`Em qual turno você estuda?
digite:
M para Matutino
V para Vespertino
N para Noturno`).toUpperCase();
if (turnoEx2.toUpperCase() === "M") {
  console.log("Bom Dia!");
} else if (turnoEx2.toUpperCase() === "V") {
  console.log("Boa Tarde!");
} else if (turnoEx2.toUpperCase() === "N") {
  console.log("Boa Noite!");
} else {
  console.log("Valor inserido está incorreto!");
}

// EXERCÍCIO 3
const turnoEx3 = prompt(`Em qual turno você estuda?
digite:
M para Matutino
V para Vespertino
N para Noturno`);
switch (turnoEx3.toUpperCase()) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  default:
    console.log("Valor inserido está incorreto!");
    break;
}

// EXERCÍCIO 4
const generoFilmeUsuarioEx4 = prompt(
  "Qual o genero do filme que vão assistir?"
);
const valorIngressoEx4 = Number(prompt("Qual é o valor do ingresso?"));
if (generoFilmeUsuarioEx4.toLowerCase() === "fantasia" && valorIngressoEx4 < 15)
  console.log("Bom filme!");
else console.log("Escolha outro filme :(");

// DESAFIO
// 1
const generoFilmeUsuario = prompt("Qual o genero do filme que vão assistir?");
const valorIngresso = Number(prompt("Qual é o valor do ingresso?"));
if (generoFilmeUsuario.toLowerCase() === "fantasia" && valorIngresso < 15) {
  console.log("Bom filme!");
  console.log(`Aproveite o seu ${prompt("Qual lanchinho você vai comprar?")}`);
} else console.log("Escolha outro filme :(");

// 2
const comprador = {
  nomeCompleto: prompt("Qual o é seu nome completo?"),
  tipoJogo: prompt(`Qual tipo de jogo deseja assistir?
    IN indica internacional
    DO indica doméstico`),
  etapaJogo: prompt(`Qual etapa de jogo deseja assistir?
    SF indica semi-final
    DT indica decisão de terceiro lugar
    FI indica Final`),
  categoria: Number(
    prompt(`Qual a categoria?
    Opções: 1, 2, 3 ou 4`)
  ),
  qntIngresso: Number(prompt("Quantos ingressos deseja comprar?")),
  tabela: [
    [1320, 880, 550, 270],
    [660, 440, 330, 170],
    [1980, 1320, 880, 330],
  ],
};
switch (comprador.etapaJogo.toUpperCase()) {
  case "SF":
    if (comprador.categoria >= 1 && comprador.categoria <= 4) {
      comprador.valorUnitario = comprador.tabela[0][comprador.categoria-1]
      comprador.nomeEtapa = "Semi-Final"
    } else {
      console.log("Opção da categoria invalida!");
    }
    break;
  case "DT":
    if (comprador.categoria >= 1 && comprador.categoria <= 4) {
      comprador.valorUnitario = comprador.tabela[1][comprador.categoria-1]
      comprador.nomeEtapa = "Decisão de terceiro lugar"
    } else {
      console.log("Opção da categoria invalida!");
    }
    break;
  case "FI":
    if (comprador.categoria >= 1 && comprador.categoria <= 4) {
      comprador.valorUnitario = comprador.tabela[2][comprador.categoria-1]
      comprador.nomeEtapa = "Final"
    } else {
      console.log("Opção da categoria invalida!");
    }    
    break;
  default:
    console.log("Etapa do jogo não existente!");
    comprador.continuar = false;
    break;
}
comprador.valorTotal = comprador.valorUnitario * comprador.qntIngresso;
const imprimirComprovante = (obj, tipoJogo) => {
  if (tipoJogo === "IN") {
    tipoJogo = "U$";
  } else {
    tipoJogo = "R$";
  }
  console.log(`
---Dados da compra--- 
Nome do cliente:  ${obj.nomeCompleto} 
Tipo do jogo:  ${obj.nomeTipoJogo} 
Etapa do jogo:  ${obj.nomeEtapa} 
Categoria:  ${obj.categoria} 
Quantidade de Ingressos:  ${obj.qntIngresso} ingressos 
---Valores--- 
Valor do ingresso:  ${tipoJogo} ${obj.valorUnitario}
Valor total:  ${tipoJogo} ${obj.valorTotal}
`);
};
switch (comprador.continuar) {
  case false:
    console.log("Compra cancelada!!!");
    break;
  default:
    switch (comprador.tipoJogo.toUpperCase()) {
      case "IN":
        comprador.valorUnitario = comprador.valorUnitario / 4.1;
        comprador.valorTotal = comprador.valorTotal / 4.1;
        comprador.nomeTipoJogo = "Internacional"
        imprimirComprovante(comprador, "IN");
        break;
      case "DO":
        comprador.nomeTipoJogo = "Internacional"
        imprimirComprovante(comprador, "DO");
        break;
      default:
        console.log("Tipo do jogo não existente!");
        console.log("Compra cancelada!!!");
        break;
    }
    break;
}