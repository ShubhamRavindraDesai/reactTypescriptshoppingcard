import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], cartItems: [], wishItems: [], newProd: {}, test:[] } as unknown as ProdData;

const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    getAllData(state, action) {
      
      state.items = action.payload;
    },
    getAllWishData(state, action) {
      state.wishItems = action.payload;
    },
    getAllCartData(state, action) {
      state.cartItems = action.payload;
    },
    getnewData(state, action) {
      state.newProd = action.payload
    }
  },
});
export const productActions = productSlice.actions;

export default productSlice.reducer;
