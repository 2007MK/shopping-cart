import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";

describe("Nav Display", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Nav></Nav>
      </MemoryRouter>,
    );
  });

  it("Display 3 nav links", () => {
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("Displays the Hamburger Menu", () => {
    expect(
      screen.getByRole("button", { name: /toggle navigation/i }),
    ).toBeInTheDocument();
  });
});

describe("Nav Routing", () => {
  it.todo("routes the corresponding pages", {});
});
