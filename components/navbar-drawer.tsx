import { MenuIcon } from "lucide-react";
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
  const date = new Date();
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center justify-center">
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
        <div className="flex flex-col items-center justify-center">
          <NavMenu />
        </div>
        <DrawerFooter>
          <DrawerDescription className="text-xs">
            &copy; {date.getFullYear()} جميع الحقوق محفوظة - فيزو لصناعة وتجارة
            الألبسة
          </DrawerDescription>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
