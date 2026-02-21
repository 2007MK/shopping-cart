import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import { MemoryRouter } from "react-router";

describe("Card", () => {
  it("Display everything", () => {
    const product = { id: 1, title: "xyz", price: 99, image: "#" };
    render(
      <MemoryRouter>
        <Card
          product={product}
          addToCart={() => {}}
          removeFromCart={() => {}}
        />
        ,
      </MemoryRouter>,
    );

    expect(screen.getByText("xyz")).toBeInTheDocument();
    expect(screen.getByText("99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i }),
    ).toBeInTheDocument();
  });

  it("Call the add to cart function properly", async () => {
    const user = userEvent.setup();
    const mockAddToCart = vi.fn();
    const product = { id: 1, title: "xyz", price: 99, img: "#" };

    render(
      <MemoryRouter>
        <Card product={product} addToCart={mockAddToCart} />
      </MemoryRouter>,
    );

    const addToCartBtn = screen.getByRole("button", { name: /add to cart/i });
    await user.click(addToCartBtn);

    expect(mockAddToCart).toHaveBeenCalled();
  });

  it.todo("The add to cart button changes to a counter", () => {});
});
