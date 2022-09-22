import { createSlice, configureStore  } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {items: [], cartItems: [], wishItems:[] } as ProdData

const productSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    getAllData(state, action) {
      state.items = action.payload
    },
    getAllWishData(state, action) {
      state.wishItems = action.payload
    },
    getAllCartData(state, action) {
      state.cartItems = action.payload
    }
  },
})

// export const getShopProducts = ()=>{
//   return async (path: string) => {
    

//     try {
//       const response = await axios.get(path);
//       return response.data.products;
//     } catch (err) {
//       throw err;
//     }
//   };
// }


const store = configureStore({ reducer: productSlice.reducer })
export const productActions  = productSlice.actions
export default store