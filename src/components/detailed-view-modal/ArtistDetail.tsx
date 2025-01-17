import React from "react";
import {
  ArtistContainer,
  ArtistHeader,
  ArtistInfo,
  SpotifyLink,
  ImageWrapper,
} from "./styles";
import { ISpotifyArtist } from "../../models/spotify";

export interface IArtist
  extends Pick<
    ISpotifyArtist,
    "name" | "genres" | "external_urls" | "followers" | "images"
  > {}

interface ArtistDetailProps {
  artist: IArtist;
}

const ArtistDetail = ({ artist }: ArtistDetailProps) => {
  return (
    <ArtistContainer>
      <ArtistHeader>
        <h1>{artist.name}</h1>
      </ArtistHeader>
      <ArtistInfo>
        {artist.genres.length !== 0 && (
          <p>
            <span className="label">Genres:</span> {artist.genres.join(", ")}
          </p>
        )}
        <p>
          <span className="label">Followers:</span>{" "}
          {artist.followers.total.toLocaleString()}
        </p>
        <SpotifyLink
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on Spotify
        </SpotifyLink>
        {artist.images.length > 0 && (
          <ImageWrapper>
            <img src={artist.images[0].url} alt={`${artist.name}`} />
          </ImageWrapper>
        )}
      </ArtistInfo>
    </ArtistContainer>
  );
};

export default ArtistDetail;
