export type product = {
  id: string;
  name: string;
  price: number;
};

export type receiveProduct = {
  name?: string;
  price?: number;
};


export const products: product[] = [
  {
    id: "1298078656585",
    name: "Produto 1",
    price: 300,
  },
  {
    id: "1211123754667",
    name: "Produto 2",
    price: 555,
  },
  {
    id: "127786788967",
    name: "Produto 3",
    price: 232,
  },
  {
    id: "129887546845",
    name: "Produto 4",
    price: 18,
  },
  {
    id: "121683458867",
    name: "Produto 5",
    price: 99,
  },
  {
    id: "127689678867",
    name: "Produto 6",
    price: 5454,
  },
];
