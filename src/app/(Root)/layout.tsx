import Header from "@/components/Header";

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Header />
      {children}
      <div className=" w-full">
        <Footer />
      </div>
    </body>
  );
}
