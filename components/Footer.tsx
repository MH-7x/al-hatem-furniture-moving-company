import Link from "next/link";
import { ArrowUp, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { MapBlock } from "./MapBlock";
import { WhatsAppIcon, socialIcons } from "./icons";
import {
  BUSINESS,
  DUBAI_AREA_LINKS,
  EMIRATE_LINKS,
  SERVICE_LINKS,
  activeSocials,
} from "@/lib/constants";

const footLink = "inline-block py-1.5 text-white/80 hover:text-primary";
const colHead = "mb-4 text-base font-bold text-white";

export function Footer() {
  const socials = activeSocials();
  const footerAreas = [
    ...DUBAI_AREA_LINKS.filter((l) => l.footer),
    ...EMIRATE_LINKS,
  ];

  return (
    <footer className="on-dark bg-dark text-white/80">
      <div className="wrap py-14 lg:py-20">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <Logo light />
          {socials.length > 0 && (
            <ul className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = socialIcons[s.name];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${BUSINESS.shortName} on ${s.name}`}
                      className="grid size-11 place-items-center rounded-full border border-white/25 text-white hover:border-primary hover:bg-primary hover:text-black"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="grid gap-12 pt-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h2 className={colHead}>{BUSINESS.name}</h2>
            <p className="mb-5 text-white/60" lang="ar" dir="rtl">
              {BUSINESS.arabicName}
            </p>
            <address className="space-y-3 not-italic">
              <p className="flex gap-3">
                <Phone
                  className="mt-1 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>
                  Phone/WhatsApp:{" "}
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-white hover:text-primary"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </span>
              </p>
              <p className="flex gap-3">
                <WhatsAppIcon className="mt-1 size-4 shrink-0 text-primary" />
                <span>
                  WhatsApp:{" "}
                  <a
                    href={BUSINESS.whatsappHref}
                    target="_blank"
                    rel="noopener"
                    className="text-white hover:text-primary"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </span>
              </p>
              <p className="flex gap-3">
                <Mail
                  className="mt-1 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">
                  Email:{" "}
                  <a
                    href={BUSINESS.emailHref}
                    className="text-white hover:text-primary"
                  >
                    {BUSINESS.email}
                  </a>
                </span>
              </p>
              <p className="flex gap-3">
                <Clock
                  className="mt-1 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>Hours: {BUSINESS.hours}</span>
              </p>
              <p className="flex gap-3">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>Address: {BUSINESS.addressFull}</span>
              </p>
            </address>
            <a
              href={BUSINESS.mapsHref}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4 hover:text-white"
            >
              View on Google Maps
            </a>
            <MapBlock className="mt-5 border-white/15" frameClassName="h-56" />
          </div>

          <nav aria-label="Services">
            <h2 className={colHead}>Services</h2>
            <ul>
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={footLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Areas we serve">
            <h2 className={colHead}>Areas We Serve</h2>
            <ul className="columns-2 gap-6">
              {footerAreas.map((l) => (
                <li key={l.href} className="break-inside-avoid">
                  <Link href={l.href} className={footLink}>
                    {l.short}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-col gap-5 pb-28 pt-6 text-sm md:flex-row md:items-center md:justify-between md:pb-6">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li>
                <Link href="/" className={footLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/" className={footLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas-we-serve/" className={footLink}>
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="/about/" className={footLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contacts/" className={footLink}>
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className={footLink}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <p>
              © 2026 {BUSINESS.name} ·{" "}
              <span lang="ar">{BUSINESS.arabicName}</span>
            </p>
            <a
              href="#top"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-white hover:text-primary"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>
        <p className="text-sm text-center pb-5">
          Design & Development by{" "}
          <a
            href="https://mashalhuraira.vercel.app"
            className="text-primary"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            Mashal Huraira
          </a>
        </p>
      </div>
    </footer>
  );
}
