import { StarIcon } from "./icons";
import { REVIEWS, type ReviewerName } from "@/lib/reviews";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

export function ReviewCard({ name }: { name: ReviewerName }) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-line bg-white p-6 lg:p-7">
      <div role="img" aria-label="Rated 5 out of 5" className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className="size-5 fill-primary stroke-black stroke-[0.8]" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-body">
        “{REVIEWS[name]}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-black"
        >
          {initials(name)}
        </span>
        <span className="leading-tight">
          <strong className="block text-black">{name}</strong>
          <span className="text-sm text-muted">Google review</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function RatingLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
      <div role="img" aria-label="Rated 5 out of 5" className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className="size-7 fill-primary stroke-black stroke-[0.8]" />
        ))}
      </div>
      <p className="font-semibold text-black">{children}</p>
    </div>
  );
}
