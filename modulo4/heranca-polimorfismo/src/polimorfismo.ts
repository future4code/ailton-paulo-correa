// EXE - Polimorfismo
export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  calculateBill(): number;
}

const obj: Client = {
  name: "name",
  registrationNumber: 1111,
  consumedEnergy: 2222,
  calculateBill(): number {
    return 2;
  },
};

console.log(obj.name);
console.log(obj.registrationNumber);
console.log(obj.consumedEnergy);
console.log(obj.calculateBill());

export abstract class Place {
  constructor(protected cep: string) {}
  public getCep(): string {
    return this.cep;
  }
}
export class Residence extends Place {
  constructor(private dwellersQuantity: number, cep: string) {
    super(cep);
  }

  public getDwellersQuantity(): number {
    return this.dwellersQuantity;
  }
}

export class Commerce extends Place {
  constructor(private floorsQuantity: number, cep: string) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(private machinesQuantity: number, cep: string) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

const residence: Residence = new Residence(3, "cep");
const commerce: Commerce = new Commerce(33, "cepcep");
const industry: Industry = new Industry(33, "cepcep");
console.log(residence);
console.log(commerce);
console.log(industry);

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

const residential: ResidentialClient = new ResidentialClient(
  "paulo",
  1111,
  2222,
  "cpf",
  4,
  "cep"
);
console.log("residential", residential.calculateBill());

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}
const commercial: CommercialClient = new CommercialClient(
  "paulo",
  1111,
  2222,
  "cnpj",
  43,
  "cep"
);
console.log("commercial", commercial.calculateBill());

class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string,
    getMachinesQuantity: number,
    cep: string
  ) {
    super(getMachinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100;
  }
}

const industrial: IndustrialClient = new IndustrialClient(
  "paulo",
  111,
  222,
  "123",
  industry.getMachinesQuantity(),
  "cep"
);
console.log("industrial", industrial.calculateBill());
