import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { AppTabs } from "@/components/layout/app-tabs";
import { Header } from "@/components/layout/header";
import { CieoSelect } from "@/components/ui/cieo-select";
import { Button } from "@/components/ui/button";

afterEach(cleanup);

test("keeps all clinical sections and the original default in a vertical desktop rail", () => {
  render(<AppTabs />);
  const list = screen.getByRole("tablist", { name: "Secciones del codificador" });
  expect(list.getAttribute("aria-orientation")).toBe("vertical");
  expect(screen.getAllByRole("tab")).toHaveLength(5);
  expect(screen.getByRole("tab", { name: "Arquitectura" }).getAttribute("aria-selected")).toBe("true");
  fireEvent.mouseDown(screen.getByRole("tab", { name: /^Codificador$/ }), { button: 0, ctrlKey: false });
  expect(screen.getByRole("heading", { name: "Codificador paso a paso" })).toBeDefined();
  expect(screen.getByRole("button", { name: "Reiniciar codificación" })).toBeDefined();
});

test("retains clinical identity and provenance in the compact header", () => {
  render(<Header />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("CIE-O-3");
  expect(screen.getByText(/OMS · IARC/)).toBeDefined();
  expect(screen.getByText("CIE-O-3.1 · Versión normativa")).toBeDefined();
  expect(screen.getByRole("banner").classList.contains("workspace-header")).toBe(true);
});

test("shared selectors retain accessible labels, selected values and disabled behavior", () => {
  render(<CieoSelect ariaLabel="Prueba clínica" value="C18" options={[{ value: "C18", label: "Colon" }]} placeholder="Seleccionar" disabled onValueChange={() => { throw new Error("disabled selector changed"); }} />);
  const control = screen.getByRole("combobox", { name: "Prueba clínica" });
  expect(control.hasAttribute("disabled")).toBe(true);
  expect(control.textContent).toContain("Colon");
});

test("primary buttons use the action color while preserving click and disabled semantics", () => {
  let clicks = 0;
  const { rerender } = render(<Button onClick={() => clicks++}>Confirmar</Button>);
  const button = screen.getByRole("button", { name: "Confirmar" });
  expect(button.classList.contains("bg-primary")).toBe(true);
  fireEvent.click(button);
  expect(clicks).toBe(1);
  rerender(<Button disabled onClick={() => clicks++}>Confirmar</Button>);
  fireEvent.click(button);
  expect(clicks).toBe(1);
});
