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
          "flex w-full items-center justify-between rounded-lg border border-hairline bg-surface-soft px-4 py-3 text-[14px] text-ink outline-none transition-colors data-[placeholder]:text-muted disabled:cursor-not-allowed disabled:opacity-45",
          "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
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
          className="z-50 max-h-[300px] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-hairline bg-canvas shadow-none"
        >
          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "flex cursor-pointer items-center rounded-md px-3 py-2.5 text-sm outline-none transition-colors",
                  "data-[highlighted]:bg-[color-mix(in_oklab,var(--color-lila),white_88%)] data-[highlighted]:text-ink"
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
