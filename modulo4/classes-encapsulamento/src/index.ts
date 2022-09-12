class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    // constructor inicializa os valores/objeto que é criado pela class
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  public print(): void {
    console.log(`Cliente ${this.name}, ${this.age} anos, CPF é ${this.cpf}`);
    console.log(this.balance);
    console.table(this.transactions);
  }
  public setTransaction(data: Transaction): void {
    this.transactions.push(data);
  }
}

const newClient: UserAccount = new UserAccount("cpf", "paulo", 26); // assim chamamos para usar a class
newClient.print(); // assim usamos a variavel criada com os valores da class

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

// EXE 2
const newTransaction: Transaction = new Transaction(
  new Date().toISOString().slice(0, 10),
  100,
  "description"
);
newClient.setTransaction(newTransaction);
newClient.print();

// EXE 3
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}

const newClient2: UserAccount = new UserAccount("cpf2", "user2", 33);
const bankAccounts: Bank = new Bank([newClient, newClient2]);
console.log(bankAccounts);
