import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp, MobileActionBar } from "./MobileActionBar";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn-sm focus:bg-primary focus:px-4 focus:py-3 focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileActionBar />
      <FloatingWhatsApp />
    </div>
  );
}
