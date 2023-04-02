import {combineReducers} from "@reduxjs/toolkit";
import authReducer, {IAuthState} from "./authSlice";
import playerReducer, {IPlayerState} from "./playerSlice";
import playlistsReducer, {IPlaylistsState} from "./playlistSlice";

const rootReducer = combineReducers({
  "auth": authReducer,
  "player": playerReducer,
  "playlists": playlistsReducer,
});

export interface RootState {
  "auth": IAuthState,
  "player": IPlayerState,
  "playlists": IPlaylistsState,
}

export default rootReducer;
