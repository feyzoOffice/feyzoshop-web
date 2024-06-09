import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCategories } from "./actions";

export const categoriesSlice = createApi({
  reducerPath: "Categories",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn: getCategories,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesSlice;
