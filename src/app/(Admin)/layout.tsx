import DashBoardSideBar from "@/components/DashBoardSideBar";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-to-r from-blue-50/20 via-blue-100/20 to-blue-200/20 overflow-hidden flex flex-col">
      <Header />
      <section className="flex flex-col relative overflow-hidden h-screen  w-full ">
        <div className="border overflow-hidden w-full md:w-60 min-h-20 fixed bottom-0 md:min-h-screen  rounded-t-3xl shadow-md shadow-blue-400 z-20 bg-slate-950 md:bg-neutral-50">
          <DashBoardSideBar />
        </div>

        <div className="pb-12 overflow-y-scroll px-6 h-full w-full">
          {children}
        </div>
      </section>
    </main>
  );
}
