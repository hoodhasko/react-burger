import { createSlice } from "@reduxjs/toolkit";

import { OrderResponse } from "../../types/response";
import { createOrder } from "../actions";

export interface orderState {
  order: OrderResponse | null;
  orderRequest: boolean;
  orderFailed: boolean;
}

const initialState: orderState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createOrder.pending, (state) => {
        state.orderRequest = true;
        state.orderFailed = false;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.orderRequest = false;
        state.orderFailed = false;
        state.order = payload;
      })
      .addCase(createOrder.rejected, (state) => {
        state.orderRequest = false;
        state.orderFailed = true;
      });
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
