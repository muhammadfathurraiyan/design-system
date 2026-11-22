"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiTranslate2,
} from "@remixicon/react"

const rows = [
  { label: "Invoice total", value: "$1,240.00" },
  { label: "Due date", value: "٢٤ أغسطس ٢٠٢٦" },
  { label: "Status", value: "مدفوع" },
]

export function DirectionCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium">Direction</span>
            <Badge variant="secondary">RTL</Badge>
          </div>
          <DirectionProvider direction="rtl">
            <div dir="rtl" className="flex flex-col gap-3 rounded-lg border p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  <RiTranslate2 className="size-4" />
                  الفاتورة
                </span>
                <Badge>مدفوع</Badge>
              </div>
              <div className="flex flex-col gap-1.5">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 text-sm"
                  >
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="tabular-nums">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <RiArrowRightSLine data-icon="inline-start" />
                  السابق
                </Button>
                <Button size="sm">
                  التالي
                  <RiArrowLeftSLine data-icon="inline-end" />
                </Button>
              </div>
            </div>
          </DirectionProvider>
          <p className="text-xs text-muted-foreground">
            The same markup mirrors when the provider switches direction.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
