import React from "react";
import {
  DetailContainer,
  DetailContent,
  DetailHeader,
  SpotifyLink,
} from "./styles";

export interface IAlbum {
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
}

interface AlbumDetailProps {
  selectedAlbum: IAlbum;
}

const AlbumDetail = ({ selectedAlbum }: AlbumDetailProps) => {
  const { album } = selectedAlbum;
  return (
    <DetailContainer>
      <DetailHeader>
        <h1>{album.name}</h1>
      </DetailHeader>
      <DetailContent>
        <p>
          <span className="label">Release Date:</span> {album.release_date}
        </p>
        <p>
          <span className="label">Total Tracks:</span> {album.total_tracks}
        </p>
        <SpotifyLink
          href={album.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Spotify
        </SpotifyLink>
      </DetailContent>
    </DetailContainer>
  );
};

export default AlbumDetail;
