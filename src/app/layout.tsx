import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

export const metadata: Metadata = {
  title: {
    default: "PeptoMeal — Better Nutrition. One Shake A Day.",
    template: "%s | PeptoMeal",
  },
  description:
    "PeptoMeal is a complete nutritional shake designed to support energy, recovery and daily wellbeing. 15.3g protein, synbiotics, omega-3, and 24 vitamins & minerals in every serving.",
  keywords: [
    "PeptoMeal",
    "nutritional shake",
    "meal replacement",
    "protein shake",
    "South Africa",
    "complete nutrition",
    "synbiotics",
    "gut health",
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
    <html lang="en" className="antialiased">
      <body className="min-h-[100dvh] flex flex-col" style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
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
