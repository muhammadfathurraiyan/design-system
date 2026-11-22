"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Toaster, createToastManager } from "@/components/ui/toast"
import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiErrorWarningLine,
  RiInformationLine,
} from "@remixicon/react"

export function ToastCard() {
  const [manager] = React.useState(() => createToastManager())

  const notify = (type: string, title: string, description: string) =>
    manager.add({ type, title, description, timeout: 4000 })

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Toast</span>
            <span className="text-sm text-muted-foreground">
              Notifications stack from the bottom of the window.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                notify("success", "Transfer sent", "$1,240.00 to ••4821.")
              }
            >
              <RiCheckboxCircleLine data-icon="inline-start" />
              Success
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                notify("info", "Sync running", "Pulling 34 transactions.")
              }
            >
              <RiInformationLine data-icon="inline-start" />
              Info
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                notify("warning", "Payout delayed", "Settlement moved to Monday.")
              }
            >
              <RiErrorWarningLine data-icon="inline-start" />
              Warning
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                notify("error", "Payment failed", "Card was declined.")
              }
            >
              <RiCloseCircleLine data-icon="inline-start" />
              Error
            </Button>
          </div>
        </div>
        <Toaster toastManager={manager} />
      </CardContent>
    </Card>
  )
}
