import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IPlaylist} from "../../types/playlist.types";
import {ISong} from "../../types/song.types";
import utils from "../../utils";

export interface IPlayerState {
  currentPlaylist?: IPlaylist;
  currentSong?: ISong;
  songs: ISong[];
  repeat: "OFF" | "ONE" | "ALL";
  shuffle?: boolean;
  playing?: boolean;
  loading?: boolean;
  loaded?: boolean;
}

const initialState: IPlayerState = {
  songs: [],
  repeat: "OFF",
}

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
      // for all play start
      state.loading = true;
      state.loaded = false;
      state.playing = false;
    },
    playNextPrev: (state) => {
      if (state.repeat !== "ONE") {
        const index = state.songs?.findIndex(s => s.id === state.currentSong?.id);
        if (state.shuffle) {
          const idx = utils.randomNumExclude(state.songs.length, index);
          console.log("Shuffled index :: ", idx);
          state.currentSong = state.songs[idx];

          // for all play start
          state.loading = true;
          state.loaded = false;
          state.playing = false;
        } else {
          console.log("Here :: index :: ", index)
          if (index >= 0 && index < state.songs.length - 1) { // can play next
            console.log("Here :: HERE")
            state.currentSong = state.songs[index + 1];

            // for all play start
            state.loading = true;
            state.loaded = false;
            state.playing = false;
          } else {
            console.log("No, Here :: HERE")
            state.playing = false;
          }
        }
      }
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
      if (state.repeat === "OFF") {
        state.repeat = "ALL";
      } else if (state.repeat === "ALL") {
        state.repeat = "ONE";
      } else if (state.repeat === "ONE") {
        state.repeat = "OFF";
      }
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
