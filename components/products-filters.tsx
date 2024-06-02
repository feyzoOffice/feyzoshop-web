"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Filter } from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export function ProductFilters({
  createQueryString,
  deleteQueryString,
}: {
  createQueryString: (name: string, value: string) => string;
  deleteQueryString: (name: string, value: string) => string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // let params: { value: string; key: string }[] = [];
  // searchParams.forEach((value, key) => params.push({ value, key }));

  return (
    <div className="mt-3 flex flex-col items-center gap-3">
      <div className="flex justify-center items-center w-3/4 gap-2">
        <FilterDrawer />
        <Input
          type="search"
          onChange={(e) => {
            router.push(
              pathname + "?" + createQueryString("search", e.target.value)
            );
          }}
          placeholder="ابحث عن منتج..."
        />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>الفلاتر</AccordionTrigger>
          <AccordionContent className="flex flex-col items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                router.push(pathname);
              }}
            >
              جميع المنتجات
            </Button>
            <Button
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("category_id", "1")
                );
              }}
            >
              Category 1
            </Button>
            <Button
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("category_id", "2")
                );
              }}
            >
              Category 2
            </Button>

            <Button
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("category_id", "3")
                );
              }}
            >
              Category 3
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const FilterDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Button variant="outline" size="icon">
          <Filter />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
