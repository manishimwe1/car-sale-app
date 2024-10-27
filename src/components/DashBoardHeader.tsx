import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DashBoardHeader = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center w-full overflow-x-hidden gap-4  z-50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
      <nav className=" gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between  w-full md:gap-5 md:text-sm lg:gap-6">
        <Link href="/">
          <div className=" h-10 w-40 relative">
            <Image src={"/fav.png"} alt="logo" fill className="invert" />
          </div>
          <span className="sr-only">BetterWhips</span>
        </Link>
        {/* <div className="md:flex items-center gap-3 hidden">
          <Link
            href="#"
            className="text-white transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white transition-colors hover:text-foreground"
          >
            Vehicles
          </Link>
          <Link
            href="#"
            className="text-white transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-white transition-colors hover:text-foreground"
          >
            Contacts
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
        </div> */}
      </nav>

      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 mr-5">
        <DropdownMenu>
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
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashBoardHeader;
