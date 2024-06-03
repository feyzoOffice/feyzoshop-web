"use client";

import { SignedIn, SignedOut, useSession } from "@clerk/nextjs";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationLink from "./nav-link";

export function NavMenu() {
  const { session } = useSession();
  const isClient = session?.user.unsafeMetadata.role === "client";
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex w-full flex-col gap-2">
        <NavigationMenuItem>
          <NavigationLink href="/">الرئيسية</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/products">المنتجات</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/about">حول</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/contact-us">إتصل بنا</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <SignedOut>
            <NavigationMenuItem>
              <NavigationLink href="/sign-in">تسجيل الدخول</NavigationLink>
            </NavigationMenuItem>
          </SignedOut>
        </NavigationMenuItem>
        <SignedIn>
          {!isClient && (
            <NavigationMenuItem>
              <NavigationLink href="/dashboard">لوحة التحكم</NavigationLink>
            </NavigationMenuItem>
          )}
        </SignedIn>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
