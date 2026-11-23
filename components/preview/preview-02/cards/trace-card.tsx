"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import type { UIDataTypes, UIMessage } from "ai";

import { createChat, getMessageText } from "@/lib/ai";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { CodeBlock, CodeBlockContent } from "@/components/ui/code-block";
import { Message, MessageContent } from "@/components/ui/message";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace";
import { Spinner } from "@/components/ui/spinner";
import {
  RiArrowUpLine,
  RiCheckboxCircleLine,
  RiEarthLine,
  RiInformationLine,
} from "@remixicon/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    runCommand: {
      input: { command: string };
      output: { stdout: string };
    };
  }
>;

type Part = ChatMessage["parts"][number];

const chat = createChat<ChatMessage>()
  .user("Why does pnpm install fail in CI?")
  .assistant(({ writer }) => {
    writer.reasoning(
      "CI installs with a frozen lockfile, so the install stops when package.json and pnpm-lock.yaml disagree. I should check what the last commit changed, then reproduce the install.",
      { delayMs: 40 },
    );
    writer
      .tool("runCommand", { input: { command: "pnpm --version" } })
      .sleep(700)
      .output({ stdout: "10.18.0" });
    writer
      .tool("runCommand", {
        input: {
          command: "git diff --stat HEAD~1 -- package.json pnpm-lock.yaml",
        },
      })
      .sleep(900)
      .output({
        stdout:
          " package.json | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)",
      });
    writer
      .tool("runCommand", {
        input: { command: "pnpm install --frozen-lockfile" },
      })
      .sleep(1200)
      .error(
        'ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json',
      );
    writer.sourceUrl({
      url: "https://pnpm.io/cli/install#--frozen-lockfile",
      title: "pnpm install | pnpm.io",
    });
    writer.sourceUrl({
      url: "https://pnpm.io/continuous-integration",
      title: "Continuous Integration | pnpm.io",
    });
    writer.sleep(1000);
    writer.text(
      "The last commit bumped a version in package.json without updating pnpm-lock.yaml, so the frozen install fails. Run pnpm install locally and commit the lockfile.",
    );
  });

const transcript = chat.get();
const [question] = chat.get(1);
const transport = chat.transport({ delayMs: 20 });

function ThinkingRow({ text, running }: { text: string; running: boolean }) {
  const [open, setOpen] = React.useState<boolean>();

  const line = (
    <TraceLine status={running ? "running" : undefined}>
      <TraceIcon>{running ? <Spinner /> : <RiCheckboxCircleLine />}</TraceIcon>
      <TraceTitle>{running ? "Thinking" : "Thought for 5s"}</TraceTitle>
    </TraceLine>
  );

  if (text.length === 0) {
    return line;
  }

  return (
    <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
      <TraceCollapsibleTrigger>{line}</TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="whitespace-pre-wrap">
        {text}
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

function ToolRow({
  part,
  streaming,
  defaultOpen,
}: {
  part: Extract<Part, { type: "tool-runCommand" }>;
  streaming: boolean;
  defaultOpen?: boolean;
}) {
  const command = part.input?.command;

  if (part.state === "output-available" || part.state === "output-error") {
    const failed = part.state === "output-error";

    return (
      <TraceCollapsible defaultOpen={defaultOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine status={failed ? "error" : undefined}>
            <TraceIcon>
              {failed ? <RiInformationLine /> : <RiCheckboxCircleLine />}
            </TraceIcon>
            <TraceTitle>
              {failed ? "Failed to run" : "Ran"} {command}
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          {failed ? (
            <CodeBlock size="sm" variant="destructive">
              <CodeBlockContent wrap className="max-h-64">
                {part.errorText}
              </CodeBlockContent>
            </CodeBlock>
          ) : (
            <CodeBlock size="sm">
              <CodeBlockContent wrap className="max-h-64">
                {part.output.stdout}
              </CodeBlockContent>
            </CodeBlock>
          )}
        </TraceCollapsibleContent>
      </TraceCollapsible>
    );
  }

  return (
    <TraceLine status={streaming ? "running" : "error"}>
      <TraceIcon>{streaming ? <Spinner /> : <RiInformationLine />}</TraceIcon>
      <TraceTitle>
        {streaming ? "Running" : "Failed to run"} {command}
      </TraceTitle>
    </TraceLine>
  );
}

function SourcesRow({
  sources,
  running,
}: {
  sources: Extract<Part, { type: "source-url" }>[];
  running: boolean;
}) {
  return (
    <TraceCollapsible>
      <TraceCollapsibleTrigger>
        <TraceLine status={running ? "running" : undefined}>
          <TraceIcon>{running ? <Spinner /> : <RiEarthLine />}</TraceIcon>
          <TraceTitle>
            {running ? "Using" : "Used"} {sources.length} sources
          </TraceTitle>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent>
        <Trace>
          {sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
            >
              <TraceLine>
                <TraceIcon>
                  <RiEarthLine />
                </TraceIcon>
                <TraceTitle>
                  {source.title ?? new URL(source.url).hostname}
                  <span className="sr-only"> (opens in a new tab)</span>
                </TraceTitle>
                <TraceIcon>
                  <RiArrowUpLine />
                </TraceIcon>
              </TraceLine>
            </a>
          ))}
        </Trace>
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export function TraceCard() {
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: transcript,
    transport,
  });
  const busy = status === "submitted" || status === "streaming";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trace</CardTitle>
        <CardDescription>
          The building block for reasoning, tool calls, sources and more.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex min-h-72 w-full flex-col gap-4 text-sm">
        {messages.map((message) => {
          if (message.role === "user") {
            return (
              <Message key={message.id} align="end">
                <MessageContent>
                  <Bubble align="end" variant="muted">
                    <BubbleContent>{getMessageText(message)}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            );
          }

          const streaming = busy && message === messages.at(-1);
          const rows = message.parts.filter(
            (part) =>
              part.type === "reasoning" || part.type === "tool-runCommand",
          );
          const sources = message.parts.filter(
            (part) => part.type === "source-url",
          );
          const text = getMessageText(message);

          return (
            <Message key={message.id}>
              <MessageContent className="gap-4">
                {rows.length + sources.length > 0 && (
                  <Trace>
                    {rows.map((part, index) =>
                      part.type === "reasoning" ? (
                        <ThinkingRow
                          key={index}
                          text={part.text}
                          running={streaming && part.state === "streaming"}
                        />
                      ) : part.type === "tool-runCommand" ? (
                        <ToolRow
                          key={part.toolCallId}
                          part={part}
                          streaming={streaming}
                          defaultOpen={index === 2}
                        />
                      ) : null,
                    )}
                    {sources.length > 0 && (
                      <SourcesRow
                        sources={sources}
                        running={streaming && text.length === 0}
                      />
                    )}
                  </Trace>
                )}
                {text && <p>{text}</p>}
              </MessageContent>
            </Message>
          );
        })}
        {!busy && (
          <Button
            variant="outline"
            size="sm"
            className="mt-auto self-start"
            onClick={() => {
              setMessages([]);
              sendMessage(question);
            }}
          >
            Replay
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
