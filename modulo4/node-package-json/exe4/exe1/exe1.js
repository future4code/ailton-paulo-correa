const exe1B = () => {
  if (process.argv.length === 4) {
    console.log(
      `\u001b[34m Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`
    );
  } else {
    console.log("\u001b[31m É necessario enviar 2 valores por parâmetro.");
  }
};

exe1B();

const exe1C = () => {
  if (process.argv.length === 4) {
    console.log(
      `\u001b[34m Olá, ${process.argv[2]}! Você tem ${
        process.argv[3]
      } anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`
    );
  } else {
    console.log("\u001b[31m É necessario enviar 2 valores por parâmetro.");
  }
};

exe1C();
