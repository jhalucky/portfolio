"use client";

import Image from "next/image";
import { UploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-5">

      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#555] mb-3">
          Cover Image
        </p>

        <UploadDropzone<OurFileRouter, "imageUploader">
          endpoint="imageUploader"

          onClientUploadComplete={(res) => {
            if (!res?.length) return;

            onChange(res[0].url);
          }}

          onUploadError={(error) => {
            alert(error.message);
          }}

          appearance={{
            container:
              "border border-[#222] bg-transparent rounded-none",

            uploadIcon:
              "text-[#666]",

            label:
              "text-[#ddd] font-mono text-xs uppercase tracking-widest",

            allowedContent:
              "text-[#555] text-[11px] font-mono",

            button:
              "hidden",
          }}
        />
      </div>

      {value && (
        <div className="space-y-3">

          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#555]">
            Preview
          </p>

          <div className="relative aspect-video w-full overflow-hidden border border-[#222]">

            <Image
              src={value}
              alt="Cover"
              fill
              className="object-cover"
            />

          </div>

        </div>
      )}
    </div>
  );
}