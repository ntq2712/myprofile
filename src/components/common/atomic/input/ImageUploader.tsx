/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

"use client";
import { uploadImage } from "@/api/file";
import Image from "next/image";
import {
  forwardRef,
  useImperativeHandle,
  useState,
  ChangeEvent,
  useEffect,
  useRef,
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
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (imageUrl) {
        setPreview(imageUrl);
      }else{
        setPreview(null)
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

    const handleClickBox = () => {
      inputRef.current?.click();
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <div
          className="relative w-40 h-40 cursor-pointer group"
          onClick={handleClickBox}
        >
          {preview ? (
            <Image
              src={preview}
              alt="preview"
              width={160}
              height={160}
              unoptimized
              className="w-full h-full object-cover rounded-lg shadow-md border border-gray-300 group-hover:opacity-90"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center border border-dashed border-gray-400 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-500 transition">
              No image
            </div>
          )}
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    );
  }
);

ImageUploader.displayName = "ImageUploader";
export default ImageUploader;
