let usuario;
let computador;
const iniciar = () => {
  let repetir = true;
  let valor1;
  let valor2;
  valor1 = comprarCarta();
  valor2 = comprarCarta();
  if (
    valor1.texto.includes("A") === false ||
    valor2.texto.includes("A") === false
  ) {
    repetir = false;
  }
  return {
    cartas: valor1.texto +" "+valor2.texto,
    resultado: valor1.valor + valor2.valor,
    primeiraCarta: valor1.texto,
    repitiu: repetir,
  };
};
let comecar = true;
while (comecar === true) {
  usuario = iniciar();
  computador = iniciar();
  if (usuario.repitiu === false && computador.repitiu === false) {
    comecar = false;
  }
}

if (
  confirm("Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?")
) {
  let continuarComprando = true;

  const comprarNova = (obj) => {
    const valor = comprarCarta();
    return {
      cartas: obj.cartas +" "+ valor.texto,
      resultado: obj.resultado + valor.valor,
      primeiraCarta: obj.primeiraCarta
    };
  };

  const mensagemFinal = () =>
    `Usuário - Cartas: ${usuario.cartas} - pontuação: ${usuario.resultado}\nComputador - Cartas: ${computador.cartas} - pontuação: ${computador.resultado}`;

  while (continuarComprando === true) {
    if (usuario.resultado < 21) {
      if (
        confirm(
          `Usuário - Cartas: ${usuario.cartas}\nComputador - Primeira Carta: ${computador.primeiraCarta}\nDeseja comprar mais cartas?`
        )
      ) {
        usuario = comprarNova(usuario);
      } else {
        continuarComprando = false;
      }
    } else {
      continuarComprando = false;
    }
    if(continuarComprando===false && usuario.resultado<21){
      while(computador.resultado<usuario.resultado){
         computador=comprarNova(computador)
      }
    }    
  }

  if (usuario.resultado > 21) {
    alert(`${mensagemFinal()}\nO computador ganhou!`);
  } else if (computador.resultado > 21) {
    alert(`${mensagemFinal()}\nO usuário ganhou!`);
  } else if (usuario.resultado > computador.resultado) {
    alert(`${mensagemFinal()}\nO usuário ganhou!`);
  } else if (computador.resultado > usuario.resultado) {
    alert(`${mensagemFinal()}\nO computador ganhou!`);
  } else {
    alert(`${mensagemFinal()}\nEmpate!`);
  }
} else {
  alert("O jogo acabou :(");
}
