import { Card, CardContent } from "@/components/ui/card"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Badge } from "@/components/ui/badge"
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiLoaderLine,
  RiTimeLine,
} from "@remixicon/react"

const steps = [
  { icon: RiCheckboxCircleLine, label: "Identity verified", meta: "2m ago" },
  { icon: RiCheckboxCircleLine, label: "Bank account linked", meta: "4m ago" },
  { icon: RiLoaderLine, label: "Reviewing documents", meta: "in progress" },
  { icon: RiTimeLine, label: "Activating payouts", meta: "queued" },
  { icon: RiErrorWarningLine, label: "Tax form missing", meta: "action needed" },
]

export function MarkerCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Marker</span>
          <div className="flex flex-col gap-1">
            {steps.map((step) => (
              <Marker key={step.label}>
                <MarkerIcon>
                  <step.icon />
                </MarkerIcon>
                <MarkerContent>{step.label}</MarkerContent>
                <span className="ml-auto text-xs text-muted-foreground">
                  {step.meta}
                </span>
              </Marker>
            ))}
          </div>
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerIcon>
              <RiCheckboxCircleLine />
            </MarkerIcon>
            <MarkerContent>Border variant</MarkerContent>
            <Badge variant="secondary">new</Badge>
          </Marker>
        </div>
      </CardContent>
    </Card>
  )
}
