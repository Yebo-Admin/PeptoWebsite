import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PeptoMeal — Better Nutrition. One Shake A Day.",
    template: "%s | PeptoMeal",
  },
  description:
    "Premium all-in-one nutritional shake with 15.3g protein, synbiotics, omega-3, and 24 vitamins & minerals. Delicious flavours. Complete nutrition. Anytime, anywhere.",
  keywords: [
    "PeptoMeal",
    "nutritional shake",
    "meal replacement",
    "protein shake",
    "South Africa",
    "complete nutrition",
    "synbiotics",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "PeptoMeal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
