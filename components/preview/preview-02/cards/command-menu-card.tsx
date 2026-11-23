"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
} from "@/components/ui/command";
import {
  RiCalendarLine,
  RiFolderLine,
  RiGithubLine,
  RiTerminalLine,
  RiUserLine,
} from "@remixicon/react";

export function CommandMenuCard() {
  const [open, setOpen] = React.useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Command</CardTitle>
        <CardDescription>
          Command menu for search and quick actions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Command className="max-w-sm rounded-lg border">
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

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="w-fit"
          >
            Open Menu
          </Button>

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
        </div>
      </CardContent>
    </Card>
  );
}
