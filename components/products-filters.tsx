"use client";

import { usePathname, useRouter } from "next/navigation";

import { Filter } from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  addFilter,
  deleteFilter,
} from "@/lib/redux/slices/filters/filters-slice";
import { Badge } from "./ui/badge";

export function ProductsFilters({
  createQueryString,
  deleteQueryString,
}: {
  createQueryString: (name: string, value: string) => string;
  deleteQueryString: (name: string, value: string) => string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  // let params: { value: string; key: string }[] = [];
  // searchParams.forEach((value, key) => params.push({ value, key }));

  return (
    <div className="mt-3 flex flex-col items-center gap-3">
      <div className="flex w-3/4 items-center justify-center gap-2">
        <FilterDrawer
          createQueryString={createQueryString}
          deleteQueryString={deleteQueryString}
        />

        <Input
          type="search"
          onChange={(e) => {
            router.push(
              pathname + "?" + createQueryString("search", e.target.value),
            );
          }}
          placeholder="ابحث عن منتج..."
        />
      </div>
    </div>
  );
}

const FilterDrawer = ({
  createQueryString,
  deleteQueryString,
}: {
  createQueryString: (name: string, value: string) => string;
  deleteQueryString: (name: string, value: string) => string;
}) => {
  const state = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          {state.filters.length > 0 && (
            <Badge className="relative -ml-2">
              {state.filters.length > 9 ? "+9" : state.filters.length}
            </Badge>
          )}
          <Filter />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col items-start justify-center gap-2 p-3">
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
                pathname + "?" + createQueryString("category_id", "1"),
              );
              dispatch(addFilter({ name: "بنطال", id: "1" }));
            }}
          >
            Category 1
          </Button>
          <Button
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("category_id", "2"),
              );
            }}
          >
            Category 2
          </Button>

          <Button
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("category_id", "3"),
              );
            }}
          >
            Category 3
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">رجوع</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
