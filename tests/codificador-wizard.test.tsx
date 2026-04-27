import { render, screen } from "@testing-library/react";
import { CodificadorWizard } from "../components/cieo/codificador/codificador-wizard";
import { describe, it, expect } from "vitest";

describe("CodificadorWizard", () => {
  it("should render the component title", () => {
    render(<CodificadorWizard />);
    expect(screen.getByText("Codificador paso a paso")).toBeDefined();
  });
});
