import { Card, CardContent } from "@/components/ui/card"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiLoaderLine,
  RiTerminalLine,
} from "@remixicon/react"

export function TraceCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Trace</span>
          <Trace>
            <TraceLine status="running">
              <TraceIcon>
                <RiLoaderLine />
              </TraceIcon>
              <TraceTitle>Fetching settlement report</TraceTitle>
              <TraceDescription>1.2s</TraceDescription>
            </TraceLine>
            <TraceLine>
              <TraceIcon>
                <RiCheckboxCircleLine />
              </TraceIcon>
              <TraceTitle>Normalized 480 rows</TraceTitle>
              <TraceDescription>84ms</TraceDescription>
            </TraceLine>
            <TraceLine status="pending">
              <TraceIcon>
                <RiTerminalLine />
              </TraceIcon>
              <TraceTitle>Reconcile against ledger</TraceTitle>
              <TraceDescription>queued</TraceDescription>
            </TraceLine>
            <TraceLine status="error">
              <TraceIcon>
                <RiErrorWarningLine />
              </TraceIcon>
              <TraceTitle>Webhook signature mismatch</TraceTitle>
              <TraceDescription>failed</TraceDescription>
            </TraceLine>
          </Trace>
          <TraceCollapsible>
            <TraceCollapsibleTrigger>
              <TraceLine>
                <TraceIcon>
                  <RiCheckboxCircleLine />
                </TraceIcon>
                <TraceTitle>Batch summary</TraceTitle>
                <TraceDescription>4 steps</TraceDescription>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent>
              <div className="flex flex-col gap-1 pb-2 pl-7 text-xs text-muted-foreground">
                <span>Started 09:40:12</span>
                <span>Finished 09:40:14</span>
                <span>0 retries · 1 warning</span>
              </div>
            </TraceCollapsibleContent>
          </TraceCollapsible>
        </div>
      </CardContent>
    </Card>
  )
}
