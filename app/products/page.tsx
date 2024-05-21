"use client";
import { useGetProductsQuery } from "@/lib/redux/features/products/products-slice";
export default function Products() {
  const { data, isError, isLoading, isSuccess, error } = useGetProductsQuery();

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center">
        <h1>المنتجات</h1>
      </div>
    );
  }
}
