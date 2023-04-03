import {IUser} from "./auth.types";

export interface IPlaylist {
  id?: number;
  name: string;
  description?: string;
  slug?: string;
  coverImage?: string;
  isPublic?: boolean;
}

export type IPlaylistTabOptions = "DETAILS" | "CONTRIBUTORS";

export type IContributor = {
  id: number;
  user: IUser;
  playlist?: IPlaylist;
  author: boolean;
}

export interface IAddContributorToPlaylistRequest {
  username: string;
  playlistId: number;
}

