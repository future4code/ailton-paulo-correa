// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//   1. a)
//        Matheus Nachtergaele
//        Virginia Cavendish
//        Globo, 14h

//   2. a)
//        Juca, 3, SRD
//        Juba, 3, SRD
//        Jubo, 3, SRD
//      b)os ... vai clonar algo, neste caso está clonado um objeto

//    3.a)
//        false
//        undefined
//      b)Primeiro resultado irá imprimir a informação que se encontra em objeto[propriedade] mesma coisa de pessoa["backender"] que o valor armazenado é false, já o segundo resultado irá imprimir undefined pois não existe uma propriedade com o nome "altura".

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a)
const nomeApelidos = {
  nome: "Paulo Henrique",
  apelidos: ["Mankey", "PH", "Paulinho"],
};
const imprimir = (obj) =>
  console.log(
    `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`
  );

imprimir(nomeApelidos);
// b)
const novosApelidos = {
  ...nomeApelidos,
  apelidos: ["Duy", "Correa", "Gordito"],
};
imprimir(novosApelidos);

// EXERCÍCIO 2
// a)
const obj1 = {
  nome: "Carlos",
  idade: 25,
  profissão: "Secretário",
};
const obj2 = {
  nome: "Douglas",
  idade: 25,
  profissão: "Professor",
};
// b)
const func = (obj) => [
  obj.nome,
  obj.nome.length,
  obj.idade,
  obj.profissão,
  obj.profissão.length,
];
console.log(func(obj1));
console.log(func(obj2));

// EXERCÍCIO 3
// a)
const carrinho = [];
// b)
const fruta1 = {
  nome: "Banana",
  disponibilidade: true,
};
const fruta2 = {
  nome: "Goiaba",
  disponibilidade: true,
};
const fruta3 = {
  nome: "Limão",
  disponibilidade: true,
};
// c)
const inserirNoCarrinho = (fruta) => fruta;

carrinho.push(inserirNoCarrinho(fruta1));
carrinho.push(inserirNoCarrinho(fruta2));
carrinho.push(inserirNoCarrinho(fruta3));
// d)
console.log(carrinho);

// DESAFIOS
// 1
const funcDesafio1 = () => {
  const obj = {
    nome: prompt("Qual é o seu nome?"),
    idade: prompt("Qual é a sua idade?"),
    profissao: prompt("Qual é a sua profissão?"),
  };
  console.log(obj);
  console.log(typeof obj);
};

funcDesafio1();

// 2
const funcDesafio2 = (obj1, obj2) => {
  return `O primeiro filme foi lançado antes do segundo? ${
    obj1.anoLancamento < obj2.anoLancamento
  }
  O primeiro filme foi lançado no mesmo ano do segundo? ${
    obj1.anoLancamento === obj2.anoLancamento
  }`;
};
const filme1 = {
  anoLancamento: 2020,
  nome: "The Batman",
};
const filme2 = {
  anoLancamento: 2020,
  nome: "O Projeto Adam",
};

console.log(funcDesafio2(filme1, filme2));

// 3
const funcDesafio3 = (obj) => (obj.disponibilidade = !obj.disponibilidade);
funcDesafio3(fruta1);
