import Header from "@/components/Header";

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen overflow-hidden ">
      <Header />
      <div className="overflow-y-scroll h-full w-full pb-10">{children}</div>
      <div className=" w-full h-full ">
        <Footer />
      </div>
    </main>
  );
}
