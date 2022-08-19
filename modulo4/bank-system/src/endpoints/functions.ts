import { accounts } from "../data/mock";

export const checkAge = (currentYear: string, birthdate: string): boolean => {
  const currentY = new Date(currentYear);
  const birth = new Date(birthdate);
  let userAge = Math.abs(currentY.getFullYear() - birth.getFullYear());

  if (
    currentY.getMonth() < birth.getMonth() ||
    (currentY.getMonth() === birth.getMonth() &&
      currentY.getDate() < birth.getDate())
  )
    userAge--;

  if (userAge < 18) return false;
  return true;
};

export const checkDate = (birth: string): boolean => {
  const month30Days = [4, 6, 9, 11];
  const month31Days = [1, 3, 5, 7, 8, 10, 12];
  const arrayDate: string[] = birth.split("/") || birth.split("-");
  const leapYear =
    Number(arrayDate[2]) % 400 === 0 ||
    (Number(arrayDate[2]) % 4 === 0 && Number(arrayDate[2]) % 100 !== 0);

  if (month30Days.includes(Number(arrayDate[0])) && Number(arrayDate[1]) > 30)
    return false;

  if (month31Days.includes(Number(arrayDate[0])) && Number(arrayDate[1]) > 31)
    return false;

  if (Number(arrayDate[0]) === 2 && Number(arrayDate[1]) > 29 && leapYear)
    return false;

  if (Number(arrayDate[0]) === 2 && Number(arrayDate[1]) > 28 && !leapYear)
    return false;

  return true;
};

export const checkCPF = (cpf: string): boolean => {
  const cpfNum: string = cpf.replace("-", ".").split(".").join("");
  if (cpfNum.length !== 11 || !cpfNum.split(cpfNum[0]).join("").length)
    return false;

  let result: number = 0;
  for (let i: number = 0; i < 9; i++) result += Number(cpfNum[i]) * (10 - i);
  let check: number = 11 - (result % 11);
  check = check < 10 ? check : 0;
  if (!(check === Number(cpfNum[9]))) return false;

  result = 0;
  for (let i: number = 0; i < 10; i++) result += Number(cpfNum[i]) * (11 - i);
  check = 11 - (result % 11);
  check = check < 10 ? check : 0;
  if (!(check === Number(cpfNum[10]))) return false;

  return true;
};

export const checkTypeString = (requestCheck: string[]): boolean => {
  for (const checking of requestCheck)
    if (typeof checking !== "string") return false;
  return true;
};

export const checkExistCPF = (cpf: string): boolean => {
  const checking = accounts.find(
    (item) =>
      item.cpf.replace("-", ".").split(".").join("") ===
      cpf.replace("-", ".").split(".").join("")
  );
  return !checking;
};
