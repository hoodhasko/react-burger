import { createAsyncThunk } from "@reduxjs/toolkit";
import { IngredientService } from "../api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetch",
  async () => {
    const response = await IngredientService.getData();
    return response;
  }
);
