// 2. a) e b)
type ArrayNumber = number[];
type returnFunction = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: ArrayNumber): returnFunction {
  const numerosOrdenados: ArrayNumber = numeros.sort((a, b) => a - b);
  let soma: number = 0;
  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: returnFunction = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };
  return estatisticas;
}
console.table(obterEstatisticas([21, 18, 65, 44, 15, 18]));

// 2. c) Poderia me explicar qual o sentido dessa pergunta?
// Na minha cabeça não fez sentido algum :) hehehe
