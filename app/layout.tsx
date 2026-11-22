import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { rootSchema } from "@/lib/schema";
import "./globals.css";
import GTM from "@/components/GTM";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Al Hatem Furniture Moving Company",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    siteName: "Al Hatem Furniture Moving Company",
    images: [
      {
        url: "/images/global/al-hatem-movers-og-default.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFDC39",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" dir="ltr" className={publicSans.variable}>
      <body>
        <JsonLd data={rootSchema()} />
        {children}
        <GTM />
      </body>
    </html>
  );
}
