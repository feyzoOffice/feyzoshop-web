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
import { ScrollArea } from "./ui/scroll-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  addFilter,
  deleteFilter,
} from "@/lib/redux/slices/filters/filters-slice";
import { Badge } from "./ui/badge";
import { useGetCategoriesQuery } from "@/lib/redux/slices/categories/categories-slice";
import { useGetClassesQuery } from "@/lib/redux/slices/classes/classes-slice";
import { useGetSizesQuery } from "@/lib/redux/slices/sizes/sizes-slice";
import { useGetColorsQuery } from "@/lib/redux/slices/colors/colors-slice";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

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
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useGetCategoriesQuery({});
  const {
    data: classes,
    isLoading: isLoadingClasses,
    isError: isErrorClasses,
  } = useGetClassesQuery({});
  const {
    data: sizes,
    isLoading: isLoadingSizes,
    isError: isErrorSizes,
  } = useGetSizesQuery({});
  const {
    data: colors,
    isLoading: isLoadingColors,
    isError: isErrorColors,
  } = useGetColorsQuery({});
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
        <ScrollArea className="h-full w-full rounded-md border p-4" dir="rtl">
          <div className="flex w-full flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                router.push(pathname);
              }}
            >
              جميع المنتجات
            </Button>
            <Card>
              <CardHeader>
                <CardTitle>الفئات</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="all" dir="rtl">
                  <div className="flex items-center gap-3 space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">الجميع</Label>
                  </div>
                  {(classes !== null || classes !== undefined) &&
                    classes?.map((cla) => (
                      <div
                        className="flex items-center gap-3 space-x-2"
                        key={cla.id}
                      >
                        <RadioGroupItem
                          value={String(cla.title)}
                          id={String(cla.title)}
                        />
                        <Label htmlFor={String(cla.title)}>{cla.title}</Label>
                      </div>
                    ))}
                </RadioGroup>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>التصنيفات</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="all" dir="rtl">
                  <div className="flex items-center gap-3 space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">الجميع</Label>
                  </div>
                  {(categories !== null || categories !== undefined) &&
                    categories?.map((category) => (
                      <div
                        className="flex items-center gap-3 space-x-2"
                        key={category.id}
                      >
                        <RadioGroupItem
                          value={String(category.title)}
                          id={String(category.title)}
                        />
                        <Label htmlFor={String(category.title)}>
                          {category.title}
                        </Label>
                      </div>
                    ))}
                </RadioGroup>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>القياس</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {(sizes !== null || sizes !== undefined) &&
                    sizes?.map((size) => (
                      <div
                        className="flex items-center gap-3 space-x-2"
                        key={size.id}
                      >
                        <Checkbox id={String(size.size)} />
                        <label
                          htmlFor={String(size.size)}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {size.size}
                        </label>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>اللون</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {(colors !== null || colors !== undefined) &&
                    colors?.map((color) => (
                      <div
                        className="flex items-center gap-3 space-x-2"
                        key={color.id}
                      >
                        <Checkbox id={String(color.title)} />
                        <label
                          htmlFor={String(color.title)}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {color.title}
                        </label>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">رجوع</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

// <Button
//             onClick={() => {
//               router.push(
//                 pathname + "?" + createQueryString("category_id", "1"),
//               );
//               dispatch(addFilter({ name: "بنطال", id: "1" }));
//             }}
//           >
//             Category 1
//           </Button>
//           <Button
//             onClick={() => {
//               router.push(
//                 pathname + "?" + createQueryString("category_id", "2"),
//               );
//             }}
//           >
//             Category 2
//           </Button>

//           <Button
//             onClick={() => {
//               router.push(
//                 pathname + "?" + createQueryString("category_id", "3"),
//               );
//             }}
//           >
//             Category 3
//           </Button>
