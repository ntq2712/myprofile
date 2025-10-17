/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

"use client";

"use client";

import { uploadImage } from "@/api/file";
import Image from "next/image";
import {
  forwardRef,
  useImperativeHandle,
  useState,
  ChangeEvent,
  useEffect,
} from "react";

export type ImageUploaderRef = {
  upload: () => Promise<string | null>;
};

type ImageUploaderProps = {
  imageUrl?: string;
};

const ImageUploader = forwardRef<ImageUploaderRef, ImageUploaderProps>(
  ({ imageUrl }, ref) => {
    const [file, setFile] = useState<File | undefined>(undefined);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
      if (imageUrl) {
        setPreview(imageUrl);
      }
    }, [imageUrl]);

    useImperativeHandle(ref, () => ({
      async upload() {
        if (!file) return imageUrl ?? "";
        try {
          const url = await uploadImage(file);
          if (url.success === true) {
            setFile(undefined);
            return url.data ?? "";
          } else {
            return imageUrl ?? "";
          }
        } catch (error) {
          console.error("Upload failed:", error);
          return imageUrl ?? "";
        }
      },
    }));

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];

      if (selectedFile && selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);

        const reader = new FileReader();

        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFile(undefined);
        setPreview(null);
      }
    };

    return (
      <div className="flex flex-col items-center gap-4">
        {preview ? (
          <Image
            src={preview}
            alt="preview"
            width={160}
            height={160}
            unoptimized
            className="w-40 h-40 object-cover rounded-lg shadow-md border border-gray-300"
          />
        ) : (
          <div className="w-40 h-40 flex items-center justify-center border border-dashed border-gray-400 rounded-lg text-gray-400">
            No image
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file:bg-green-600 file:text-white file:px-4 file:py-2 file:rounded file:border-0 file:cursor-pointer text-sm"
        />
      </div>
    );
  }
);

ImageUploader.displayName = "ImageUploader";
export default ImageUploader;
