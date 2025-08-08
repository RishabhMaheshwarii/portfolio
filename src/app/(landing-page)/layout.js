import Script from "next/script"; // ✅ Import Script
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

// Move font definitions outside component
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Rishabh Maheshwari",
  description: "0 to 1",
};

export default function RootLayout({ children }) {
  const bodyClasses = [
    outfit.variable,
    geistSans.variable,
    geistMono.variable,
    "antialiased",
  ].join(" ");

  return (
    <html lang="en">
      <head>
        {/* ✅ Load GA4 gtag.js script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2L1W9V2GCG"
          strategy="afterInteractive"
        />
        {/* ✅ Configure GA4 tracking */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2L1W9V2GCG');
          `}
        </Script>
      </head>
      <body className={bodyClasses}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
