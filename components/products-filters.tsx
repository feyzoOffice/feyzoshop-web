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
  resetFilters,
} from "@/lib/redux/slices/filters/filters-slice";
import { Badge } from "./ui/badge";
import { useGetCategoriesQuery } from "@/lib/redux/slices/categories/categories-slice";
import { useGetClassesQuery } from "@/lib/redux/slices/classes/classes-slice";
import { useGetSizesQuery } from "@/lib/redux/slices/sizes/sizes-slice";
import { useGetColorsQuery } from "@/lib/redux/slices/colors/colors-slice";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { FormEventHandler } from "react";

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

  const filters = state.filters.filter((filter) => filter.value !== "all");

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          {filters.length > 0 && (
            <Badge className="relative -ml-2">
              {filters.length > 9 ? "+9" : filters.length}
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
                dispatch(resetFilters(state.filters));
                router.push(pathname);
              }}
            >
              جميع المنتجات
            </Button>
            <Classes />
            <Categories />
            <Sizes />
            <Colors />
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

const Categories = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.filters.filters);
  const category = state.find((filter) => filter.name === "category");
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useGetCategoriesQuery({});
  const handleChange = (value: string) => {
    dispatch(addFilter({ name: "category", value: String(value) }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>التصنيفات</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          dir="rtl"
          value={category?.value}
          defaultValue={category?.value}
          onValueChange={handleChange}
        >
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
                  value={String(category.id)}
                  id={String(category.title)}
                />
                <Label htmlFor={String(category.title)}>{category.title}</Label>
              </div>
            ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

const Classes = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.filters.filters);
  const cla = state.find((filter) => filter.name === "class");
  const {
    data: classes,
    isLoading: isLoadingClasses,
    isError: isErrorClasses,
  } = useGetClassesQuery({});
  const handleChange = (value: string) => {
    dispatch(addFilter({ name: "class", value: String(value) }));
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>الفئات</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          dir="rtl"
          value={cla?.value}
          defaultValue={cla?.value}
          onValueChange={handleChange}
        >
          <div className="flex items-center gap-3 space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">الجميع</Label>
          </div>
          {(classes !== null || classes !== undefined) &&
            classes?.map((cla) => (
              <div className="flex items-center gap-3 space-x-2" key={cla.id}>
                <RadioGroupItem value={String(cla.id)} id={String(cla.title)} />
                <Label htmlFor={String(cla.title)}>{cla.title}</Label>
              </div>
            ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

const Sizes = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.filters.filters);
  const filteredSizes = state.find((filter) => filter.name === "sizes");
  const {
    data: sizes,
    isLoading: isLoadingSizes,
    isError: isErrorSizes,
  } = useGetSizesQuery({});
  const handleChange = (value: string) => {
    dispatch(
      addFilter({
        name: "sizes",
        value:
          // filteredSizes?.value !== "all" &&
          filteredSizes?.value + String(value),
      }),
    );

    const filters = Array.from(String(filteredSizes?.value)).slice(3);
    console.log(filters.join(""));
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>القياس</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 space-x-2">
            <Checkbox
              id="all"
              value={filteredSizes?.value}
              checked={filteredSizes?.value === "all"}
              onCheckedChange={() => handleChange("all")}
            />
            <label
              htmlFor="all"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              الجميع
            </label>
          </div>
          {(sizes !== null || sizes !== undefined) &&
            sizes?.map((size) => (
              <div className="flex items-center gap-3 space-x-2" key={size.id}>
                <Checkbox
                  id={String(size.size)}
                  value={size.id}
                  checked={filteredSizes?.value?.includes(String(size.id))}
                  onCheckedChange={() => handleChange(String(size.id))}
                />
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
  );
};

const Colors = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.filters.filters);
  const filteredColors = state.find((filter) => filter.name === "colors");
  const {
    data: colors,
    isLoading: isLoadingColors,
    isError: isErrorColors,
  } = useGetColorsQuery({});
  const handleChange = (value: string) => {
    dispatch(addFilter({ name: "colors", value: String(value) }));
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>اللون</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 space-x-2">
            <Checkbox id="all" checked={filteredColors?.value === "all"} />
            <label
              htmlFor="all"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              الجميع
            </label>
          </div>
          {(colors !== null || colors !== undefined) &&
            colors?.map((color) => (
              <div className="flex items-center gap-3 space-x-2" key={color.id}>
                <Checkbox
                  id={String(color.title)}
                  checked={filteredColors?.value?.includes(String(color.id))}
                />
                <label
                  htmlFor={String(color.title)}
                  className={`bg-${color.title} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                >
                  {color.title}
                </label>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
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
