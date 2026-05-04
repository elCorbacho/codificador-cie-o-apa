"use client";

import { useState } from "react";
import { SideNavBar } from "./side-nav-bar";
import { AppTabs } from "./app-tabs";

interface AppShellProps {
  activeTab?: string;
}

export function AppShell({ activeTab: initialTab }: AppShellProps) {
  const [activeTab, setActiveTab] = useState(initialTab ?? "arquitectura");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top App Bar */}
      <header className="h-14 shrink-0 border-b border-outline-variant bg-surface-container-lowest flex items-center px-4 gap-6" aria-label="Barra de navegación principal">
        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <span className="font-heading text-base font-semibold tracking-tight text-on-surface">
            CIE-O-3
          </span>
          <span className="font-code text-[10px] text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">
            3.1
          </span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-outline-variant" />

        {/* Label */}
        <span className="text-sm text-on-surface-variant">
          Codificador anatomopatológico
        </span>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search Input */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar códigos o términos..."
            aria-label="Buscar códigos o términos"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="h-11 pl-10 pr-4 rounded-lg bg-surface-container text-sm text-on-surface placeholder:text-on-surface-variant border border-hairline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors w-64"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            className="p-3 rounded-lg hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-xl text-on-surface-variant">notifications</span>
          </button>
          <button
            className="p-3 rounded-lg hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            aria-label="Settings"
          >
            <span className="material-symbols-outlined text-xl text-on-surface-variant">settings</span>
          </button>
        </div>
      </header>

      {/* Body with SideNav + Content */}
      <div className="flex flex-1 overflow-hidden">
        <SideNavBar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <AppTabs activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
}
