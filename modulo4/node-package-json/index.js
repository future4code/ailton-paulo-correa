"use strict";
// 1. a) process.argv[x]
// 1. b)
const exe1B = () => {
  if (process.argv.length === 4) {
    console.log(
      `\u001b[34m Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`
    );
  } else {
    console.log("\u001b[31m É necessario enviar 2 valores por parâmetro.");
  }
};

// exe1B()

// 1. c)
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

// exe1C()

// 2. )

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
      sum = "\u001b[31m Operação não encontrada!";
    }
    console.log(`\u001b[34m Resposta: ${sum}`);
  } else {
    console.log("\u001b[31m É necessario enviar 3 valores por parâmetro.");
  }
};

// exe2()

// 3. )
const exe3 = () => {
    if (process.argv.length >= 3) {
        let taskList = [{ Tarefas: "Lavar a louça" }];
        for (let i = 2; i < process.argv.length; i++) {
          taskList.push({ Tarefas: process.argv[i] });
        }
        console.table(taskList);
      } else {
        console.log("\u001b[31m É necessario enviar um valor por parâmetro.");
      }
};

// exe3()