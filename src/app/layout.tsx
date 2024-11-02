import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";
import Header from "@/components/Header";

import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "500", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetterWhips",
  description: "selling car company",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${roboto.className} antialiased flex flex-col w-full`}
        >
          <NextTopLoader />
          <ConvexClientProvider>
            <Header />
            {children}
            <div className="bg-sky w-full">
              <Footer />
            </div>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
