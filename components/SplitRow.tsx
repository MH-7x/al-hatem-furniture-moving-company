import type { ReactNode } from "react";

type Props = {
  image: ReactNode;
  reverse?: boolean;
  children: ReactNode;
  className?: string;
};

export function SplitRow({ image, reverse = false, children, className = "" }: Props) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${className}`.trim()}
    >
      <div className={reverse ? "lg:order-2" : ""}>{image}</div>
      <div className="rich min-w-0">{children}</div>
    </div>
  );
}
