"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  {
    id: "statement",
    title: "Statement ready",
    body: "Q3 ledger export is available to download.",
  },
  {
    id: "payout",
    title: "Payout sent",
    body: "$12,400.00 arrived in account ••4821.",
  },
  {
    id: "limit",
    title: "Limit raised",
    body: "Your daily payout cap is now $25,000.",
  },
]

export function CarouselCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Carousel</CardTitle>
        <CardDescription>Drag, swipe, or use the arrows.</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="px-8">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="flex h-50 flex-col justify-end gap-1 rounded-lg bg-muted mx-4 p-4">
                  <span className="text-sm font-medium">{slide.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {slide.body}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </CardContent>
    </Card>
  )
}
