import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Ingredient } from "../../types/Ingredient";
import { OrderResponse } from "../../types/response";
import { fetchIngredients } from "../actions";

export interface IConstructorItem extends Ingredient {
  id: string;
}

export interface ingredientState {
  ingredients: Ingredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;

  constructorIngredients: {
    bun: Ingredient | null;
    items: IConstructorItem[];
  };
  currentIngredient: Ingredient | null;
  order: OrderResponse | null;
}

const initialState: ingredientState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  constructorIngredients: {
    bun: null,
    items: [],
  },
  currentIngredient: null,
  order: null,
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setCurrentIngredient: (state, action: PayloadAction<Ingredient | null>) => {
      state.currentIngredient = action.payload;
    },
    setConstructorIngredients: (state, action: PayloadAction<Ingredient>) => {
      if (action.payload.type === "bun") {
        state.constructorIngredients.bun = action.payload;
      } else {
        state.constructorIngredients.items = [
          ...state.constructorIngredients.items,
          {
            ...action.payload,
            id: uuidv4(),
          },
        ];
      }
    },
    sortConstructorIngredients: (
      state,
      action: PayloadAction<{ id: string; toIndex: number }>
    ) => {
      const { toIndex, id } = action.payload;
      const fromIndex = state.constructorIngredients.items.findIndex(
        (item) => item.id === id
      );
      const items = [...state.constructorIngredients.items];

      items.splice(toIndex, 0, items.splice(fromIndex, 1)[0]);

      state.constructorIngredients.items = items;
    },
    deleteConstructorIngredient: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.constructorIngredients.items =
        state.constructorIngredients.items.filter(
          (item) => item.id !== action.payload.id
        );
    },
  },
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

export const {
  setCurrentIngredient,
  setConstructorIngredients,
  sortConstructorIngredients,
  deleteConstructorIngredient,
} = ingredientSlice.actions;

export default ingredientSlice.reducer;
