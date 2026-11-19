import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

// Intrinsic size of both SVG variants (viewBox 250 × 72).
const LOGO_W = 250;
const LOGO_H = 72;

/** `light` = the logo is placed on a dark background (white wordmark). */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label={`${BUSINESS.name} – home`}
    >
      <Image
        src={
          light
            ? "/images/global/al-hatem-logo-dark.svg"
            : "/images/global/al-hatem-logo-light.svg"
        }
        alt={`${BUSINESS.name} logo`}
        width={LOGO_W}
        height={LOGO_H}
        priority
        unoptimized
        className="h-[3.25rem] w-auto lg:h-14"
      />
    </Link>
  );
}
