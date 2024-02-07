import { createSlice } from "@reduxjs/toolkit";

import { Ingredient } from "../../types/Ingredient";
import { fetchIngredients } from "../actions";

export interface ingredientState {
  ingredients: Ingredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

const initialState: ingredientState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.ingredientsRequest = true;
        state.ingredientsFailed = false;
      })
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.ingredientsRequest = false;
        state.ingredientsFailed = false;
        state.ingredients = payload;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.ingredientsRequest = false;
        state.ingredientsFailed = true;
      });
  },
});

export const {} = ingredientSlice.actions;

export default ingredientSlice.reducer;
