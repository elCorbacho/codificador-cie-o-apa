"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type CieoSelectOption = {
  value: string;
  label: string;
};

interface CieoSelectProps {
  value?: string;
  options: CieoSelectOption[];
  placeholder: string;
  disabled?: boolean;
  onValueChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function CieoSelect({
  value,
  options,
  placeholder,
  disabled,
  onValueChange,
  className,
  ariaLabel,
}: CieoSelectProps) {
  return (
    <Select.Root value={value} onValueChange={onValueChange} disabled={disabled}>
      <Select.Trigger
        aria-label={ariaLabel}
        className={cn(
          "flex min-h-11 w-full min-w-0 items-center justify-between gap-2 rounded-lg border border-border-strong bg-surface-strong px-3 py-2 text-left text-[14px] font-semibold text-ink outline-none transition-colors data-[placeholder]:text-muted disabled:cursor-not-allowed disabled:opacity-45 [&>span:first-child]:min-w-0 [&>span:first-child]:whitespace-normal [&>span:first-child]:break-words",
          "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent",
          className
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 text-muted" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="z-50 max-h-[min(300px,var(--radix-select-content-available-height))] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-border-strong bg-surface-soft shadow-lg"
        >
          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "flex cursor-pointer items-center rounded-md px-3 py-2.5 text-sm outline-none transition-colors",
                  "break-words data-[highlighted]:bg-surface-strong data-[highlighted]:text-accent"
                )}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className="ml-auto">
                  <Check className="h-4 w-4 text-lila" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
