// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//   1. a. false
//      b. false
//      c. false
//      d. boolean

//   2. Não será feita uma operação matemática de números, mas sim irá juntar os valores informados pelo usuário.
//      Exemplo: se o usuário informar 10 e depois 28, no console ira retornar 1028

//    3.
//      let primeiroNumero = Number(prompt("Digite um numero!"))
//      let segundoNumero = Number(prompt("Digite outro numero!"))

//      const soma = primeiroNumero + segundoNumero

//      console.log(soma)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

// let idade = Number(prompt("Quantos anos você tem?"))
// let idadeMelhorAmigo = Number(prompt("Quantos anos tem seu melhor amigo ou da sua melhor amiga?"))

// console.log("Sua idade é maior do que a do seu amigo?", idade > idadeMelhorAmigo)
// console.log("A diferença entre a idade dos 2 é de", idade - idadeMelhorAmigo, "anos.")

// EXERCÍCIO 2

// let numeroPar = Number(prompt("Informe um número par:"))
// console.log("Resto da divisão é",numeroPar % 2)
// Todas as sobras ficam entre 0 e 1, isso permite identificar qual número é par ou ímpar.
// Número par sempre vai retornar 0 como resto da divisão por 2, e número ímpar sempre vai retornar 1 como resto da divisão por 2.

// EXERCÍCIO 3

// let idadeAno = Number(prompt("Qual é a sua idade?"))
// let idadeMeses = idadeAno * 12
// let idadeDias = idadeAno * 365
// let idadeEmHoras = idadeDias * 24

// console.log("Você tem",idadeMeses,"meses de vida.")
// console.log("Você tem",idadeDias,"dias de vida.")
// console.log("Você tem",idadeEmHoras,"horas de vida.")

// EXERCÍCIO 4

// let num1 = Number(prompt("Informe o primeiro número:"))
// let num2 = Number(prompt("Informe o segundo número:"))

// console.log("O primeiro número é maior que o segundo?",num1>num2)
// console.log("O primeiro número é igual ao segundo?",num1===num2)
// console.log("O primeiro número é divisível pelo segundo?", (num1 % num2) === 0)
// console.log("O segundo número é divisível pelo primeiro?", (num2 % num1) === 0)

// Desafio

// 1.
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// const grausF = 77
// const kelvin = (grausF-32)*(5/9)+273.15
// console.log("A conversão de 77ºF para Kelvin é",kelvin,"K")

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// const grausC = 80
// const grausF = grausC*(9/5)+32
// console.log("A conversão de 80ºC para Fahrenheit é",grausF,"ºF")

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// const grausC = 30
// const grausF = grausC*(9/5)+32
// const kelvin = (grausF-32)*(5/9)+273.15
// console.log("A conversão de 30ºC para Fahrenheit é",grausF,"ºF e para Kelvin é",kelvin,"K")

//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
// const grausC = Number(prompt("Informe quantos graus Celsius você deseja converter para Fahrenheit e Kelvin:"))
// const grausF = grausC*(9/5)+32
// const kelvin = (grausF-32)*(5/9)+273.15
// console.log("A conversão de ",grausC,"ºC para Fahrenheit é",grausF,"ºF e para Kelvin é",kelvin,"K")

// 2.
// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// const kWh = 0.05
// const consumoTotal = 280 * kWh
// console.log("Consumo total dessa residência é de 280 kWh no valor de R$",consumoTotal)

// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
// const kWh = 0.05
// const consumoTotal = 280 * kWh
// let desconto = Number(prompt("Informe a porcentagem de desconto:"))
// let cobranca = consumoTotal - ((consumoTotal*desconto)/100)
// console.log("Consumo total dessa residência é de 280 kWh no valor de R$",cobranca)

// 3. 
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
let libras = 20// let libras = Number(prompt("Informe um valor de libras(lb) para converter para quilogramas(kg):"))
console.log(libras,"lb equivale a",libras / 2.20462,"kg")

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
let onca = 10.5//let onca = Number(prompt("Informe um valor de onças(oz) para converter para quilogramas(kg):"))
console.log(onca,"oz equivale a",onca / 35.274,"kg")

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
let milha = 100//let milha = Number(prompt("Informe um valor de milhas(mi) para converter para metros(m):"))
console.log(milha,"mi equivale a",milha * 1609.34,"m")

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
let pes = 50//let pes = Number(prompt("Informe um valor de pés(ft) para converter para metros(m):"))
console.log(pes,"ft equivale a",pes / 3.28084,"m")

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
let galao = 103.56//let galao = Number(prompt("Informe um valor de galão(gal) para converter para litros(l):"))
console.log(galao,"gal equivale a",galao * 3.78541,"l")//estou usando medida de galão americano, não tenho certeza se era essa medida

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//let xicara = 450
//console.log(xicara,"xic equivale a",xicara / 3.51951,"l")//estou usando medida de xícara imperial

//g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
let xicara = Number(prompt("Informe um valor de xícaras(xic) para converter para litros(l):"))
console.log(xicara,"xic equivale a",xicara / 3.51951,"l")