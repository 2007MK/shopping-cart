import { beforeEach, describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import Cardsgrid from "./Cardsgrid";
import { MemoryRouter } from "react-router";

describe("Cardsgrid display", () => {
  it("renders a card for each product", () => {
    const products = [
      { id: 1, title: "A", img: "#", price: "699" },
      { id: 2, title: "B", img: "#", price: "799" },
    ];

    render(<Cardsgrid products={products} />);

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("renders nothing when the products are empty", () => {
    const products = [];
    render(<Cardsgrid products={products} />);

    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });
});
