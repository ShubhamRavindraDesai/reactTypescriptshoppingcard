import { createSlice } from "@reduxjs/toolkit";


const initialState = {userData: {token: "", user: {}} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserToken(state, action) {
        state.userData.token = action.payload.token 
        state.userData.user  = action.payload.data.user 
    }
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer