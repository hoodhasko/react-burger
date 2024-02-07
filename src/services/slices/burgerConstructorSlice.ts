import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Ingredient } from "../../types/Ingredient";

export interface IConstructorItem extends Ingredient {
  id: string;
}

export interface burgerConstructorState {
  constructorIngredients: {
    bun: Ingredient | null;
    items: IConstructorItem[];
  };
}

const initialState: burgerConstructorState = {
  constructorIngredients: {
    bun: null,
    items: [],
  },
};

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
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
    resetConstructorItems: (state) => {
      state.constructorIngredients = initialState.constructorIngredients;
    },
  },
});

export const {
  setConstructorIngredients,
  sortConstructorIngredients,
  deleteConstructorIngredient,
  resetConstructorItems,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
