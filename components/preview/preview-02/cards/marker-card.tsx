import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";
import { Spinner } from "@/components/ui/spinner";
import {
  RiGitBranchLine,
  RiSeoLine
} from "@remixicon/react";

export function MarkerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marker</CardTitle>
        <CardDescription>
          Displays an inline status, system note, bordered row, or labeled
          separator in a conversation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Marker>
          <MarkerIcon>
            <RiGitBranchLine />
          </MarkerIcon>
          <MarkerContent>Switched to a new branch</MarkerContent>
        </Marker>
        <Marker role="status">
          <MarkerIcon>
            <Spinner />
          </MarkerIcon>
          <MarkerContent className="shimmer">Thinking...</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>Conversation compacted</MarkerContent>
        </Marker>
        <Marker>
          <MarkerIcon>
            <RiSeoLine />
          </MarkerIcon>
          <MarkerContent>Explored 4 files</MarkerContent>
        </Marker>
      </CardContent>
    </Card>
  );
}
