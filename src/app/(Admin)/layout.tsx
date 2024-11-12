import DashBoardSideBar from "@/components/DashBoardSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen items-center justify-between">
      {/* <DashBoardHeader /> */}
      <section className="flex  ">
        <DashBoardSideBar />

        {children}
      </section>
    </main>
  );
}
