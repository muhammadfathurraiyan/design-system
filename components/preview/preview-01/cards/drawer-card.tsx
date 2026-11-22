"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { RiArrowUpLine } from "@remixicon/react"

export function DrawerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Drawer</CardTitle>
        <CardDescription>Swipeable panels from the bottom edge.</CardDescription>
      </CardHeader>
      <CardContent>
        <Drawer showSwipeHandle>
          <DrawerTrigger render={<Button variant="outline" />}>
            <RiArrowUpLine data-icon="inline-start" />
            Open drawer
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Move funds</DrawerTitle>
              <DrawerDescription>
                Pick a destination account and confirm the amount.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-1 flex-col gap-3 overflow-auto px-4 py-2 text-sm">
              {[
                { name: "Operating account", meta: "••4821 · $12,480.20" },
                { name: "Reserve account", meta: "••9014 · $84,120.00" },
                { name: "Taxes", meta: "••7730 · $6,240.80" },
              ].map((account) => (
                <div
                  key={account.name}
                  className="flex items-center justify-between gap-3 rounded-lg border p-3"
                >
                  <span className="font-medium">{account.name}</span>
                  <span className="text-muted-foreground">{account.meta}</span>
                </div>
              ))}
            </div>
            <DrawerFooter>
              <Button>Continue</Button>
              <DrawerClose render={<Button variant="outline" />}>
                Cancel
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  )
}
