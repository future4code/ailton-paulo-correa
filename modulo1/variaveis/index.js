// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//  1. No console será impresso o valor numérico 10 e em sequência os valores numéricos 10 5
//  2. No console será impresso os valores numéricos 10 10 10
/* 
    3. Sugiro as trocas como mostrado abaixo:
        let cargaHoraria = prompt("Quantas horas você trabalha por dia?")
        let valorPorDia = prompt ("Quanto você recebe por dia?")
        alert("Você recebe $", valorPorDia / cargaHoraria ,"por hora.")

    Ficaria assim a troca das variáveis padronizando com camelCase.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

let nome, idade
console.log(typeof nome , typeof idade)
// Até aqui me foi retornado undefined para as duas variáveis pelo fato de não ter atribuido valor algum para elas.
nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome , typeof idade)
// Ao executar a linha anterior no console foi retornado string para as duas variáveis, isso pelo fato de que o prompt retorna qualquer coisa que recebe como string.
console.log("Olá",nome,", Você tem",idade,"anos.")


// // EXERCÍCIO 2

let receba = prompt("Você gosta de animes?")
console.log("Você gosta de animes?",receba)
receba = prompt("Você está feliz?")
console.log("Você está feliz?", receba)
receba = prompt("Você está com muita dificuldade?")
console.log("Você está com muita dificuldade?", receba)


// EXERCÍCIO 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10