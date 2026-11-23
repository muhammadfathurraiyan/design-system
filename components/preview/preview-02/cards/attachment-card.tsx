import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { RiCloseLine, RiFile2Line } from "@remixicon/react";
import Image from "next/image";

const images = [
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "Workspace",
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 1.1 MB",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    alt: "Desk",
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 940 KB",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
    alt: "Office",
  },
];

export function AttachmentCard() {
  return (
    <Card className="mx-auto flex w-full flex-col gap-3">
      <CardHeader>
        <CardTitle>Attachment</CardTitle>
        <CardDescription>
          Displays a file or image attachment with media, metadata, upload
          state, and actions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AttachmentGroup>
          {images.map((image) => (
            <Attachment key={image.name} orientation="vertical">
              <AttachmentMedia variant="image">
                <Image src={image.src} alt={image.alt} width={500} height={500} className="w-full h-full object-cover" />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>{image.name}</AttachmentTitle>
                <AttachmentDescription>{image.meta}</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          ))}
        </AttachmentGroup>
        <Attachment state="uploading" className="w-full">
          <AttachmentMedia>
            <Spinner />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
            <AttachmentDescription>Uploading · 64%</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Cancel upload">
              <RiCloseLine />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment className="w-full">
          <AttachmentMedia>
            <RiFile2Line />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>message-renderer.tsx</AttachmentTitle>
            <AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove message-renderer.tsx">
              <RiCloseLine />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </CardContent>
    </Card>
  );
}
