"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  RiCalendarLine,
  RiFolderLine,
  RiGithubLine,
  RiTerminalLine,
  RiUserLine,
} from "@remixicon/react"

export function CommandMenuCard() {
  const [open, setOpen] = React.useState(false)

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium">Command</span>
            <Button variant="outline" size="xs" onClick={() => setOpen(true)}>
              Open palette
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <Command>
              <CommandInput placeholder="Type a command…" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <RiCalendarLine />
                    Calendar
                  </CommandItem>
                  <CommandItem>
                    <RiTerminalLine />
                    Terminal
                    <CommandShortcut>⌘T</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <RiUserLine />
                    Profile
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Workspace">
                  <CommandItem>
                    <RiFolderLine />
                    Projects
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <RiGithubLine />
                    Repository
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Press
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            anywhere to search.
          </div>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Search commands…" />
            <CommandList>
              <CommandEmpty>No commands found.</CommandEmpty>
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => setOpen(false)}>
                  Create invoice
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  Invite teammate
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  Export ledger
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </CardContent>
    </Card>
  )
}
