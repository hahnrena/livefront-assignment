import { IAlbum } from "../components/detailed-view-modal/AlbumDetail";
import { IArtist } from "../components/detailed-view-modal/ArtistDetail";

export type SearchType = "artist" | "album";

export type ISelectedItem<T extends SearchType> = T extends "album"
  ? IAlbum & { type: "album" }
  : T extends "artist"
  ? IArtist & { type: "artist" }
  : never;
