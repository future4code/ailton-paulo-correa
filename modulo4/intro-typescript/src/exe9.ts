function exe9(
  age: number,
  school: string,
  hours: number,
  period: string
): boolean {
  if (
    age > 18 &&
    (school.toLowerCase() === "sim" || school.toLowerCase() === "s") &&
    ((period.toLowerCase() === "integral" && hours >= 40) ||
      (period.toLowerCase() === "noturno" && hours >= 20))
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(exe9(20, "sim", 30, "integral"));
