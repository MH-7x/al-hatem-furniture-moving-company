import Link from "next/link";
import { ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { WhatsAppIcon, socialIcons } from "./icons";
import {
  BUSINESS,
  DUBAI_AREA_LINKS,
  EMIRATE_LINKS,
  SERVICE_LINKS,
  activeSocials,
} from "@/lib/constants";

const navLink =
  "inline-flex min-h-11 items-center gap-1 rounded-btn-sm px-3 text-[0.9375rem] font-semibold text-black hover:bg-neutral";

const dropLink =
  "block rounded-btn-sm px-3 py-2 text-[0.9375rem] font-medium text-body hover:bg-primary hover:text-black";

function Drop({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`invisible absolute top-full z-50 translate-y-1 pt-2 opacity-0 transition duration-150 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 ${
        wide ? "left-1/2 w-[38rem] -translate-x-1/2" : "left-0 w-[22rem]"
      }`}
    >
      <div className="rounded-card border border-line bg-white p-3 shadow-xl">
        {children}
      </div>
    </div>
  );
}

export function Header() {
  const socials = activeSocials();

  return (
    <header className="sticky top-0 z-50 bg-white md:-top-10">
      <div className="on-dark hidden h-10 bg-secondary text-[0.8125rem] text-white md:block">
        <div className="wrap flex h-full items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Phone
                className="size-4 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>Call: {BUSINESS.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS.emailHref}
              className="hidden items-center gap-2 hover:text-primary lg:inline-flex"
            >
              <Mail
                className="size-4 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>Email: {BUSINESS.email}</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock
                className="size-4 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              Open 24 Hours
            </span>
          </div>
          {socials.length > 0 && (
            <ul className="flex items-center gap-1">
              {socials.map((s) => {
                const Icon = socialIcons[s.name];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${BUSINESS.shortName} on ${s.name}`}
                      className="grid size-8 place-items-center rounded-full hover:text-primary"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="border-b border-line bg-white">
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="nav-menu flex items-center gap-1">
              <li>
                <Link href="/" className={navLink}>
                  Home
                </Link>
              </li>
              <li className="group/nav relative">
                <Link href="/services/" className={navLink}>
                  Services
                  <ChevronDown className="size-4" aria-hidden="true" />
                </Link>
                <Drop>
                  <ul>
                    {SERVICE_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className={dropLink}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Drop>
              </li>
              <li className="group/nav relative">
                <Link href="/areas-we-serve/" className={navLink}>
                  Areas We Serve
                  <ChevronDown className="size-4" aria-hidden="true" />
                </Link>
                <Drop wide>
                  <div className="grid grid-cols-[1.25fr_1fr] gap-x-4">
                    <div>
                      <p className="eyebrow px-3 pb-1 pt-1">
                        Dubai communities
                      </p>
                      <ul>
                        {DUBAI_AREA_LINKS.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className={dropLink}>
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow px-3 pb-1 pt-1">Other emirates</p>
                      <ul>
                        {EMIRATE_LINKS.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className={dropLink}>
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Drop>
              </li>
              <li>
                <Link href="/about/" className={navLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contacts/" className={navLink}>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.whatsappQuoteHref}
              target="_blank"
              rel="noopener"
              aria-label="Chat with Al Hatem Movers on WhatsApp"
              className="grid size-11 place-items-center rounded-btn-sm bg-whatsapp text-white hover:bg-whatsapp-hover lg:hidden"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <Button
              href={BUSINESS.whatsappQuoteHref}
              className="hidden lg:inline-flex"
            >
              Get A Quote
            </Button>

            <details className="group lg:hidden">
              <summary
                className="grid size-11 list-none place-items-center rounded-btn-sm bg-primary text-black [&::-webkit-details-marker]:hidden"
                aria-label="Menu"
              >
                <Menu className="size-6 group-open:hidden" aria-hidden="true" />
                <X
                  className="hidden size-6 group-open:block"
                  aria-hidden="true"
                />
              </summary>
              <nav
                aria-label="Mobile"
                className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white shadow-xl"
              >
                <ul className="wrap py-3">
                  <li>
                    <Link
                      href="/"
                      className="block rounded-btn-sm px-2 py-3 text-lg font-semibold text-black"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <details className="group/sub">
                      <summary className="flex items-center justify-between rounded-btn-sm px-2 py-3 text-lg font-semibold text-black [&::-webkit-details-marker]:hidden list-none">
                        Services
                        <ChevronDown
                          className="size-5 transition-transform group-open/sub:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <ul className="mb-2 ml-2 border-l-2 border-primary pl-3">
                        <li>
                          <Link
                            href="/services/"
                            className="block py-2.5 font-semibold text-black"
                          >
                            All services
                          </Link>
                        </li>
                        {SERVICE_LINKS.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="block py-2.5 text-body"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="group/sub">
                      <summary className="flex items-center justify-between rounded-btn-sm px-2 py-3 text-lg font-semibold text-black [&::-webkit-details-marker]:hidden list-none">
                        Areas We Serve
                        <ChevronDown
                          className="size-5 transition-transform group-open/sub:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <ul className="mb-2 ml-2 border-l-2 border-primary pl-3">
                        <li>
                          <Link
                            href="/areas-we-serve/"
                            className="block py-2.5 font-semibold text-black"
                          >
                            All areas
                          </Link>
                        </li>
                        {[...DUBAI_AREA_LINKS, ...EMIRATE_LINKS].map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="block py-2.5 text-body"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link
                      href="/about/"
                      className="block rounded-btn-sm px-2 py-3 text-lg font-semibold text-black"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacts/"
                      className="block rounded-btn-sm px-2 py-3 text-lg font-semibold text-black"
                    >
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy/"
                      className="block rounded-btn-sm px-2 py-3 text-lg font-semibold text-black"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
