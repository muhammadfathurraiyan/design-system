"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RiCalendarLine, RiSettings3Line } from "@remixicon/react"

export function PopoverCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popover</CardTitle>
        <CardDescription>Anchored panels with a title and body.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel>Destination</FieldLabel>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                <RiSettings3Line data-icon="inline-start" />
                Filters
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <PopoverHeader>
                  <PopoverTitle>Filter transactions</PopoverTitle>
                  <PopoverDescription>
                    Narrow the ledger to a category or period.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="flex flex-col gap-3">
                  <Field>
                    <FieldLabel htmlFor="popover-category">
                      Category
                    </FieldLabel>
                    <Input
                      id="popover-category"
                      placeholder="Dividends"
                      defaultValue="Dividends"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="popover-period">Period</FieldLabel>
                    <Input
                      id="popover-period"
                      placeholder="Last 30 days"
                      defaultValue="Last 30 days"
                    />
                  </Field>
                </div>
              </PopoverContent>
            </Popover>
          </Field>
          <Field>
            <FieldLabel>Scheduled</FieldLabel>
            <Popover>
              <PopoverTrigger render={<Button variant="secondary" />}>
                <RiCalendarLine data-icon="inline-start" />
                Aug 24, 2026
              </PopoverTrigger>
              <PopoverContent align="center" className="w-60">
                <PopoverHeader>
                  <PopoverTitle>Next payout</PopoverTitle>
                  <PopoverDescription>
                    Funds settle two business days after the batch closes.
                  </PopoverDescription>
                </PopoverHeader>
                <Button size="sm" className="w-full">
                  Reschedule
                </Button>
              </PopoverContent>
            </Popover>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
