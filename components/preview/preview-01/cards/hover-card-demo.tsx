import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  RiGithubLine,
  RiShareLine,
  RiStarLine,
  RiUserLine,
} from "@remixicon/react";

export function HoverCardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hover Card</CardTitle>
        <CardDescription>Rich previews on hover.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 text-sm">
          <HoverCard>
            <HoverCardTrigger
              href="#muhammadfathurraiyan"
              className="flex w-fit items-center gap-1.5 hover:underline"
            >
              <RiGithubLine className="size-4" />
              @muhammadfathurraiyan
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col">
                  <span className="font-medium">Julian Duryea</span>
                  <span className="text-muted-foreground">
                    Maintainer of the ledger tooling. Ships small, ships often.
                  </span>
                </div>
              </div>
              <div className="text-muted-foreground mt-3 flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <RiUserLine className="size-4" />
                  1.2k followers
                </span>
                <span className="flex items-center gap-1">
                  <RiStarLine className="size-4" />
                  48 starred
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              href="#design-system"
              className="flex w-fit items-center gap-1.5 hover:underline"
            >
              <RiGithubLine className="size-4" />
              design-system
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <div className="font-medium">design-system</div>
              <p className="text-muted-foreground mt-1">
                Base UI primitives, Tailwind v4 tokens, and a preview gallery
                for every component.
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                <RiShareLine data-icon="inline-start" />
                View repository
              </Button>
            </HoverCardContent>
          </HoverCard>
        </div>
      </CardContent>
    </Card>
  );
}
