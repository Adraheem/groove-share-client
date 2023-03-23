import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/auth.types";

export interface IAuthState {
  isAuthenticated: boolean;
  authToken?: string;
  userDetails?: IUser;
}

const initialState: IAuthState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.authToken = "";
      state.isAuthenticated = false;
      state.userDetails = undefined;
    },
    setUserDetails: (state, action: PayloadAction<IUser>) => {
      state.userDetails = action.payload;
    }
  }
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
