import { createSlice } from "@reduxjs/toolkit";


const initialState = {userData: {} } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserToken(state, action) {
        state.userData.token = action.payload    
    }
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer