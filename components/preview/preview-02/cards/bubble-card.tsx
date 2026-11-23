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

export function BubbleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bubble</CardTitle>
        <CardDescription>
          Displays conversational content in a message bubble. Supports
          variants, alignment, grouping, reactions, and collapsible content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col gap-8 pb-8">
          <Bubble align="end">
            <BubbleContent>Hey there! what&apos;s up?</BubbleContent>
          </Bubble>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>Hey! Want to see chat bubbles?</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                I can group messages, switch sides, and keep the whole thread
                easy to scan.
              </BubbleContent>
              <BubbleReactions role="img" aria-label="Reaction: thumbs up">
                <span>👍</span>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
          <Bubble align="end">
            <BubbleContent>Sure. Hit me with your best demo.</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>
              Yes. You are reading a demo that is demoing itself. Very meta.
              Very on-brand.
            </BubbleContent>
            <BubbleReactions
              role="img"
              aria-label="Reactions: thumbs up, fire, eyes, and 2 more"
            >
              <span>👍</span>
              <span>🔥</span>
              <span>👀</span>
              <span>+2</span>
            </BubbleReactions>
          </Bubble>
        </div>
      </CardContent>
    </Card>
  );
}
