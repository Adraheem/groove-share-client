import {IAddContributorToPlaylistRequest, IContributor, IPlaylist} from "../types/playlist.types";
import apiInstance from "./api.service";
import store from "../redux/store";
import {playlistsActions} from "../redux/reducers/playlistSlice";
import {IPage} from "../types/IPage.types";
import {ISong} from "../types/song.types";

class PlaylistService {

  public async createPlaylist(data: IPlaylist): Promise<IPlaylist> {
    try {
      const response = await apiInstance.post("/playlist/create", data);
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async updatePlaylist(data: IPlaylist): Promise<IPlaylist> {
    try {
      const response = await apiInstance.patch("/playlist/update", data);
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async getPlaylist(slug: string): Promise<IPlaylist> {
    try {
      const response = await apiInstance.get("/playlist/find", {params: {slug}});
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async getAllContribPlaylists(): Promise<IPlaylist[]> {
    try {
      const response = await apiInstance.get("/contributor/getPlaylists");
      const playlists: IPlaylist[] = response.data;
      store.dispatch(playlistsActions.setPlaylists(playlists));
      return Promise.resolve(playlists);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async deletePlaylist(slug: string): Promise<IPlaylist> {
    try {
      const response = await apiInstance.delete("/playlist/delete", {params: {slug}});
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async uploadPlaylistCover(id: number, file: File): Promise<IPlaylist> {
    try {
      const response = await apiInstance.post("/playlist/upload", {});
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async getAllSongs(id: number, page = 0, size = 100): Promise<IPage<ISong>> {
    try {
      const response = await apiInstance.get("/playlist-song/songs", {
        params: {
          playlistId: id,
          page,
          size
        }
      });
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async addContributorToPlaylist(data: IAddContributorToPlaylistRequest): Promise<IContributor> {
    try {
      const response = await apiInstance.post(`/contributor/add/${data.playlistId}/${data.username}`);
      const contributor: IContributor = response.data;
      return Promise.resolve(contributor);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async getAllContributors(id: number): Promise<IContributor[]> {
    try {
      const response = await apiInstance.get("/contributor/getAll", {
        params: {
          playlistId: id,
        }
      });
      const contributors: IContributor[] = response.data;
      return Promise.resolve(contributors);
    } catch (e) {
      return Promise.reject(e);
    }
  }

}

const playlistService = new PlaylistService();
export default playlistService;