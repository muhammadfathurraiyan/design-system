import { ModeToggle } from "@/components/mode-toggle";
import { DesignSystemPreview } from "@/components/preview/design-system-preview";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="relative">
      <Suspense fallback={<Skeleton className="m-3 h-[calc(100svh-1.5rem)]" />}>
        <div className={"flex flex-col gap-3 p-3"}>
          <div className="flex h-10 items-center justify-between">
            <h1 className="font-semibold">Design System</h1>
            <ModeToggle />
          </div>

          <DesignSystemPreview />
        </div>
      </Suspense>
    </section>
  );
}
