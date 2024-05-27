"use client";

import { ProductCard } from "@/components/product-card";
import { useGetProductsQuery } from "@/lib/redux/slices/products/products-slice";

export default function Products() {
  const { data, isLoading, isError } = useGetProductsQuery({});

  if (isLoading) {
    return <div>loading....</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-4 mx-10 mt-3">
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
  );
}
