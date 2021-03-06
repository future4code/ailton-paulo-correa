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
    maiorNumero: 0,
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
function retornaNPrimeirosPares(n) {
  let array = [];
  n--;
  let numero = 0;
  while (n >= 0) {
    if (numero % 2 === 0) {
      array.push(numero);
      n--;
    }
    numero++;
  }
  return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array);
  return [arrayOrdenado[arrayOrdenado.length - 2], arrayOrdenado[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return { ...pessoa, nome: "ANÔNIMO" };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let arrayPermitidos = [];
  for (const valor of pessoas) {
    if (valor.altura >= 1.5 && valor.idade > 14 && valor.idade < 60) {
      arrayPermitidos.push(valor);
    }
  }
  return arrayPermitidos;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arrayNaoPermitidos = [];
  for (const valor of pessoas) {
    if (valor.altura < 1.5 || valor.idade <= 14 || valor.idade >= 60) {
      arrayNaoPermitidos.push(valor);
    }
  }
  return arrayNaoPermitidos;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let indice = 0; indice < contas.length; indice++) {
    for (let i = contas[indice].compras.length - 1; i >= 0; i--) {
      contas[indice].saldoTotal -= contas[indice].compras.pop();
    }
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let arrayNomes = consultas
    .map((item) => {
      return item.nome;
    })
    .sort();
  let arrayOrdenado = [];
  for (let i = 0; i < arrayNomes.length; i++) {
    for (const valor of consultas) {
      if (valor.nome === arrayNomes[i]) {
        arrayOrdenado.push(valor);
      }
    }
  }
  return arrayOrdenado;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let arrayDataSemBarra = [];
  for (const valor of consultas) {
    arrayDataSemBarra.push(valor.dataDaConsulta.split("/"));
  }
  let arrayTeste = [];
  for (const valor of arrayDataSemBarra) {
    arrayTeste.push(`${valor[2]}-${valor[1]}-${valor[0]}`);
  }
  for (let i = 0; i < consultas.length; i++) {
    consultas[i].dataSemBarra = arrayTeste[i];
  }
  const arr = arrayTeste.sort();
  let arrayOrdenado = [];
  for (let i = 0; i < arr.length; i++) {
    for (const valor of consultas) {
      if (valor.dataSemBarra === arr[i]) {
        arrayOrdenado.push({nome: valor.nome, dataDaConsulta: valor.dataDaConsulta})
      }
    }
  }  
  return arrayOrdenado;
}
