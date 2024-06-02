"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";

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
    <div className="flex flex-col gap-3">
      <div className="flex justify-center items-center w-3/4">
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
      <div className="flex gap-3">
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
            router.push(pathname + "?" + createQueryString("category_id", "1"));
          }}
        >
          Category 1
        </Button>
        <Button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("category_id", "2"));
          }}
        >
          Category 2
        </Button>

        <Button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("category_id", "3"));
          }}
        >
          Category 3
        </Button>
      </div>
    </div>
  );
}
