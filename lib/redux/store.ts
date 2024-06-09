import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/products/products-slice";
import { cartSlice } from "./slices/cart/cart-slice";
import { filtersSlice } from "./slices/filters/filters-slice";
import { categoriesSlice } from "./slices/categories/categories-slice";
import { classesSlice } from "./slices/classes/classes-slice";
import { colorsSlice } from "./slices/colors/colors-slice";
import { sizesSlice } from "./slices/sizes/sizes-slice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
  productsSlice,
  cartSlice,
  filtersSlice,
  categoriesSlice,
  classesSlice,
  colorsSlice,
  sizesSlice,
);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        productsSlice.middleware,
        categoriesSlice.middleware,
        classesSlice.middleware,
        colorsSlice.middleware,
        sizesSlice.middleware,
      );
    },
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
