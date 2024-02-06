import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../api";

export const createOrder = createAsyncThunk(
  "order/create",
  async (idList: string[]) => {
    const response = await ApiService.createOrder(idList);
    return response;
  }
);
