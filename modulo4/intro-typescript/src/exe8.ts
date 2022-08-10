function reverseText(text: string): string {
  let reverse: string = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }
  return reverse;
}
console.log(reverseText("asdfghjklç"));
