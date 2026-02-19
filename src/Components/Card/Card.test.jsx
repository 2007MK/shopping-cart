import { beforeEach, describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("Display everything", () => {
    render(<Card title={"xyz"} price={"99"} img={"#"} />);

    expect(screen.getByText("xyz")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i }),
    ).toBeInTheDocument();
  });
});
