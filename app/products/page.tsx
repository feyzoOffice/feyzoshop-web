"use client";

import { ProductCard } from "@/components/product-card";
import { useGetProductsQuery } from "@/lib/redux/slices/products/products-slice";
import { useCallback } from "react";
import { Options } from "@/lib/redux/slices/products/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductsFilters } from "@/components/products-filters";

export default function Products() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const deleteQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const options: Options = {
    category_id: Number(searchParams.get("category_id")),
    class_id: Number(searchParams.get("class_id")),
    colors: Array(Number(searchParams.get("colors"))),
    sizes: Array(Number(searchParams.get("sizes"))),
    search: searchParams.get("search") || undefined,
    limit: Number(searchParams.get("limit")),
  };
  // useEffect(() => {
  //   router.push(pathname + "?" + createQueryString("limit", "9"));
  // }, [router, pathname, createQueryString]);

  const { data, isLoading, isError } = useGetProductsQuery(options);
  if (isLoading) {
    return <div>loading....</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      <ProductsFilters
        createQueryString={createQueryString}
        deleteQueryString={deleteQueryString}
      />
      <div>
        {(data === undefined || data?.length < 1) && <div>No products</div>}
      </div>
      <div className="mx-10 mt-3 grid gap-4 md:grid-cols-3">
        {(data !== null || data !== undefined) &&
          data?.map((c: any) => {
            return (
              <ProductCard
                title={c.title}
                image={c.images[0].url}
                price={c.price}
                category={c.category}
                key={c.id}
                id={c.id}
              />
            );
          })}
      </div>
    </div>
  );
}
