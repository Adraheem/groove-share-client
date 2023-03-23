import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IPlaylist} from "../../types/playlist.types";
import {ISong} from "../../types/song.types";

export interface IPlayerState {
  currentPlaylist?: IPlaylist;
  currentSong?: ISong;
  songs?: ISong[];
  repeat?: boolean;
  shuffle?: boolean;
  playing?: boolean;
  loading?: boolean;
  loaded?: boolean;
}

const initialState: IPlayerState = {}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPlaylist: (state, action: PayloadAction<{ songs: ISong[], id?: number, playlist?: IPlaylist }>) => {
      const songs = action.payload.songs;
      const id = songs.findIndex(s => s.id === action.payload.id);
      const playlist = action.payload.playlist;

      state.songs = songs;
      if (id >= 0) {
        state.currentSong = songs[id];
      } else {
        state.currentSong = songs[0];
      }

      if (playlist) {
        state.currentPlaylist = playlist;
      }
      state.loading = true;
      state.loaded = false;
      state.playing = false;
    },
    setCurrentPlaylist: (state, action: PayloadAction<IPlaylist>) => {
      state.currentPlaylist = action.payload;
    },
    setSongs: (state, action: PayloadAction<ISong[]>) => {
      state.songs = action.payload;
    },
    setCurrentSong: (state, action: PayloadAction<ISong>) => {
      state.currentSong = action.payload;
    },
    toggleRepeat: (state) => {
      state.repeat = !state.repeat;
    },
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },
    togglePlaying: (state) => {
      if (state.loaded && !state.loading) {
        state.playing = !state.playing;
      }
    },
    songLoaded: (state) => {
      state.loading = false;
      state.loaded = true;
      state.playing = true;
    }
  }
});

export const playerActions = playerSlice.actions;
const playerReducer = playerSlice.reducer;
export default playerReducer;
