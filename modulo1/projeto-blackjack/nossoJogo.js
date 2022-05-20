console.log("Boas vindas ao jogo de Blackjack!");
if (confirm("Quer iniciar uma nova rodada?")) {
  const iniciar = () => {
    const valor1 = comprarCarta();
    const valor2 = comprarCarta();
    return {
      cartas: valor1.texto + valor2.texto,
      resultado: valor1.valor + valor2.valor,
    };
  };
  let usuario = iniciar();
  let computador = iniciar();
  console.log(
    `Usuário - Cartas: ${usuario.cartas} - pontuação: ${usuario.resultado}`
  );
  console.log(
    `Computador - Cartas: ${computador.cartas} - pontuação: ${computador.resultado}`
  );
  if (usuario.resultado > 21 && computador.resultado > 21) {
    console.log("Os perderam, ambos fizeram mais de 21 pontos!");
  } else if (usuario.resultado > 21) {
    console.log("O computador ganhou!");
  } else if (computador > 21) {
    console.log("O usuário ganhou!");
  } else if (usuario.resultado > computador.resultado) {
    console.log("O usuário ganhou!");
  } else if (computador.resultado > usuario.resultado) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }
} else {
  console.log("O jogo acabou :(");
}