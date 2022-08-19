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
