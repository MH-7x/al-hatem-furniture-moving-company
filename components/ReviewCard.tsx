import { StarIcon } from "./icons";

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
