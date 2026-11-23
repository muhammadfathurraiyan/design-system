"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RiCheckboxCircleLine } from "@remixicon/react";

export function InputOtpCard() {
  const [value, setValue] = React.useState("");
  const complete = value.length === 6;

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium">Verification code</span>
          {complete ? (
            <Badge variant="secondary">
              <RiCheckboxCircleLine />
              Ready
            </Badge>
          ) : (
            <span className="text-muted-foreground text-xs tabular-nums">
              {value.length}/6
            </span>
          )}
        </div>
        <div className="flex flex-col items-center gap-3">
          <InputOTP maxLength={6} value={value} onChange={setValue}>
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-muted-foreground text-center text-sm">
            Enter the 6-digit code from your authenticator app.
          </p>
        </div>
        <Button size="sm" disabled={!complete} className="w-full">
          Verify
        </Button>
      </CardContent>
    </Card>
  );
}
