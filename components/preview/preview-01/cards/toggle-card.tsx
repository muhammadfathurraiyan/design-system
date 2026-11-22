"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"
import {
  RiBold,
  RiItalic,
  RiListCheck,
  RiUnderline,
} from "@remixicon/react"

const tools = [
  { value: "bold", label: "Bold", icon: RiBold },
  { value: "italic", label: "Italic", icon: RiItalic },
  { value: "underline", label: "Underline", icon: RiUnderline },
  { value: "list", label: "Checklist", icon: RiListCheck },
] as const

export function ToggleCard() {
  const [pressed, setPressed] = React.useState<string[]>(["bold"])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Toggle</CardTitle>
        <CardDescription>Independent pressed states.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {tools.map(({ value, label, icon: Icon }) => (
              <Toggle
                key={value}
                variant="outline"
                aria-label={label}
                pressed={pressed.includes(value)}
                onPressedChange={(next) =>
                  setPressed((prev) =>
                    next ? [...prev, value] : prev.filter((v) => v !== value)
                  )
                }
              >
                <Icon />
              </Toggle>
            ))}
          </div>
          <Separator />
          <div className="flex items-center gap-2">
            <Toggle size="sm" variant="outline">
              <RiBold data-icon="inline-start" />
              Small
            </Toggle>
            <Toggle variant="outline" defaultPressed>
              <RiItalic data-icon="inline-start" />
              Default
            </Toggle>
            <Toggle size="lg" variant="outline" disabled>
              <RiUnderline data-icon="inline-start" />
              Disabled
            </Toggle>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
