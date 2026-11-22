import { Card, CardContent } from "@/components/ui/card"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Bubble, BubbleContent } from "@/components/ui/bubble"

const messages = [
  { id: "m1", author: "Sasha", initials: "SM", align: "start", text: "Uploaded the Q3 statements." },
  { id: "m2", author: "You", initials: "JD", align: "end", text: "Got them, reviewing now." },
  { id: "m3", author: "Sasha", initials: "SM", align: "start", text: "Row 14 looks off by $12." },
  { id: "m4", author: "You", initials: "JD", align: "end", text: "Rounding — I'll reconcile it." },
  { id: "m5", author: "Sasha", initials: "SM", align: "start", text: "Batch closes at 17:00." },
  { id: "m6", author: "You", initials: "JD", align: "end", text: "Locked. Payout queued." },
  { id: "m7", author: "Sasha", initials: "SM", align: "start", text: "Thanks — receipts attached." },
] as const

export function MessageScrollerCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium">Message Scroller</span>
            <span className="text-xs text-muted-foreground">
              {messages.length} messages
            </span>
          </div>
          <div className="h-56 overflow-hidden rounded-lg border">
            <MessageScrollerProvider defaultScrollPosition="end">
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="gap-4 p-3">
                    {messages.map((message) => (
                      <MessageScrollerItem
                        key={message.id}
                        messageId={message.id}
                      >
                        <div
                          className={
                            message.align === "end"
                              ? "flex justify-end"
                              : "flex justify-start"
                          }
                        >
                          <Bubble
                            variant={message.align === "end" ? "default" : "muted"}
                            align={message.align}
                            className="max-w-[85%]"
                          >
                            <BubbleContent>{message.text}</BubbleContent>
                          </Bubble>
                        </div>
                      </MessageScrollerItem>
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton direction="start" />
                <MessageScrollerButton direction="end" />
              </MessageScroller>
            </MessageScrollerProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
