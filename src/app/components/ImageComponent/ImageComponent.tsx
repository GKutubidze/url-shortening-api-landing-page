"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { loadImage } from "@/app/utils/loadImage";
 
interface Props {
  src: string;
  alt: string;
  className?: string;
  loader?: (options: {
    src: string;
    width: number;
    quality?: number;
  }) => string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  style?: React.CSSProperties;
  onLoadingComplete?: (img: HTMLImageElement) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  loading?: "lazy" | "eager";
  blurDataURL?: string;
  unoptimized?: boolean;
  key?: React.Key
}
const ImageComponent = (props: Props) => {
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const {
    src,
    alt,
    className,
    loader,
    fill,
    sizes,
    quality,
    priority,
    
    style,
    onLoadingComplete,
    onError,
    onLoad,
    loading,
    blurDataURL,
    unoptimized,
    key
  } = props;
  useEffect(() => {
    loadImage(setImageDimensions, src);
  }, []);
  return (
    <Image
      src={src}
      alt={alt}
      width={imageDimensions.width}
      height={imageDimensions.height}
      className={className}
      loader={loader}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      style={style}
      onLoadingComplete={onLoadingComplete}
      onLoad={onLoad}
      onError={onError}
      loading={loading}
      blurDataURL={blurDataURL}
      unoptimized={unoptimized}
      key={key}
    />
  );
};

export default ImageComponent;