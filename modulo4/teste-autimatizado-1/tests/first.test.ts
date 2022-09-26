const num = 112;
const str = "bananinha";
const numStr = "50";

const isEven = (num: number): boolean => {
  const result = num % 2 === 0;
  console.log("Exercício 0 = ", result);
  return result;
};

const isStringUpper = (str: string): string => {
  const result = str.toUpperCase();
  console.log("Exercício 1 = ", result);
  return result;
};

const isArray = (str: string): string[] => {
  const result = str.split("");
  console.log("Exercício 2 = ", result);
  return result;
};

const isNumber = (str: string): number => {
  const result = Number(str);
  console.log("Exercício 3 = ", result);
  return result;
};

describe("Teste Automatizado 1 - Jest", () => {
  test(`Exercício 0`, () => {
    const result = isEven(num);
    expect(result);
  });

  test(`Exercício 1`, () => {
    const result = isStringUpper(str);
    expect(typeof result === "string").toBe(true);
  });

  test(`Exercício 2`, () => {
    const result = isArray(str);
    expect(typeof result === "object").toBe(true);
  });

  test(`Exercício 3`, () => {
    const result = isNumber(numStr);
    expect(!isNaN(result)).toBe(true);
  });
});
