import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import PageTransition from "./components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natscape - Creative Studio",
  description:
    "A professional portfolio website showcasing creative works and technical expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
