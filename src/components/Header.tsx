import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 md:px-3 px-2 items-center w-full overflow-x-hidden gap-4  z-50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
      <nav className=" gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between  w-full md:gap-5 md:text-sm lg:gap-6">
        <Link href="/">
          <div className=" h-10 w-40 relative">
            <Image src={"/fav.png"} alt="logo" fill />
          </div>
          <span className="sr-only">BetterWhips</span>
        </Link>
        <div className="md:flex items-center gap-5 hidden">
          <Link
            href="#"
            className="text-slate-900 font-semibold  transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-slate-900 font-semibold  transition-colors hover:text-foreground"
          >
            Vehicles
          </Link>
          <Link
            href="#"
            className="text-slate-900 font-semibold  transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-slate-900 font-semibold  flex text-center flex-col  transition-colors hover:text-foreground"
          >
            Call us on
            <span>0798894137</span>
          </Link>

          <form className="ml-auto flex-1 sm:flex-initial ">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white" />
              <Input
                type="search"
                placeholder="Search car..."
                className="pl-8 sm:w-[300px] md:w-[200px] text-white lg:w-[300px] placeholder:text-white/50"
              />
            </div>
          </form>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 mr-5">
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-red-600">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </header>
  );
};

export default Header;
