import { Cart, Product } from "../model";

export default class ShoppingCart {
  constructor() {}
  items: Cart[] = [];
  addItem(item: Product) {
    const index = this.items.findIndex((order) => order.id === item.id);
    if (index !== -1) {
      this.items[index].quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }
  getItems() {
    return this.items;
  }
}
