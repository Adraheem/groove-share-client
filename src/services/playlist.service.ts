import {IPlaylist} from "../types/playlist.types";
import apiInstance from "./api.service";

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

}

const playlistService = new PlaylistService();
export default playlistService;