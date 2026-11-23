"use client";

import * as React from "react";

import { useHighlightedCode } from "@/hooks/use-highlighted-code";
import { Button } from "@/components/ui/button";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block";
import { RiDownloadLine, RiFileCodeLine, RiTextWrap } from "@remixicon/react";

const code = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    system: "You are a helpful assistant. Answer in one short paragraph.",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`;

function download(value: string, filename: string) {
  const url = URL.createObjectURL(new Blob([value], { type: "text/plain" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function CodeBlockCard() {
  const [wrap, setWrap] = React.useState(false);
  const lines = useHighlightedCode(code, "ts");

  return (
    <div className="">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <RiFileCodeLine />
            app/api/chat/route.ts
          </CodeBlockTitle>
          <CodeBlockActions>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Wrap lines"
              aria-pressed={wrap}
              className="aria-pressed:text-foreground"
              onClick={() => setWrap(!wrap)}
            >
              <RiTextWrap />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Download"
              onClick={() => download(code, "route.ts")}
            >
              <RiDownloadLine />
            </Button>
            <CodeBlockCopyButton value={code} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap={wrap} lineNumbers>
          {lines.map((line, index) => (
            <CodeBlockLine
              key={index}
              variant={index >= 5 && index <= 9 ? "highlighted" : "default"}
            >
              {line}
            </CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  );
}
