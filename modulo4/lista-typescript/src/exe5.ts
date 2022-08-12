type clientType = { name: string; email: string; role: string };

const clients: clientType[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const exe5 = (list: clientType[]): string[] => {
  const listAdmin: string[] = list
    .filter((item) => {
      if (item.role === "admin") {
        return item.email;
      }
    })
    .map((item) => {
      return item.email;
    });
  return listAdmin;
};
console.table(exe5(clients));
