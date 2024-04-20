import ShoppingCart from "./ShoppingCart";
import { Product } from "../model";
const cart = new ShoppingCart();

describe("add function", () => {
  it("should add the item to the cart list", () => {
    const item: Product = {
      id: 1,
      name: "sneakers",
      price: 10.99,
    };
    const updatedCartList: Product[] = cart.addItem(item);
    expect(updatedCartList).toContain(item);
  });
});
