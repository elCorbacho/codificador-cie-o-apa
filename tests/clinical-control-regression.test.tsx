import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import { CodificadorWizard } from "@/components/cieo/codificador/codificador-wizard";
import { useWizardStore } from "@/store/use-wizard-store";

afterEach(() => {
  cleanup();
  useWizardStore.getState().resetAll();
  vi.unstubAllGlobals();
});

test("clinical controls preserve coding, rejected interactions and reset", async () => {
  vi.stubGlobal("PointerEvent", MouseEvent);
  HTMLElement.prototype.hasPointerCapture = () => false;
  HTMLElement.prototype.setPointerCapture = () => {};
  HTMLElement.prototype.releasePointerCapture = () => {};
  HTMLElement.prototype.scrollIntoView = () => {};
  const state = () => JSON.parse(JSON.stringify(useWizardStore.getState()));
  const choose = async (label: RegExp, option: RegExp) => {
    fireEvent.keyDown(screen.getByRole("combobox", { name: label }), { key: "Enter" });
    fireEvent.click(await screen.findByRole("option", { name: option }));
  };

  for (const flow of ["colon", "lymphoma", "benign"]) {
    useWizardStore.getState().resetAll();
    render(<CodificadorWizard />);
    const initial = state();
    for (const control of screen.getAllByRole("combobox").slice(1)) {
      expect(control.hasAttribute("disabled")).toBe(true);
      fireEvent.click(control);
      fireEvent.keyDown(control, { key: "Enter" });
    }
    expect(state()).toEqual(initial);
    expect(screen.queryByRole("listbox")).toBeNull();

    await choose(/Seleccionar contexto/, flow === "lymphoma" ? /Laboratorio de Anatomía/ : /Registro de cáncer/);
    await choose(/Seleccionar sistema/, flow === "lymphoma" ? /^Ganglios linfáticos/ : /^Colon y recto$/);
    await choose(/Seleccionar sitio/, flow === "lymphoma" ? /^C77.0 —/ : /^C18.0 —/);
    await choose(/Seleccionar grupo/, flow === "lymphoma" ? /^Linfomas$/ : /^Adenocarcinomas$/);
    await choose(/Seleccionar tipo histológico/, flow === "lymphoma" ? /^9680 —/ : /^8140 —/);
    fireEvent.keyDown(screen.getByRole("combobox", { name: /Seleccionar comportamiento/ }), { key: "Enter" });
    const beforeCancel = state();
    if (flow !== "lymphoma") {
      expect(screen.queryByRole("option", { name: /^\/6 —/ })).toBeNull();
      expect(screen.queryByRole("option", { name: /^\/9 —/ })).toBeNull();
    }
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "Escape" });
    expect(state()).toEqual(beforeCancel);
    await choose(/Seleccionar comportamiento/, flow === "benign" ? /^\/0 —/ : /^\/3 —/);
    if (flow === "benign") {
      const before = state();
      const grade = screen.getByRole("combobox", { name: /Seleccionar grado/ });
      expect(grade.hasAttribute("disabled")).toBe(true);
      fireEvent.keyDown(grade, { key: "Enter" });
      expect(state()).toEqual(before);
    } else {
      await choose(/Seleccionar grado/, flow === "lymphoma" ? /^6 — Célula B/ : /^2 — Grado II/);
      const code = flow === "lymphoma" ? "C77.0 + 9680/36" : "C18.0 + 8140/32";
      expect(useWizardStore.getState().completeCode).toBe(code);
      expect(document.querySelector(".result-panel-code")?.textContent).toBe(code);
    }
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar codificación" }));
    expect(state()).toEqual(initial);
    cleanup();
  }
});
