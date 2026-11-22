"use client";

import Script from "next/script";

declare global {
  interface Window {
    iFrameResize?: () => void;
  }
}

const WIDGET_SRC =
  "https://embedsocial.com/api/pro_hashtag/973b2e14734d0b773793ffb9d309776c9ec32b9d";

/** Live Google reviews (EmbedSocial). Replaces the old static review cards. */
export function ReviewsWidget() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Script
        src="https://embedsocial.com/js/iframe.js"
        strategy="lazyOnload"
        onReady={() => window.iFrameResize?.()}
      />
      <iframe
        title="Google reviews for Al Hatem Furniture Moving Company"
        src={WIDGET_SRC}
        scrolling="no"
        loading="lazy"
        className="block h-[800px] w-full border-0 md:h-[500px]"
      />
    </div>
  );
}
