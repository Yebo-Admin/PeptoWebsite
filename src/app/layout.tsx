import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

export const metadata: Metadata = {
  title: {
    default: "PeptoMeals — Biological Fuel. 30g Protein. 85+ Superfoods.",
    template: "%s | PeptoMeals",
  },
  description:
    "Premium plant-based nutritional shake with 30g protein, 85+ superfoods, prebiotics & probiotics. Whole body nutrition in every scoop. Born in South Africa.",
  keywords: [
    "PeptoMeals",
    "VitaShake",
    "nutritional shake",
    "meal replacement",
    "plant protein",
    "South Africa",
    "superfoods",
    "gut health",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "PeptoMeals",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-[100dvh] flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
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
