import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getColors } from "./actions";

export const colorsSlice = createApi({
  reducerPath: "Colors",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getColors: builder.query({
      queryFn: getColors,
    }),
  }),
});

export const { useGetColorsQuery } = colorsSlice;
