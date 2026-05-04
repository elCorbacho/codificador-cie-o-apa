"use client";

import { useState, useCallback } from "react";

const NAV_ITEMS = [
  { value: "arquitectura", label: "Arquitectura" },
  { value: "entidad-relacion", label: "Entidad-Relación" },
  { value: "reglas", label: "Reglas A-K" },
  { value: "codificador", label: "Codificador" },
  { value: "casos-especiales", label: "Casos especiales" },
];

interface NavContentProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  onNavigate?: () => void;
}

function NavContent({ activeTab, onTabChange, onNavigate }: NavContentProps) {
  return (
    <>
      {/* Logo Header */}
      <div className="p-6 border-b border-outline-variant flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">medical_services</span>
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-primary">CIE-O-3</h1>
          <p className="text-xs text-on-surface-variant font-medium tracking-wide">Oncology Coding</p>
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col py-4">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.value;
          return (
            <button
              key={item.value}
              onClick={() => {
                onTabChange(item.value);
                onNavigate?.();
              }}
              className={`
                w-full text-left px-5 py-4 text-sm font-medium transition-all duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset
                ${isActive
                  ? "bg-primary/10 text-primary border-r-4 border-primary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* User Profile Footer */}
      <div className="p-6 border-t border-outline-variant mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-on-surface">Dr. E. Thorne</span>
            <span className="text-xs text-on-surface-variant">Lead Coder</span>
          </div>
        </div>
      </div>
    </>
  );
}

interface SideNavBarProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export function SideNavBar({ activeTab, onTabChange }: SideNavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleNavigate = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-surface-container-lowest rounded-lg border border-hairline"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <nav
        className={`
          md:hidden fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <NavContent activeTab={activeTab} onTabChange={onTabChange} onNavigate={handleNavigate} />
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block w-64 shrink-0 border-r border-outline-variant bg-surface-container-low" aria-label="Navegación principal">
        <NavContent activeTab={activeTab} onTabChange={onTabChange} />
      </nav>
    </>
  );
}
