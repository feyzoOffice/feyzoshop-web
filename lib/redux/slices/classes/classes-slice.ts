import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getClasses } from "./actions";

export const classesSlice = createApi({
  reducerPath: "Classes",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getClasses: builder.query({
      queryFn: getClasses,
    }),
  }),
});

export const { useGetClassesQuery } = classesSlice;
