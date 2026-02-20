import { describe, it, expect, expectTypeOf } from "vitest";
import {
  addItem,
  removeItem,
  getQuantityOfItem,
  getTotalItems,
} from "./cartUtils.jsx";

describe("add Item", () => {
  it("should add a new item ", () => {
    const cart = [];
    const item = { id: 1, name: "Product A", price: 10 };
    const updatedCart = addItem(cart, item);
    expect(updatedCart).toEqual([
      { id: 1, name: "Product A", price: 10, quantity: 1 },
    ]);
  });

  it("if an item already exists it's quantity increases", () => {
    const cart = [{ id: 1, name: "Product A", price: 10, quantity: 1 }];
    const item = { id: 1, name: "Product A", price: 10 };

    const updatedCart = addItem(cart, item);
    expect(updatedCart).toEqual([
      { id: 1, name: "Product A", price: 10, quantity: 2 },
    ]);
  });
});

describe("remove Item", () => {
  it("If quantity becomes 0, remove the item from the cart", () => {
    const cart = [{ id: 1, name: "Product A", price: 10, quantity: 1 }];
    const item = { id: 1, name: "Product A", price: 10 };
    const updatedCart = removeItem(cart, item);
    expect(updatedCart).toEqual([]);
  });
});

describe("quantity", () => {
  it("gives proper quantity of an item in the cart", () => {
    const item = { id: 1, name: "Product A", price: 10 };
    const item2 = { id: 25, name: "Product B", price: 10 };
    const cart = [{ id: 1, name: "Product A", price: 10, quantity: 5 }];
    expect(getQuantityOfItem(cart, item)).toBe(5);
    expect(getQuantityOfItem(cart, item2)).toBe(0);
  });

  it("gives the total number of items in the cart (Adding all the quantities)", () => {
    const cart = [
      { id: 1, name: "Product A", price: 10, quantity: 5 },
      { id: 2, name: "Product B", price: 10, quantity: 5 },
      { id: 3, name: "Product C", price: 10, quantity: 5 },
      { id: 4, name: "Product D", price: 10, quantity: 5 },
      { id: 5, name: "Product E", price: 10, quantity: 5 },
    ];

    expect(getTotalItems(cart)).toBe(25);
  });
});
