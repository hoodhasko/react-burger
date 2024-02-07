import { combineReducers } from "@reduxjs/toolkit";
import ingredientSlice from "./ingredientSlice";
import burgerConstructorSlice from "./burgerConstructorSlice";
import orderSlice from "./orderSlice";
import ingredientsDetailSlice from "./ingredientsDetailSlice";

export const rootReducer = combineReducers({
  ingredient: ingredientSlice,
  burgerConstructor: burgerConstructorSlice,
  order: orderSlice,
  ingredientsDetail: ingredientsDetailSlice,
});
