import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Marker, MarkerContent } from "@/components/ui/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter
} from "@/components/ui/message";

export function MessageCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Message</CardTitle>
        <CardDescription>
          Displays a message in a conversation, with optional avatar, header,
          footer, and alignment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col gap-6">
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarImage
                  src={`https://github.com/muhammadfathurraiyan.png`}
                  alt="muhammadfathurraiyan"
                />
                <AvatarFallback>MFR</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>Deploying to prod real quick.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarImage
                  src={`https://github.com/shadcn.png`}
                  alt="shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>It&apos;s 4:55 PM. On a Friday.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarImage
                  src={`https://github.com/muhammadfathurraiyan.png`}
                  alt="muhammadfathurraiyan"
                />
                <AvatarFallback>MFR</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>It&apos;s a one-line change.</BubbleContent>
              </Bubble>
              <MessageFooter>Delivered</MessageFooter>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarImage
                  src={`https://github.com/shadcn.png`}
                  alt="shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <BubbleGroup>
                <Bubble variant="muted">
                  <BubbleContent>
                    It&apos;s always a one-line change 😭.
                  </BubbleContent>
                </Bubble>
                <Bubble variant="muted">
                  <BubbleContent>Alright, let me take a look.</BubbleContent>
                  <BubbleReactions aria-label="Reactions: thumbs up">
                    <span>👍</span>
                  </BubbleReactions>
                </Bubble>
              </BubbleGroup>
            </MessageContent>
          </Message>
          <Marker role="status">
            <MarkerContent className="shimmer">
              <span className="font-medium">Raiyan</span> is typing...
            </MarkerContent>
          </Marker>
        </div>
      </CardContent>
    </Card>
  );
}
