const exe9 = (text: string): number => {
  let textNoRepeatLetter: string = "";
  for (const letter of text) {
    if (!textNoRepeatLetter.toLowerCase().includes(letter.toLowerCase())) {
      textNoRepeatLetter += letter;
    }
  }
  let result: number = 1;
  for (let i: number = 1; i <= textNoRepeatLetter.length; i++) {
    result *= i;
  }
  return result;
};
console.log(exe9("Paulo"));
