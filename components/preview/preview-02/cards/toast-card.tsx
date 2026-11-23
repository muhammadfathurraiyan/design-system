"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/toast";

export function ToastCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Toast</CardTitle>
        <CardDescription>
          Notifications stack from the bottom of the window.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              toast.add({ description: "Event has been created." })
            }
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "success",
                description: "Event has been created.",
              })
            }
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "info",
                description: "Arrive 10 minutes before the event.",
              })
            }
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "warning",
                description: "The event cannot start before 8:00 AM.",
              })
            }
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                type: "error",
                description: "The event could not be created.",
                priority: "high",
              })
            }
          >
            Error
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
