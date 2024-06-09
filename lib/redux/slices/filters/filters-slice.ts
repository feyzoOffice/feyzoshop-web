import { createSlice } from "@reduxjs/toolkit";

type Filter = {
  id: number;
  name: string;
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: <Filter[]>[],
  },
  reducers: {
    addFilter: (state, action) => {
      state.filters = [...state.filters, action.payload];
    },

    deleteFilter: (state, action) => {
      const newArray = state.filters.filter(
        (cur: Filter) => cur.id !== action.payload,
      );

      state.filters = newArray;
      return;
    },
  },
});

export const { addFilter, deleteFilter } = filtersSlice.actions;
