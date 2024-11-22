import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <main className="w-full h-screen overflow-hidden pb-6">
        <Header />
        <div className="overflow-y-scroll h-full w-full pb-10 overflow-x-hidden scroll-smooth ">
          {children}
        </div>
        <div className=" w-full h-full "></div>
      </main>
    </SessionProvider>
  );
}
