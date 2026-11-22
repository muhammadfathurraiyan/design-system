"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RiArrowRightSLine, RiArrowUpDownLine } from "@remixicon/react";
import React from "react";

const faqs = [
  {
    id: "fees",
    question: "What does a transfer cost?",
    answer:
      "Domestic transfers are free above $500. Below that a flat $1.20 applies and is itemised on the receipt.",
  },
  {
    id: "timing",
    question: "When do funds settle?",
    answer:
      "Standard transfers settle in two business days. Instant transfers settle within minutes for eligible banks.",
  },
  {
    id: "limits",
    question: "Are there payout limits?",
    answer:
      "The default is $25,000 per day. Raise it from workspace settings after identity verification completes.",
  },
];

export function CollapsibleCard() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Collapsible</CardTitle>
        <CardDescription>Plain disclosure panels.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-[350px] flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">Order #4189</h4>
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8">
                    <RiArrowUpDownLine />
                    <span className="sr-only">Toggle details</span>
                  </Button>
                }
              />
            </div>
            <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium">Shipped</span>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="rounded-md border px-4 py-2 text-sm">
                <p className="font-medium">Shipping address</p>
                <p className="text-muted-foreground">
                  100 Market St, San Francisco
                </p>
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                <p className="font-medium">Items</p>
                <p className="text-muted-foreground">2x Studio Headphones</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  );
}
