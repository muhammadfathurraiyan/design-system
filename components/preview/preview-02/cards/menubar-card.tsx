"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCard() {
  const [sort, setSort] = React.useState("date")
  const [showArchived, setShowArchived] = React.useState(false)

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Menubar</span>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New invoice
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Import ledger
                  <MenubarShortcut>⌘I</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Export</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>CSV</MenubarItem>
                    <MenubarItem>PDF</MenubarItem>
                    <MenubarItem>JSON</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Close workspace</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value={sort} onValueChange={setSort}>
                  <MenubarLabel>Sort by</MenubarLabel>
                  <MenubarRadioItem value="date">Date</MenubarRadioItem>
                  <MenubarRadioItem value="amount">Amount</MenubarRadioItem>
                  <MenubarRadioItem value="name">Name</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarCheckboxItem
                  checked={showArchived}
                  onCheckedChange={(checked) => setShowArchived(!!checked)}
                >
                  Show archived
                </MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>Documentation</MenubarItem>
                  <MenubarItem>Keyboard shortcuts</MenubarItem>
                  <MenubarItem>Contact support</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <p className="text-xs text-muted-foreground">
            Sorting by <span className="text-foreground">{sort}</span>
            {showArchived ? ", archived included" : ""}.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
