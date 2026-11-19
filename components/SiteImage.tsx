import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  ratio: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fallback?: ReactNode;
};

function imageExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

export function SiteImage({
  src,
  alt,
  ratio,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  fallback,
}: Props) {
  const aspectRatio = ratio.replace(":", " / ");
  const base = `relative overflow-hidden rounded-card ${className}`.trim();

  if (imageExists(src)) {
    return (
      <div className={`${base} bg-neutral`} style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  if (fallback) return <>{fallback}</>;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${base} flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#d2d2d2] bg-neutral p-4 text-center`}
      style={{ aspectRatio }}
    >
      <ImageIcon className="size-7 text-[#9a9a9a]" strokeWidth={1.5} aria-hidden="true" />
      <span className="max-w-full break-all text-xs text-[#7a7a7a]">
        {src.split("/").pop()}
      </span>
    </div>
  );
}
