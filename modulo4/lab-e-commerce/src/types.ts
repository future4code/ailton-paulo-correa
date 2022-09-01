export type user = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export type product = {
  id?: string;
  name: string;
  price: number;
  imageUrl: string;
};

export type purchase = {
  id: string;
  quantity: number;
  totalPrice: number;
  userId: string;
  productId: string;
};
