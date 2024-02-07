import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetch",
  async () => {
    const response = await ApiService.getData();
    return response;
  }
);
