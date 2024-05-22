"use client";

import { useGetProductsQuery } from "@/lib/redux/features/products/products-slice";

export default function Products() {
  const { data, error } = useGetProductsQuery(1);
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <h1>المنتجات</h1>
    </div>
  );
}
