import type { Metadata } from "next";
import { Space_Grotesk, Rubik, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kero Adib | Software Engineer",
  description:
    "Portfolio of Kero Adib. Software Engineer with experience at Google and Zazmic, specializing in scalable backend systems, API design, and AI-driven automation.",
  openGraph: {
    title: "Kero Adib | Software Engineer",
    description:
      "Software Engineer. ex-Google, now building agentic systems at Zazmic.",
    url: "https://keroadib.com",
    siteName: "Kero Adib",
    images: [
      {
        url: "/image0.jpg",
        width: 873,
        height: 1290,
        alt: "Kero Adib, Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kero Adib | Software Engineer",
    description:
      "Software Engineer. ex-Google, now building agentic systems at Zazmic.",
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
      className={`${spaceGrotesk.variable} ${rubik.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
