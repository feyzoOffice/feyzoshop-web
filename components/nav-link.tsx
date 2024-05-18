"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { DrawerClose } from "./ui/drawer";

export default function NavigationLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      {...rest}
      legacyBehavior
      passHref
    >
      <NavigationMenuLink
        active={isActive}
        className={navigationMenuTriggerStyle()}
      >
        <DrawerClose>{children}</DrawerClose>
      </NavigationMenuLink>
    </Link>
  );
}
