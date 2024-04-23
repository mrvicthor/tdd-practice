export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export interface Cart extends Product {}
