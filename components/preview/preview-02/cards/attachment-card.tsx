import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import {
  RiCloseLine,
  RiDownloadLine,
  RiErrorWarningLine,
  RiFileTextLine,
  RiImageLine,
  RiLoaderLine,
  RiMoreLine,
} from "@remixicon/react"

const files = [
  {
    title: "Q3-statement.pdf",
    description: "2.4 MB · Uploaded",
    state: "done" as const,
    icon: RiFileTextLine,
  },
  {
    title: "payroll-run.csv",
    description: "Uploading 68%",
    state: "uploading" as const,
    icon: RiLoaderLine,
  },
  {
    title: "receipt-scan.png",
    description: "Processing OCR",
    state: "processing" as const,
    icon: RiImageLine,
  },
  {
    title: "invoice-0921.pdf",
    description: "Failed — too large",
    state: "error" as const,
    icon: RiErrorWarningLine,
  },
]

export function AttachmentCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium">Attachment</span>
            <Button size="xs" variant="outline">
              Add file
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {files.map((file) => (
              <Attachment key={file.title} state={file.state}>
                <AttachmentMedia variant="icon">
                  <file.icon />
                </AttachmentMedia>
                <AttachmentContent>
                  <AttachmentTitle>{file.title}</AttachmentTitle>
                  <AttachmentDescription>
                    {file.description}
                  </AttachmentDescription>
                </AttachmentContent>
                <AttachmentActions>
                  <AttachmentAction aria-label="Download">
                    <RiDownloadLine />
                  </AttachmentAction>
                  <AttachmentAction aria-label="Remove">
                    <RiCloseLine />
                  </AttachmentAction>
                </AttachmentActions>
              </Attachment>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">
              Compact · horizontal group
            </span>
            <AttachmentGroup>
              {["ledger.xlsx", "payouts.csv"].map((name) => (
                <Attachment key={name} size="xs">
                  <AttachmentMedia variant="icon">
                    <RiFileTextLine />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>{name}</AttachmentTitle>
                    <AttachmentDescription>Ready</AttachmentDescription>
                  </AttachmentContent>
                  <AttachmentActions>
                    <AttachmentAction aria-label="More">
                      <RiMoreLine />
                    </AttachmentAction>
                  </AttachmentActions>
                </Attachment>
              ))}
            </AttachmentGroup>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">Vertical</span>
            <div className="flex gap-2">
              {files.slice(0, 2).map((file) => (
                <Attachment
                  key={file.title}
                  orientation="vertical"
                  size="xs"
                  state={file.state}
                >
                  <AttachmentMedia variant="icon">
                    <file.icon />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>{file.title}</AttachmentTitle>
                  </AttachmentContent>
                </Attachment>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
