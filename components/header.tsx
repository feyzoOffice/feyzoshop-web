import { SignedIn, UserButton } from "@clerk/nextjs";
import { Cairo_Play } from "next/font/google";
import { ModeToggle } from "./mode-toggle";
import { NavbarDrawer } from "./navbar-drawer";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartButton } from "./shopping-cart-button";

const cairoPlay = Cairo_Play({ subsets: ["arabic"] });

export function Header() {
  return (
    <div className="mt-3 flex flex-col items-center">
      <div className="flex justify-between items-center mt-3 w-4/5 md:w-5/6">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="فيزو لصناعة وتجارة الألبسة"
              />
            </div>
            <h1
              className={`hidden md:block font-bold text-lg ${cairoPlay.className}`}
            >
              فيزو لصناعة وتجارة الألبسة
            </h1>
          </div>
        </Link>
        <div className="flex justify-between align-middle items-center gap-3">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ShoppingCartButton />
          <ModeToggle />
          <NavbarDrawer />
        </div>
      </div>
    </div>
  );
}
