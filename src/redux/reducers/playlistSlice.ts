import {IPlaylist} from "../../types/playlist.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IPlaylistsState {
  playlists: IPlaylist[];
  isLoading: boolean;
  isLoaded: boolean;
}

const initialState: IPlaylistsState = {
  playlists: [],
  isLoaded: false,
  isLoading: true
}

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<IPlaylist[]>) => {
      state.playlists = action.payload;
      state.isLoading = false;
      state.isLoaded = true;
    }
  }
});

export const playlistsActions = playlistsSlice.actions;
const playlistsReducer = playlistsSlice.reducer;
export default playlistsReducer;
