import { Product } from "../model";

export default class ShoppingCart {
  constructor() {}
  cartList: Product[] = [];
  addItem(item: Product): Product[] {
    this.cartList.push(item);
    return this.cartList;
  }
}
