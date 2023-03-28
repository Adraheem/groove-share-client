import {IUser} from "./auth.types";

export interface IPlaylist {

}

export type IPlaylistTabOptions = "DETAILS" | "CONTRIBUTORS";

export type IContributor = {
  id: number;
  user: IUser;
  playlist?: IPlaylist;
  isAuthor: boolean;
}
