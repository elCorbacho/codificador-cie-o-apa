export function CodeBox() {
  return (
    <div className="bg-surface-container-low rounded-2xl p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">
          Estructura del código — CIE-O-3.1
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {/* Topography prefix */}
        <div className="bg-primary rounded-xl p-4 text-center flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white leading-tight">C</span>
          <span className="text-[10px] text-white/60 mt-1">Prefijo</span>
        </div>

        {/* Topography 2 digits */}
        <div className="bg-primary rounded-xl p-4 text-center flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white leading-tight">XX</span>
          <span className="text-[10px] text-white/60 mt-1">Localización</span>
        </div>

        {/* Decimal separator */}
        <div className="flex items-center justify-center">
          <span className="text-2xl text-outline">.</span>
        </div>

        {/* Sublocation */}
        <div className="bg-primary rounded-xl p-4 text-center flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white leading-tight">X</span>
          <span className="text-[10px] text-white/60 mt-1">Subl.</span>
        </div>

        {/* Plus separator */}
        <div className="flex items-center justify-center col-span-1">
          <span className="text-xl text-outline-variant">+</span>
        </div>

        {/* Histology 4 digits */}
        <div className="bg-secondary rounded-xl p-4 text-center flex flex-col items-center justify-center lg:col-span-2">
          <span className="text-2xl font-bold text-white leading-tight">XXXX</span>
          <span className="text-[10px] text-white/70 mt-1">Tipo histológico</span>
        </div>

        {/* Slash separator */}
        <div className="flex items-center justify-center row-start-2">
          <span className="text-2xl text-outline">/</span>
        </div>

        {/* Behavior */}
        <div className="bg-error rounded-xl p-4 text-center flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white leading-tight">X</span>
          <span className="text-[10px] text-white/70 mt-1">Comp.</span>
        </div>

        {/* Grade */}
        <div className="bg-on-surface rounded-xl p-4 text-center flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white leading-tight">X</span>
          <span className="text-[10px] text-white/70 mt-1">Grado</span>
        </div>
      </div>

      {/* Example */}
      <div className="mt-8 pt-6 border-t border-outline-variant">
        <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-4">
          Ejemplo de código generado
        </p>
        <div className="flex flex-wrap gap-6 items-start">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg px-4 py-2">
              <span className="text-2xl font-bold font-mono text-white">C34.1</span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-on-surface">Lóbulo superior</div>
              <div className="text-xs text-on-surface-variant">pulmón</div>
            </div>
          </div>
          <span className="text-2xl text-outline-variant self-center">+</span>
          <div className="flex items-center gap-3">
            <div className="bg-secondary rounded-lg px-4 py-2">
              <span className="text-2xl font-bold font-mono text-white">8070</span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-on-surface">Carcinoma escamoso</div>
              <div className="text-xs text-on-surface-variant">pobremente diferenciado</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-error rounded-lg px-3 py-2">
              <span className="text-xl font-bold font-mono text-white">/3</span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-on-surface">Maligno</div>
              <div className="text-xs text-on-surface-variant">primario</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-on-surface rounded-lg px-3 py-2">
              <span className="text-xl font-bold font-mono text-white">3</span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-on-surface">Grado 3</div>
              <div className="text-xs text-on-surface-variant">pobre dif.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}