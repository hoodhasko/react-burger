import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../api";

export const createOrder = createAsyncThunk("order/create", async () => {
  const response = await ApiService.createOrder();
  return response;
});
