import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://encoderai.in"),

  title: {
    default: "Encoder — The Operating System for Modern Businesses",
    template: "%s | Encoder",
  },

  description:
    "Encoder builds and runs your entire business platform — from infrastructure to operations — unified in a single AI-powered system.",

  openGraph: {
    title: "Encoder — The Operating System for Modern Businesses",
    description:
      "Build, operate, and scale your business on a unified AI-native platform.",
    url: "https://encoderai.in",
    siteName: "Encoder",
    images: [
      {
        url: "https://encoderai.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Encoder — The Operating System for Modern Businesses",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Encoder",
    description:
      "The Operating System for Modern Businesses.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Encoder",
    url: "https://encoderai.in",
    logo: "https://encoderai.in/favicon.svg",
    sameAs: [
      "https://www.linkedin.com/company/encoderai",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
