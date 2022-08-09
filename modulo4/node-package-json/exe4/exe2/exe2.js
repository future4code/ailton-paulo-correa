const exe2 = () => {
  if (process.argv.length === 5) {
    const op = process.argv[2];
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);
    let sum;
    if (op === "add") {
      sum = num1 + num2;
    } else if (op === "sub") {
      sum = num1 - num2;
    } else if (op === "mult") {
      sum = num1 * num2;
    } else if (op === "div") {
      sum = num1 / num2;
    } else {
      sum = "Operação não encontrada!";
    }
    console.log(`\u001b[34m Resposta: ${sum}`);
  } else {
    console.log("\u001b[31m É necessario enviar 3 valores por parâmetro.");
  }
};

exe2();
