import { BUSINESS } from "@/lib/constants";

type Props = {
  className?: string;
  /** Height classes for the iframe. */
  frameClassName?: string;
};

export function MapBlock({
  className = "",
  frameClassName = "h-[22rem] lg:h-[28rem]",
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-card border border-line bg-neutral ${className}`.trim()}
    >
      <iframe
        src={BUSINESS.mapEmbedSrc}
        title="Map: Al Hatem Furniture Moving Company on Palm Jumeirah, Dubai"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className={`block w-full border-0 ${frameClassName}`}
      />
    </div>
  );
}
