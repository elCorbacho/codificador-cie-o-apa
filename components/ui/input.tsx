import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-[12px] border border-hairline bg-transparent px-4 py-2 text-[14px] leading-[1.5] shadow-none transition-[color,background-color,border-color,box-shadow] outline-none selection:bg-ink selection:text-canvas placeholder:text-muted disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ink focus-visible:ring-[2px] focus-visible:ring-[color-mix(in_oklab,var(--color-ink),transparent_78%)]",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
