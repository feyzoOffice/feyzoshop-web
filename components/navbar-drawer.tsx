import { MenuIcon, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "./nav-menu";

export function NavbarDrawer() {
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col justify-center items-center">
          <DrawerTitle>
            <Link href="/">
              <DrawerClose>
                <Image
                  src="/logo.png"
                  width={40}
                  height={40}
                  alt="فيزو لصناعة وتجارة الألبسة"
                />
              </DrawerClose>
            </Link>
          </DrawerTitle>
          <DrawerDescription>فيزو لصناعة وتجارة الألبسة</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col justify-center items-center">
          <NavMenu />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
