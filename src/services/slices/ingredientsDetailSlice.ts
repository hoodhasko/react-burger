import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Ingredient } from "../../types/Ingredient";

export interface ingredientDetailState {
  currentIngredient: Ingredient | null;
}

const initialState: ingredientDetailState = {
  currentIngredient: null,
};

export const ingredientsDetailSlice = createSlice({
  name: "ingredientDetail",
  initialState,
  reducers: {
    setCurrentIngredient: (state, action: PayloadAction<Ingredient | null>) => {
      state.currentIngredient = action.payload;
    },
  },
});

export const { setCurrentIngredient } = ingredientsDetailSlice.actions;

export default ingredientsDetailSlice.reducer;
