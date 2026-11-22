import { ModeToggle } from "@/components/mode-toggle";
import { DesignSystemPreview } from "@/components/preview/design-system-preview";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RiQuillPenLine } from "@remixicon/react";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="relative">
      <Suspense fallback={<Skeleton className="m-3 h-[calc(100svh-1.5rem)]" />}>
        <div className={"flex flex-col gap-3 p-3"}>
          <div className="flex h-10 items-center justify-between">
            <div className="border-border bg-background dark:border-input dark:bg-input/30 rounded-md border px-1.5 py-1.5 shadow-xs">
              <h1 className="text-sm font-semibold uppercase">
                <span className="bg-accent text-accent-foreground rounded px-1.5 py-0.5">
                  Design
                </span>{" "}
                System
              </h1>
            </div>
            <ModeToggle />
          </div>

          <DesignSystemPreview className="ring-foreground/10 w-full overflow-clip rounded-2xl ring" />
        </div>
      </Suspense>
    </section>
  );
}
