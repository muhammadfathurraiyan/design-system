"use client";

import { cn } from "cn";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Preview02 } from "./preview-02";
import { Preview01 } from "./preview-01";

const PREVIEW_ITEMS = [
  { label: "01", value: "preview-01" },
  { label: "02", value: "preview-02" },
] as const;

type PreviewValue = (typeof PREVIEW_ITEMS)[number]["value"];

export function DesignSystemPreview({ className }: { className?: string }) {
  const [active, setActive] = useState<PreviewValue>("preview-01");

  return (
    <div
      className={cn("ring-foreground/10 relative rounded-2xl ring", className)}
    >
      {active === "preview-01" ? <Preview01 /> : <Preview02 />}

      <div className="bg-card/90 absolute right-3 bottom-3 z-20 flex items-center gap-0.5 rounded-lg border p-1 shadow-xl backdrop-blur-xl">
        {PREVIEW_ITEMS.map((item) => (
          <Button
            key={item.value}
            variant="ghost"
            size="sm"
            data-active={active === item.value}
            aria-label={`Preview ${item.label}`}
            className="text-muted-foreground hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground h-7 min-w-8 px-2.5 text-xs font-medium transition-colors"
            onClick={() => setActive(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
