import type { ReactNode } from "react";
import { Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Breadcrumb, type Crumbs } from "./Breadcrumb";

/**
 * Three hero designs that all render the exact same content slots.
 * Nothing is dropped between variants: breadcrumb, eyebrow, title, copy,
 * actions, image (or wide banner) and the optional side card (home quote form).
 */
export type HeroProps = {
  breadcrumb?: Crumbs;
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  copy?: ReactNode;
  actions?: ReactNode;
  /** The page's hero image / banner, already rendered as a <SiteImage>. */
  media?: ReactNode;
  /** Decorative photo used only by the immersive variant when there is no `media`. */
  backdrop?: ReactNode;
  /** Side card (e.g. the home quote form). Receives a unique id prefix. */
  aside?: (idPrefix: string) => ReactNode;
};

type TextProps = Pick<HeroProps, "eyebrow" | "title" | "titleId" | "copy" | "actions">;

function pickText({ eyebrow, title, titleId, copy, actions }: HeroProps): TextProps {
  return { eyebrow, title, titleId, copy, actions };
}

function TextBlock({ eyebrow, title, titleId, copy, actions }: TextProps) {
  return (
    <div className="hv-text">
      {eyebrow && <p className="hv-eyebrow eyebrow">{eyebrow}</p>}
      <h1 id={titleId} className="hv-title">
        {title}
      </h1>
      {copy && <div className="rich hv-copy">{copy}</div>}
      {actions && <div className="hv-actions">{actions}</div>}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * A — "Split": warm light canvas, text left, photo in a yellow-offset frame.
 * ---------------------------------------------------------------------- */
export function HeroA({ breadcrumb, media, aside, ...rest }: HeroProps) {
  const text = pickText(rest);
  const visual = media ?? aside?.("hero-a");
  return (
    <section className="hv hv-a" aria-labelledby={text.titleId}>
      <div className="wrap">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <div className={`hv-a-grid ${visual ? "has-visual" : ""}`}>
          <TextBlock {...text} />
          {visual && (
            <div className="hv-a-visual">
              <div className="hv-a-frame hv-fit">
                {visual}
                {media && (
                  <span className="hv-a-badge">
                    <Clock className="size-4" aria-hidden="true" />
                    {BUSINESS.hours}
                  </span>
                )}
              </div>
              {media && aside && <div className="mt-6">{aside("hero-a")}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * B — "Immersive": full-bleed photo under a dark gradient, white text.
 * ---------------------------------------------------------------------- */
export function HeroB({ breadcrumb, media, backdrop, aside, ...rest }: HeroProps) {
  const text = pickText(rest);
  const bg = media ?? backdrop;
  return (
    <section
      className={`hv hv-b on-dark ${bg ? "hv-b--photo" : ""}`.trim()}
      aria-labelledby={text.titleId}
    >
      {bg && <div className="hv-b-bg">{bg}</div>}
      <div className="wrap">
        {breadcrumb && <Breadcrumb items={breadcrumb} dark />}
        <div className={`hv-b-grid ${aside ? "has-aside" : ""}`}>
          <TextBlock {...text} />
          {aside && <div className="hv-b-aside">{aside("hero-b")}</div>}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * C — "Bold": brand-yellow band, split headline / copy, cinematic photo
 *     that straddles the band's lower edge.
 * ---------------------------------------------------------------------- */
export function HeroC({ breadcrumb, media, aside, ...rest }: HeroProps) {
  const text = pickText(rest);
  const { eyebrow, title, titleId, copy, actions } = text;
  const split = Boolean(aside) && !media;

  return (
    <section
      className={`hv hv-c ${media ? "hv-c--bleed" : ""}`.trim()}
      aria-labelledby={titleId}
    >
      <div className="wrap">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}

        {split ? (
          <div className="hv-c-split">
            <TextBlock {...text} />
            <div className="hv-c-aside">{aside!("hero-c")}</div>
          </div>
        ) : (
          <>
            <div className="hv-c-head">
              <div className="hv-text">
                {eyebrow && <p className="hv-eyebrow eyebrow">{eyebrow}</p>}
                <h1 id={titleId} className="hv-title">
                  {title}
                </h1>
              </div>
              {(copy || actions) && (
                <div className="hv-text">
                  {copy && <div className="rich hv-copy">{copy}</div>}
                  {actions && <div className="hv-actions">{actions}</div>}
                </div>
              )}
            </div>
            {media && (
              <div className="hv-c-stage">
                <div className="hv-c-media hv-fit">{media}</div>
                {aside && <div>{aside("hero-c")}</div>}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
