import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { RiPlayCircleLine } from "@remixicon/react"

export function AspectRatioCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aspect Ratio</CardTitle>
        <CardDescription>Fixed ratio media and covers.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1200&auto=format&fit=crop"
              alt="Abstract gradient cover"
              width={1200}
              height={675}
              unoptimized
              className="size-full object-cover"
            />
          </AspectRatio>
          <div className="flex gap-3 items-center">
            <AspectRatio
              ratio={1}
              className="flex w-20 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <RiPlayCircleLine className="size-6" />
            </AspectRatio>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-sm font-medium">Quarterly recap</span>
              <span className="text-sm text-muted-foreground">
                Square preview keeps artwork centred no matter the column width.
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
