import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found | Al Hatem Furniture Moving Company",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Shell>
      <Section labelledBy="nf-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Error 404</p>
          <h1 id="nf-title">This page could not be found</h1>
          <p className="mt-5">
            The page you are looking for may have moved or no longer exists. Use the links below or
            call us on {BUSINESS.phoneDisplay} and we will help you directly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/services/" variant="secondary" size="lg">
              Our Services
            </Button>
            <Button href="/contacts/" variant="neutral" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </Shell>
  );
}
