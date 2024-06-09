import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSizes } from "./actions";

export const sizesSlice = createApi({
  reducerPath: "Sizes",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getSizes: builder.query({
      queryFn: getSizes,
    }),
  }),
});

export const { useGetSizesQuery } = sizesSlice;
