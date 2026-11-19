import type { ReactNode } from "react";
import { Breadcrumb, type Crumbs } from "./hero/Breadcrumb";
import { HeroA, HeroB, HeroC, type HeroProps } from "./hero/HeroVariants";

export { Breadcrumb };

/**
 * split     – home + service pages
 * immersive – location pages
 * bold      – about + contact pages
 */
export type HeroVariant = "split" | "immersive" | "bold";

type Props = {
  variant?: HeroVariant;
  breadcrumb?: Crumbs;
  title: ReactNode;
  titleId?: string;
  children?: ReactNode;
  actions?: ReactNode;
  image?: ReactNode;
  /** Wide banner image (location pages). Shown as the hero visual. */
  banner?: ReactNode;
  eyebrow?: string;
  /** Decorative photo for the immersive variant on pages with no hero image. */
  backdrop?: ReactNode;
  /** Side card, e.g. the home page quote form. Gets a unique id prefix. */
  aside?: HeroProps["aside"];
};

export function PageHeader({
  variant = "split",
  breadcrumb,
  title,
  titleId,
  children,
  actions,
  image,
  banner,
  eyebrow,
  backdrop,
  aside,
}: Props) {
  const hero: HeroProps = {
    breadcrumb,
    eyebrow,
    title,
    titleId,
    copy: children,
    actions,
    media: image ?? banner,
    backdrop,
    aside,
  };

  if (variant === "immersive") return <HeroB {...hero} />;
  if (variant === "bold") return <HeroC {...hero} />;
  return <HeroA {...hero} />;
}
