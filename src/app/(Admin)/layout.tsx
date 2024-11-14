import DashBoardSideBar from "@/components/DashBoardSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-to-r from-blue-50/20 via-blue-100/20 to-blue-200/20 overflow-hidden">
      {/* <DashBoardHeader /> */}
      <section className="flex flex-col relative  h-screen  w-full ">
        <div className="w-full h-20 md:min-h-screen  rounded-t-3xl shadow-md shadow-blue-400 flex items-center z-20 bg-slate-950 lg:bg-neutral-50 py-5 justify-center absolute bottom-0  inset-x-0">
          <DashBoardSideBar />
        </div>

        {children}
      </section>
    </main>
  );
}
