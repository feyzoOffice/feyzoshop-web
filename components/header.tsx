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
      <div className="mt-3 flex w-4/5 items-center justify-between md:w-5/6">
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
              className={`hidden text-lg font-bold md:block ${cairoPlay.className}`}
            >
              فيزو لصناعة وتجارة الألبسة
            </h1>
          </div>
        </Link>
        <div className="flex items-center justify-between gap-3 align-middle">
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
