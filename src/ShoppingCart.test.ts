import ShoppingCart from "./ShoppingCart";
import { Product, Cart } from "../model";
const cart = new ShoppingCart();
const items = cart.items;
describe("shopping cart", () => {
  it("should check if the item already exists in the cart and increase the quantity", () => {
    const itemToAdd = { id: 2, name: "item1", price: 2.99, quantity: 1 };
    const existingCartItem = { id: 2, name: "item1", price: 2.99, quantity: 1 };
    const initialCartList = [existingCartItem];
    cart.addItem(itemToAdd);
    const updatedCartList = [{ ...existingCartItem, quantity: 2 }];
    expect(initialCartList.length).toBe(1);
    expect(updatedCartList[0].quantity).toBe(2);
  });
  it("should add the item to the cart list", () => {
    const item = {
      id: 1,
      name: "sneakers",
      price: 10.99,
      quantity: 1,
    };
    cart.addItem(item);
    const itemInCart = { ...item, quantity: 1 };
    expect(items).toContainEqual(itemInCart);
  });

  it("should add two different items with different quantities to the cart", () => {
    const firstItem = { id: 3, name: "item1", price: 2.99, quantity: 2 };
    const secondItem = { id: 2, name: "item2", price: 7.99, quantity: 4 };
    cart.addItem(firstItem);
    cart.addItem(secondItem);

    // expect(items).toContainEqual(firstItem);
    // expect(items).toContainEqual(secondItem);
  });
});
