// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt("Informe a altura do retângulo:"));
  const larguraRetangulo = Number(prompt("Informe a largura do retângulo:"));
  console.log(larguraRetangulo * alturaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual?"));
  const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"));
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Qual é o seu nome?");
  const idadeUsuario = prompt("Qual é a sua idade?");
  const emailUsuario = prompt("Qual é o seu email?");
  console.log(
    `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas = [
    prompt("Qual é a sua primeira cor favorita?"),
    prompt("Qual é a sua segunda cor favorita?"),
    prompt("Qual é a sua terceira cor favorita?"),
  ];
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimoDoArray = array[array.length - 1];
  array[array.length - 1] = array[0];
  array[0] = ultimoDoArray;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual?"));
  const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"));
  const anoEmissaoIdentidade = Number(
    prompt("Qual o ano de emissão de sua carteira de identidade?")
  );
  const idadeUsuario = anoAtual - anoNascimento;
  const tempoIdentidade = anoAtual - anoEmissaoIdentidade;
  if (idadeUsuario <= 20 && tempoIdentidade >= 5) {
    console.log(true);
  } else {
    if (idadeUsuario > 20 && idadeUsuario <= 50 && tempoIdentidade >= 10) {
      console.log(true);
    } else {
      if (idadeUsuario > 50 && tempoIdentidade >= 15) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 4 == 0 && (!(ano % 100 == 0) || ano % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos?");
  const medioCompleto = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt(
    "Você possui disponibilidade exclusiva durante o horário do curso?"
  );
  if (
    maiorDeIdade.toUpperCase() == "SIM" &&
    medioCompleto.toUpperCase() == "SIM" &&
    disponibilidade.toUpperCase() == "SIM"
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}
