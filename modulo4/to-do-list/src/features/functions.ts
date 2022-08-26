export const checkEmail = (email: string) => {
  const regex = /\W/;
  let check: string | string[] = email.replace("@", "-!");

  check = check.replace(".", "-!");
  check = check.split("-!");
  check[0] = check[0].replace("_", "");
  
  if (!check[0] || !check[1] || !check[2]) return true;
  if (check.length !== 3) return true;
  
  check = check.join("");
  console.log(check);

  return regex.test(check);
};
