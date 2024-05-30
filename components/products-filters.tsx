"use client";

import { Button } from "@/components/ui/button";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

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
  let params: { value: string; key: string }[] = [];
  searchParams.forEach((value, key) => params.push({ value, key }));

  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        {params?.map((param) => (
          <h3 key={param.key}>{param.key}</h3>
        ))}
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
