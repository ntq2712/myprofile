/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';

import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = ImageProps & {
  alt: string;
  priority?: boolean; // true nếu ảnh cần preload
  sizes?: string;
};

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = '100vw',
  ...rest
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      placeholder="blur" // cần dùng ảnh tĩnh hoặc import ảnh để có blur
      {...rest}
    />
  );
}
