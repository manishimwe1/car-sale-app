import DashBoardSideBar from "@/components/DashBoardSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-y-scroll overflow-x-hidden h-screen items-center py-10 justify-between  w-screen">
      {/* <DashBoardHeader /> */}
      <section className="flex  ">
        <DashBoardSideBar />

        {children}
      </section>
    </main>
  );
}
