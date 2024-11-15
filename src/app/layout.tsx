import type { Metadata } from "next";
import localFont from "next/font/local";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
    <html lang="en">
      <body
        className={`${roboto.className} antialiased scroll-smooth flex flex-col w-full h-full `}
      >
        <NextTopLoader />

        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
