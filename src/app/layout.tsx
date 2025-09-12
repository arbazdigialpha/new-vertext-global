import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "../scss/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOSProvider from "./components/AOSProvider";

export const metadata: Metadata = {
  // Basic Meta Tags
  title: "Vertex Globals - Your Trusted Partner in Global Business Solutions",
  description: "Vertex Globals provides comprehensive business solutions across multiple industries including banking, finance, healthcare, retail, and more. We deliver innovative, scalable solutions that drive business growth and digital transformation.",

  // Meta Tags Start
  // ========================================
  // SEO & Search Engine Optimization
  // ========================================
  keywords: "business solutions, global consulting, digital transformation, banking solutions, healthcare technology, retail solutions, financial services, IT consulting, business strategy, technology consulting",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

  // Open Graph Meta Tags (Social Media)
  openGraph: {
    title: "Vertex Globals - Global Business Solutions & Consulting",
    description: "Transform your business with Vertex Globals. Expert consulting in banking, healthcare, retail, and finance. Drive innovation and growth with our comprehensive solutions.",
    url: "https://vertexglobals.com",
    siteName: "Vertex Globals",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Vertex Globals - Global Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Vertex Globals - Global Business Solutions & Consulting",
    description: "Transform your business with Vertex Globals. Expert consulting in banking, healthcare, retail, and finance.",
    images: ["/images/logo/logo.svg"],
    creator: "@vertexglobals",
    site: "@vertexglobals",
  },

  // Additional SEO Meta Tags
  authors: [{ name: "Vertex Globals Team" }],
  creator: "Vertex Globals",
  publisher: "Vertex Globals",
  category: "Business & Consulting",
  classification: "Business Services",

  // Language and Regional Meta Tags
  alternates: {
    canonical: "https://vertexglobals.com",
    languages: {
      "en-US": "https://vertexglobals.com",
      "en": "https://vertexglobals.com",
    },
  },

  // Icons and Favicon
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Meta Tags End
  // ========================================
};

// Viewport configuration (moved from metadata to fix warnings)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#0a2a4a",
  colorScheme: "light",
  userScalable: true,
  viewportFit: "cover",
};

// Load Nunito font from Google
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <AOSProvider>
        <Header />
        <main className="vertex-globale">{children}</main>
        <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
