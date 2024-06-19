import { createSlice } from "@reduxjs/toolkit";

type Filter = {
  name: "category" | "class" | "sizes" | "colors";
  value: string | undefined;
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: <Filter[]>[
      { name: "category", value: "all" },
      { name: "class", value: "all" },
      { name: "sizes", value: "all" },
      { name: "colors", value: "all" },
    ],
  },
  reducers: {
    addFilter: (state, action) => {
      const exist = state.filters.find(
        (filter: Filter) => filter.name === action.payload.name,
      );
      if (exist) {
        const newArray = state.filters.map((cur: Filter) => {
          if (cur.name === action.payload.name) {
            cur.value = action.payload.value;
          }
          return cur;
        });
        state.filters = newArray;
        return;
      }
      state.filters = [...state.filters, action.payload];
    },

    deleteFilter: (state, action) => {
      const newArray = state.filters.filter(
        (cur: Filter) => cur.name !== action.payload,
      );

      state.filters = newArray;
      return;
    },
    resetFilters: (state, action) => {
      state.filters = [
        { name: "category", value: "all" },
        { name: "class", value: "all" },
        { name: "sizes", value: "all" },
        { name: "colors", value: "all" },
      ];
      return;
    },
  },
});

export const { addFilter, deleteFilter, resetFilters } = filtersSlice.actions;
