import { combineReducers } from "@reduxjs/toolkit";
import ingredientSlice from "./ingredientSlice";

export const rootReducer = combineReducers({
  ingredient: ingredientSlice,
});
