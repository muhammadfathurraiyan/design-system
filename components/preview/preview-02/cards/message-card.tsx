import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import { Bubble, BubbleContent } from "@/components/ui/bubble"

export function MessageCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Message</span>
          <MessageGroup>
            <Message align="start">
              <MessageAvatar>
                <Avatar className="size-8">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>Sasha Mendez</MessageHeader>
                <Bubble variant="muted">
                  <BubbleContent>
                    Reconciled the August ledger. Two rows need a category.
                  </BubbleContent>
                </Bubble>
                <MessageFooter>09:41</MessageFooter>
              </MessageContent>
            </Message>
            <Message align="end">
              <MessageAvatar>
                <Avatar className="size-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>You</MessageHeader>
                <Bubble variant="default" align="end">
                  <BubbleContent>
                    Filed both under contractor payouts — take a look.
                  </BubbleContent>
                </Bubble>
                <MessageFooter>Delivered · 09:42</MessageFooter>
              </MessageContent>
            </Message>
            <Message align="start">
              <MessageAvatar>
                <Avatar className="size-8">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>Sasha Mendez</MessageHeader>
                <Bubble variant="muted">
                  <BubbleContent>Perfect, closing the batch.</BubbleContent>
                </Bubble>
                <MessageFooter>09:44</MessageFooter>
              </MessageContent>
            </Message>
          </MessageGroup>
        </div>
      </CardContent>
    </Card>
  )
}
