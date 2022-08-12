const exe10 = (cpf: string): boolean => {
  const cpfOnlyNumber: string = cpf.replace("-", ".").split(".").join("");
  let result: number = 0;
  for (let i: number = 0; i < 9; i++) {
    result += Number(cpfOnlyNumber[i]) * (10 - i);
  }
  let firstChecker: number = 11 - (result % 11);
  firstChecker = firstChecker < 10 ? firstChecker : 0;
  if (!(firstChecker === Number(cpfOnlyNumber[9]))) {
    return false;
  }

  result = 0;
  for (let i: number = 0; i < 10; i++) {
    result += Number(cpfOnlyNumber[i]) * (11 - i);
  }
  let secondChecker: number = 11 - (result % 11);
  secondChecker = secondChecker < 10 ? secondChecker : 0;
  if (!(secondChecker === Number(cpfOnlyNumber[10]))) {
    return false;
  }
  return true;
};
console.log(exe10("145.382.206-20"));
