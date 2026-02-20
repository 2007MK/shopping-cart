import { describe, it, expect } from "vitest";
import { addItem, removeItem } from "./cartUtils.jsx";

describe("add Item", () => {
  it("should add a new item ", () => {
    const cart = [];
    const item = { id: 1, name: "Product A", price: 10 };
    const updatedCart = addItem(cart, item);
    expect(updatedCart).toEqual([{ id: 1, name: "Product A", price: 10 }]);
  });
});

describe("remove Item", () => {
  it("should remove an item", () => {
    const cart = [{ id: 1, name: "Product A", price: 10 }];
    const item = { id: 1, name: "Product A", price: 10 };
    const updatedCart = removeItem(cart, item);
    expect(updatedCart).toEqual([]);
  });
});
