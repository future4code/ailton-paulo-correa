// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//   1. a.
// nome: "Amanda Rangel", apelido: "Mandi" 0 array completo
// nome: "Laís Petra", apelido: "Laura" 1 array completo
// nome: "Letícia Chijo", apelido: "Chijo" 2 array completo

//   2. a.
// Amanda Rangel
// Laís Petra
// Letícia Chijo

//   3. a.
// nome: "Amanda Rangel", apelido: "Mandi"
// nome: "Laís Petra", apelido: "Laura"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
// a.
const nomesPets = pets.map((pets) => {
  return pets.nome;
});
console.log(nomesPets);

// b.
const cachorrosSalsicha = pets.filter((pets) => {
  return pets.raca === "Salsicha";
});
console.log(cachorrosSalsicha);

// c.
const descontoParaPoodles = pets
  .filter((pets) => {
    return pets.raca === "Poodle";
  })
  .map((pets) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`;
  });
console.log(descontoParaPoodles);

// EXERCÍCIO 2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];
// a.
const nomesProdutos = produtos.map((produtos) => {
  return produtos.nome;
});
console.log(nomesProdutos);

// b.
const produtosComDesconto = produtos.map((produtos) => {
  return {
    nome: produtos.nome,
    preco: parseFloat(produtos.preco * 0.95),
  };
});
console.log(produtosComDesconto);

// c.
const Bebidas = produtos.filter((produtos) => {
  return produtos.categoria === "Bebidas";
});
console.log(Bebidas);

// d.
const temYpe = produtos.filter((produtos) => {
  return produtos.nome.includes("Ypê");
});
console.log(temYpe);

// e.
const temYpeFrase = produtos
  .filter((produtos) => {
    return produtos.nome.includes("Ypê");
  })
  .map((produtos) => {
    return `Compre ${produtos.nome} por ${produtos.preco}`;
  });
console.log(temYpeFrase);

// DESAFIO
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a.
const pkmOrdenados = pokemons
  .map((pokes) => {
    return pokes.nome;
  })
  .sort();

console.log(pkmOrdenados);

// b.
const arr = [];
const tipos = pokemons
  .map((pokes) => {
    if (arr.includes(pokes.tipo) === false) {
      arr.push(pokes.tipo);
    }
    return arr;
  })
  .pop();

console.log(tipos);

// const arr =[]
// const tipos = pokemons.map((pokes) => {
//       arr.push(pokes.tipo)
//     return [... new Set(arr)];
//   }).pop()

// console.log(tipos);
