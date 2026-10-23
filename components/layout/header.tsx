import { Activity } from "lucide-react";

export function Header() {
  return (
    <header className="workspace-header">
      <div className="workspace-brand">
        <span className="workspace-logo" aria-hidden="true"><Activity size={24} /></span>
        <div>
          <h1 className="font-heading">CIE-O-3 <span className="text-muted text-sm font-semibold">Codificador clínico</span></h1>
          <p className="workspace-description">
            Clasificación Internacional de Enfermedades para Oncología — Tercera Edición, Primera Revisión. Sistema de codificación anatomopatológica.
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <p className="mb-2 text-xs text-muted">OMS · IARC · Min. Sanidad España 2021</p>
        <span className="workspace-version">CIE-O-3.1 · Versión normativa</span>
      </div>
    </header>
  );
}
