import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/PageHeader";
import { Callout } from "@/components/Cards";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/privacy-policy/";
const TITLE = "Privacy Policy | Al Hatem Furniture Moving Company";
const DESCRIPTION =
  "Read the Al Hatem Furniture Moving Company privacy policy: how we collect, use, store and protect personal information shared with us.";
const IMAGE = "/images/global/al-hatem-movers-og-default.webp";
const IMAGE_ALT = "Al Hatem Furniture Moving Company movers and truck in Dubai";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const schema = pageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  crumbs: [["Privacy Policy", PATH]],
});

const toc =
  "flex min-h-9 items-center rounded-btn-sm px-3 text-[0.9375rem] text-body hover:bg-primary hover:text-black";

export default function PrivacyPolicyPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <section className="bg-neutral pb-12 pt-8 lg:pb-16 lg:pt-10">
        <div className="wrap">
          <Breadcrumb items={[["Home", "/"], ["Privacy Policy"]]} />
          <h1>Privacy Policy</h1>
          <p className="mt-5 font-semibold text-black">Last Updated: 19 November 2026</p>
        </div>
      </section>

      <section aria-label="Privacy policy" className="section-y">
        <div className="wrap grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3 px-3">On this page</p>
            <ul>
              <li><a href="#glance" className={toc}>Privacy at a Glance</a></li>
              <li><a href="#collect" className={toc}>Information We Collect</a></li>
              <li><a href="#use" className={toc}>How We Use Your Information</a></li>
              <li><a href="#cookies" className={toc}>Cookies and Website Analytics</a></li>
              <li><a href="#protect" className={toc}>How We Protect Your Information</a></li>
              <li><a href="#share" className={toc}>When We Share Information</a></li>
              <li><a href="#third-party" className={toc}>Third-Party Services</a></li>
              <li><a href="#transfers" className={toc}>International Transfers</a></li>
              <li><a href="#retention" className={toc}>Data Retention</a></li>
              <li><a href="#rights" className={toc}>Your Privacy Rights</a></li>
              <li><a href="#children" className={toc}>Children’s Privacy</a></li>
              <li><a href="#updates" className={toc}>Updates to This Privacy Policy</a></li>
              <li><a href="#contact" className={toc}>Contact Us</a></li>
            </ul>
          </nav>

          <div className="rich max-w-3xl min-w-0">
            <p>
              At <Link href="/">Al Hatem Furniture Moving Company</Link>, we respect your privacy
              and are committed to protecting the personal information you share with us. This
              Privacy Policy explains how we collect, use, store, and protect your information when
              you visit our website, request a quote, contact our team, or use our moving, packing,
              storage, and cargo services.
            </p>
            <p>
              This Privacy Policy is designed in accordance with applicable privacy and data
              protection requirements, including the UAE Personal Data Protection Law (Federal
              Decree-Law No. 45 of 2021), where applicable.
            </p>

            <h2 id="glance">Privacy at a Glance</h2>
            <Callout>
              <p>
                We collect only the information needed to provide our services, respond to
                inquiries, process bookings, and improve customer experience. We do not sell or rent
                customer information to third parties.
              </p>
            </Callout>

            <h2 id="collect">Information We Collect</h2>
            <p>We may collect information when you:</p>
            <ul>
              <li>Request a moving quote</li>
              <li>Contact us by phone, email, WhatsApp, or contact form</li>
              <li>Book a moving, storage, or cargo service</li>
              <li>Submit an inquiry through our website</li>
              <li>Communicate with our customer support team</li>
            </ul>
            <p>The information collected may include:</p>
            <ul>
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Pickup Address</li>
              <li>Delivery Address</li>
              <li>Moving Date</li>
              <li>Service Requirements</li>
              <li>Inventory Details</li>
              <li>Photos or videos of items shared for quotation purposes</li>
              <li>Any information you voluntarily provide</li>
            </ul>
            <p>We may also collect certain technical information automatically, including:</p>
            <ul>
              <li>IP Address</li>
              <li>Browser Type</li>
              <li>Device Information</li>
              <li>Website Usage Data</li>
              <li>Cookies and Analytics Information</li>
            </ul>

            <h2 id="use">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Prepare and provide quotations</li>
              <li>Schedule moving, storage, and cargo services</li>
              <li>Communicate with you regarding your booking</li>
              <li>Send service reminders and updates</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve our website and customer experience</li>
              <li>Maintain business records</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
            <p>
              We only use personal information for legitimate business purposes related to the
              services we provide.
            </p>

            <h2 id="cookies">Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to improve functionality and
              understand how visitors use our website.
            </p>
            <p>Cookies may help us:</p>
            <ul>
              <li>Analyze website traffic</li>
              <li>Improve website performance</li>
              <li>Remember visitor preferences</li>
              <li>Enhance website security</li>
            </ul>
            <p>
              We may use tools such as Google Analytics or similar services to better understand
              website usage and improve customer experience.
            </p>
            <p>
              You can disable cookies through your browser settings, although some website features
              may not function correctly.
            </p>

            <h2 id="protect">How We Protect Your Information</h2>
            <p>
              We take reasonable measures to protect personal information against unauthorized
              access, misuse, loss, or disclosure.
            </p>
            <p>Our security practices may include:</p>
            <ul>
              <li>Secure website hosting</li>
              <li>SSL encryption</li>
              <li>Restricted access to customer data</li>
              <li>Employee awareness and data protection practices</li>
              <li>Regular system monitoring and updates</li>
            </ul>
            <p>
              While we take reasonable precautions, no method of electronic storage or transmission
              can be guaranteed to be completely secure.
            </p>

            <h2 id="share">When We Share Information</h2>
            <p>Al Hatem Movers does not sell, rent, or trade customer information.</p>
            <p>
              However, information may be shared when necessary to provide our services, including
              with:
            </p>
            <ul>
              <li>Moving crews and operational teams</li>
              <li>Warehouse and storage providers</li>
              <li>Transportation and logistics partners</li>
              <li>IT service providers supporting our business operations</li>
              <li>Government authorities when legally required</li>
            </ul>
            <p>
              All service providers are expected to handle information responsibly and only for the
              purposes required to deliver the requested service.
            </p>

            <h2 id="third-party">Third-Party Services</h2>
            <p>
              Our website may contain links or integrations with third-party services, including:
            </p>
            <ul>
              <li>Google Maps</li>
              <li>Google Analytics</li>
              <li>WhatsApp</li>
              <li>Social Media Platforms</li>
              <li>Payment Service Providers</li>
            </ul>
            <p>
              These services operate under their own privacy policies, and we encourage users to
              review them separately.
            </p>

            <h2 id="transfers">International Transfers</h2>
            <p>
              In some cases, information may be transferred or processed outside the UAE when
              required to provide services, support operations, or use trusted technology
              providers.
            </p>
            <p>
              Where applicable, we take reasonable steps to ensure appropriate safeguards are in
              place to protect personal information.
            </p>

            <h2 id="retention">Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary for business, legal,
              accounting, and operational purposes.
            </p>
            <p>Examples may include:</p>
            <ul>
              <li>Customer inquiries and quotations</li>
              <li>Service records and invoices</li>
              <li>Accounting and tax documentation</li>
              <li>Dispute resolution and legal compliance</li>
            </ul>
            <p>
              In many cases, business records may be retained for several years as required by
              applicable laws and regulations.
            </p>
            <p>
              When information is no longer needed, we take reasonable steps to securely delete or
              anonymize it.
            </p>

            <h2 id="rights">Your Privacy Rights</h2>
            <p>
              Depending on applicable laws, you may have rights regarding your personal information,
              including the right to:
            </p>
            <ul>
              <li>Request access to your information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of information where appropriate</li>
              <li>Restrict or object to certain processing activities</li>
              <li>Withdraw consent where consent is the legal basis for processing</li>
            </ul>
            <p>
              To submit a privacy-related request, please contact our team using the information
              provided below.
            </p>

            <h2 id="children">Children’s Privacy</h2>
            <p>
              Our services are intended for adults and business customers. We do not knowingly
              collect personal information from individuals under the age of 18.
            </p>
            <p>
              If we become aware that such information has been collected, we will take appropriate
              steps to remove it.
            </p>

            <h2 id="updates">Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              services, legal requirements, or business operations.
            </p>
            <p>
              Any updates will be published on this page along with the revised “Last Updated”
              date.
            </p>

            <h2 id="contact">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled,
              please contact us.
            </p>
            <p>
              <strong>Al Hatem Movers</strong>
            </p>
            <ul className="!list-none !pl-0">
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  Phone: <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span className="min-w-0 break-words">
                  Email: <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span className="min-w-0 break-words">
                  Website: <a href={`${SITE_URL}/`}>{SITE_URL}</a>
                </span>
              </li>
            </ul>
            <p>
              You may also contact us through our <Link href="/contacts/">Contact Us</Link> page for
              privacy-related requests or questions.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
