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

exe3();
