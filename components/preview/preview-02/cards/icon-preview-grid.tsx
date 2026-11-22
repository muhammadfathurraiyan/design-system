"use client"

import {
  RiFileCopyLine,
  RiErrorWarningLine,
  RiDeleteBinLine,
  RiShareLine,
  RiShoppingBagLine,
  RiMoreLine,
  RiLoaderLine,
  RiAddLine,
  RiSubtractLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCheckLine,
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiSearchLine,
  RiSettingsLine,
} from "@remixicon/react"

import { Card, CardContent } from "@/components/ui/card"

const PREVIEW_ICONS = [
  RiFileCopyLine,
  RiErrorWarningLine,
  RiDeleteBinLine,
  RiShareLine,
  RiShoppingBagLine,
  RiMoreLine,
  RiLoaderLine,
  RiAddLine,
  RiSubtractLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCheckLine,
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiSearchLine,
  RiSettingsLine,
]

export function IconPreviewGrid() {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-8 place-items-center gap-4">
          {PREVIEW_ICONS.map((Icon, index) => (
            <div
              key={index}
              className="flex size-8 items-center justify-center rounded-md ring ring-border *:[svg]:size-4"
            >
              <Icon />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
