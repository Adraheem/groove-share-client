import {ISong} from "../types/song.types";
import {IPlaylist} from "../types/playlist.types";
import store from "../redux/store";
import {playerActions} from "../redux/reducers/playerSlice";

class PlayerService {

  public playPlaylist(songs: ISong[], id?: number, playlist?: IPlaylist) {
    store.dispatch(playerActions.playPlaylist({songs, id, playlist}));
  }

}

const playerService = new PlayerService();
export default playerService;
