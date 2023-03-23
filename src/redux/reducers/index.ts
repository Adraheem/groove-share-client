import {combineReducers} from "@reduxjs/toolkit";
import authReducer, {IAuthState} from "./authSlice";
import playerReducer, {IPlayerState} from "./playerSlice";

const rootReducer = combineReducers({
  "auth": authReducer,
  "player": playerReducer,
});

export interface RootState {
  "auth": IAuthState,
  "player": IPlayerState,
}

export default rootReducer;
