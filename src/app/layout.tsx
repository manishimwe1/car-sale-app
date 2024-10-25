import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Roboto } from "next/font/google";
import Header from "../components/Header";

const roboto = Roboto({
  weight: ["400", "500", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetterWhips",
  description: "selling car company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased container mx-auto px-2.5`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
