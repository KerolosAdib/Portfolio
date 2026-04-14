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
  title: "Kero Adib | Software Engineer",
  description:
    "Portfolio of Kero Adib — Backend and AI Software Engineer with experience at Google and Zazmic, specializing in scalable backend systems, API design, and AI-driven automation.",
  openGraph: {
    title: "Kero Adib | Software Engineer",
    description:
      "Backend and AI Software Engineer with experience at Google and Zazmic. Building scalable backend systems and AI-powered tools.",
    url: "https://keroadib.com",
    siteName: "Kero Adib",
    images: [
      {
        url: "/image0.jpg",
        width: 873,
        height: 1290,
        alt: "Kero Adib — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kero Adib | Software Engineer",
    description:
      "Backend and AI Software Engineer with experience at Google and Zazmic. Building scalable backend systems and AI-powered tools.",
    images: ["/image0.jpg"],
  },
  metadataBase: new URL("https://keroadib.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
