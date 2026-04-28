import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden radius-pill border border-transparent px-3 py-1 text-[12px] font-heading font-medium whitespace-nowrap transition-[color,background-color,border-color] focus-visible:ring-[2px] focus-visible:ring-[color-mix(in_oklab,var(--color-ink),transparent_65%)] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-ink text-canvas [a&]:hover:opacity-85",
        secondary:
          "bg-surface-soft text-ink [a&]:hover:opacity-85",
        destructive:
          "bg-[var(--color-error)] text-white focus-visible:ring-[color-mix(in_oklab,var(--color-error),transparent_70%)] [a&]:hover:opacity-90",
        outline:
          "border border-hairline text-ink bg-transparent [a&]:hover:bg-surface-soft",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
