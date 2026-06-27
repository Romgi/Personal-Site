import Image from "next/image";

import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  preload?: boolean;
  aspect?: string;
};

export function PlaceholderImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  preload = false,
  aspect = "aspect-[16/10]",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-blue-300/10 bg-slate-950",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(2,6,23,0.48)_100%)]"
      />
    </div>
  );
}
