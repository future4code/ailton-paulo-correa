// EXE - HERANÇA
class User {
  constructor(
    private id: string,
    private email: string,
    private name: string,
    private password: string
  ) {
    console.log("Chamando o construtor da classe User");
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
}
// EXE 1 A) não deverá imprimir o valor diretamente pois o password é privada e não possui uma função de User que imprima ela;
// EXE 1 b) vai ser impresso quantas vezes for ativo o new User

console.log("EXE 1");
const newUser: User = new User("1", "email@email.com", "Paulo", "senha!@#");
console.log("EXE 1", newUser.getEmail());

class Customer extends User {
  public purchaseTotal: number = 0;
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    private creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
console.log("EXE 2");

const newCustomer = new Customer(
  "1",
  "email@email.com",
  "Paulo",
  "senha!@#",
  "2222"
);
console.log("EXE 3", newCustomer.getName());
console.log("EXE 3", newCustomer.getEmail());
console.log("EXE 3", newCustomer.getId());
console.log("EXE 3", newCustomer.getCreditCard());
console.log("EXE 3", newCustomer.purchaseTotal);

// EXE 3 a) não será póssivel, pois também é herdado o private atrelado a elas, sendo assim só é póssivel usa-lá em User

// EXE 4/5
console.log("EXE 4/5", newCustomer.introduceYourself());
