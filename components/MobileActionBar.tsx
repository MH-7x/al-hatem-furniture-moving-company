import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { BUSINESS } from "@/lib/constants";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <a href={BUSINESS.phoneHref} className="btn btn-dark flex-1">
        <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
        Call now
      </a>
      <a
        href={BUSINESS.whatsappQuoteHref}
        target="_blank"
        rel="noopener"
        className="btn btn-whatsapp flex-1"
      >
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </a>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS.whatsappQuoteHref}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-[0.9375rem] font-semibold text-white shadow-xl hover:bg-whatsapp-hover md:inline-flex"
    >
      <WhatsAppIcon className="size-5" />
      WhatsApp us
    </a>
  );
}
