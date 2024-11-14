import { SessionProvider } from "next-auth/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <main className="min-h-screen min-w-full">{children}</main>
    </SessionProvider>
  );
}
