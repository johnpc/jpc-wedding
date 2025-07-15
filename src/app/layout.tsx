import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John & Emily - July 11, 2026",
  description: "Join us as we celebrate our wedding at Circ in Ann Arbor",
  keywords: ["wedding", "John", "Emily", "Ann Arbor", "Circ"],
  manifest: "/manifest.json",
  applicationName: "J&E Wedding",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "J&E Wedding",
  },
  icons: {
    icon: [
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-57.png", sizes: "57x57", type: "image/png" },
      { url: "/icons/icon-60.png", sizes: "60x60", type: "image/png" },
      { url: "/icons/icon-72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/icon-76.png", sizes: "76x76", type: "image/png" },
      { url: "/icons/icon-114.png", sizes: "114x114", type: "image/png" },
      { url: "/icons/icon-120.png", sizes: "120x120", type: "image/png" },
      { url: "/icons/icon-144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon-152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#8B5A3C",
    "msapplication-TileImage": "/icons/icon-144.png",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
    "msapplication-tap-highlight": "no",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B5A3C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
