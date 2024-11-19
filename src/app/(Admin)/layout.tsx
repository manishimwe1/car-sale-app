import DashBoardSideBar from "@/components/DashBoardSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-to-r  from-blue-50/20 via-blue-100/20 to-blue-200/20 overflow-hidden flex flex-col h-full w-full">
      <section className="flex md:flex-row relative flex-col-reverse overflow-hidden h-full  w-full ">
        <div className=" w-full fixed md:relative bottom-0 md:w-60 h-16  md:flex items-center justify-start md:h-screen  ">
          <div className="w-full h-full bg-slate-950 md:bg-transparent rounded-t-xl ">
            <DashBoardSideBar />
          </div>
        </div>

        <div className="pb-12 overflow-y-scroll border-l-2 shadow-sm shadow-sky h-full w-full px-2 md:px-5 ">
          {children}
        </div>
      </section>
    </main>
  );
}
