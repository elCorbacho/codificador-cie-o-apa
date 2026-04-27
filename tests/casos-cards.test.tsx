import { render, screen } from "@testing-library/react";
import { CasosCards } from "../components/cieo/casos-especiales/casos-cards";
import { describe, it, expect } from "vitest";

describe("CasosCards", () => {
  it("should render the component title", () => {
    render(<CasosCards />);
    expect(screen.getByText("Casos especiales")).toBeDefined();
  });
});
