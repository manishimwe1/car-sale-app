import type { Metadata } from "next";
import localFont from "next/font/local";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
const roboto = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  display: "swap",
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
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${roboto.className} antialiased flex flex-col w-full h-full overflow-hidden`}
      >
        <NextTopLoader />

        <ConvexClientProvider>
          {children}
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
