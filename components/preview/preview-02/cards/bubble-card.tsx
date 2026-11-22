import { Card, CardContent } from "@/components/ui/card"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { RiHeartLine, RiThumbUpLine } from "@remixicon/react"

export function BubbleCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Bubble</span>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>Did the payout batch clear?</BubbleContent>
            </Bubble>
            <Bubble variant="default" align="end">
              <BubbleContent>
                Yes — $12,400 landed in the operating account.
              </BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>Nice. Any retries left over?</BubbleContent>
              <BubbleReactions side="bottom" align="start">
                <RiThumbUpLine className="size-3.5" />
                <span className="text-xs">2</span>
              </BubbleReactions>
            </Bubble>
            <Bubble variant="tinted" align="end">
              <BubbleContent>
                Two webhooks retried, both succeeded on the second attempt.
              </BubbleContent>
              <BubbleReactions side="bottom" align="end">
                <RiHeartLine className="size-3.5" />
              </BubbleReactions>
            </Bubble>
            <Bubble variant="outline">
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <BubbleContent>Forwarding the receipt now.</BubbleContent>
              </div>
            </Bubble>
            <Bubble variant="ghost" align="end">
              <BubbleContent className="text-xs text-muted-foreground">
                Edited · 2 minutes ago
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </div>
      </CardContent>
    </Card>
  )
}
