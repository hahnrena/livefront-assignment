export interface ISpotifyArtist {
  external_urls: {
    spotify: string;
  };
  followers?: {
    href: string | null;
    total: number;
  };
  genres?: string[];
  href?: string;
  id: string;
  images?: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  name: string;
  popularity?: number;
  type: string;
  uri?: string;
}

export interface ISpotifyAlbum {
  album: {
    album_type: string;
    artists: Array<{
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }>;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    is_playable?: boolean;
    name: string;
    release_date?: string;
    release_date_precision?: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: Array<{
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }>;
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity?: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

export interface ICardItem {
  id: string;
  name: string;
  album?: {
    images: Array<{
      url: string;
    }>;
  };
  images?: Array<{
    url: string;
  }>;
}
