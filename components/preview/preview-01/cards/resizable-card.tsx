import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resizable</CardTitle>
        <CardDescription>Drag the divider to resize panes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 h-50">
          <ResizablePanelGroup
            orientation="horizontal"
            className="rounded-lg border"
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="25%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Two</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="75%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Three</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </CardContent>
    </Card>
  );
}
