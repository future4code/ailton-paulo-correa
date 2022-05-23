// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido = [];
  for (let index = array.length - 1; index >= 0; index--) {
    arrayInvertido.push(array[index]);
  }
  return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayOrdenado = [];
  let arrayDescartavel = [...array];
  let segura;
  let soma = 0;
  for (const valor of array) {
    soma += valor;
  }
  while (array.length > arrayOrdenado.length) {
    segura = { numero: soma, index: 0 };
    for (let i = 0; i < arrayDescartavel.length; i++) {
      if (segura.numero > arrayDescartavel[i]) {
        segura.numero = arrayDescartavel[i];
        segura.index = i;
      }
    }
    arrayDescartavel.splice(segura.index, 1);
    arrayOrdenado.push(segura.numero);
  }
  return arrayOrdenado;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPar = [];
  for (const valor of array) {
    if (valor % 2 === 0) {
      arrayPar.push(valor);
    }
  }
  return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayPar = [];
  for (const valor of array) {
    if (valor % 2 === 0) {
      arrayPar.push(valor ** 2);
    }
  }
  return arrayPar;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (const valor of array) {
    if (maior < valor) {
      maior = valor;
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objeto = {
    maiorNumero: 0
  };
  if (num1 > num2) {
    objeto.maiorNumero = num1;
    objeto.maiorDivisivelPorMenor = num1 % num2 === 0;
    objeto.diferenca = num1 - num2;
  } else {
    objeto.maiorNumero = num2;
    objeto.maiorDivisivelPorMenor = num2 % num1 === 0;
    objeto.diferenca = num2 - num1;
  }
  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
