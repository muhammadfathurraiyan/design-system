import { Card, CardContent } from "@/components/ui/card"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { RiCodeLine, RiTerminalLine } from "@remixicon/react"

const snippet = `const toast = createToastManager()

toast.add({
  title: "Transfer sent",
  description: "$1,240.00 to ••4821",
  type: "success",
})`

const diff = `  const total = sum(rows)
- const fee = 0
+ const fee = total * 0.029
  return total - fee`

export function CodeBlockCard() {
  
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Code Block</span>
          <CodeBlock size="sm">
            <CodeBlockHeader>
              <CodeBlockTitle>
                <RiCodeLine />
                usage.ts
              </CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={snippet} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent lineNumbers>{snippet}</CodeBlockContent>
          </CodeBlock>
          <CodeBlock size="sm">
            <CodeBlockHeader>
              <CodeBlockTitle>diff.patch</CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={diff} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent lineNumbers={false}>
              {diff.split("\n").map((line) => (
                <CodeBlockLine
                  key={line}
                  variant={
                    line.startsWith("+")
                      ? "added"
                      : line.startsWith("-")
                        ? "removed"
                        : "default"
                  }
                >
                  {line}
                </CodeBlockLine>
              ))}
            </CodeBlockContent>
          </CodeBlock>
          <CodeBlock variant="destructive" size="sm">
            <CodeBlockHeader>
              <CodeBlockTitle>
                <RiTerminalLine />
                npm
              </CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value="npm run build" />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent wrap>
              <CodeBlockLine variant="highlighted">
                npm run build
              </CodeBlockLine>
            </CodeBlockContent>
          </CodeBlock>
        </div>
      </CardContent>
    </Card>
  )
}
