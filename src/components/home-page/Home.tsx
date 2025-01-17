import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IoHeartSharp } from "react-icons/io5";
import useSpotifyToken from "../../hooks/useSpotifyToken";
import { fetchTopTracks } from "../../apis/spotifyApi";
import TypewriterTitle from "../TypewriterTitle";
import {
  Container,
  Header,
  SearchBar,
  SearchButton,
  FavoritesIcon,
  TitleContainer,
  SearchContainer,
  LoadingBarContainer,
} from "./styles";
import CarouselSection from "../carousel-section/CarouselSection";
import FavoritesListView from "../favorites-list-view/FavoritesListView";
import ToggleFilterComponent from "../toggle-filters-search/ToggleFilterGroup";
import { Bars } from "react-loading-icons";
import { ISpotifyArtist, ISpotifyAlbum } from "../../models/spotify";
import { SearchType } from "../../models/search";
import Modal from "../modal/Modal";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET!;

interface SearchData {
  artists: { items: ISpotifyArtist[] };
}

const Home: React = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchType>("artist");
  const [albumResults, setAlbumResults] = useState<ISpotifyAlbum[]>([]);
  const [artistResults, setArtistResults] = useState<SearchData | null>(null);

  const [selectedItem, setSelectedItem] = useState<
    ISpotifyAlbum | ISpotifyArtist | null
  >(null);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const accessToken = useSpotifyToken(CLIENT_ID, CLIENT_SECRET);

  const closeModal = () => {
    setSelectedItem(null);
  };

  const deleteFavorite = (itemId: string) => {
    setFavorites((prevVal) =>
      prevVal.filter((favorite) => favorite.id !== itemId)
    );
  };

  useEffect(() => {
    setAlbumResults([]);
    setArtistResults(null);
    setSearchType("artist"); // Reset filter when search input changes
  }, [searchInput]);

  const search = async () => {
    const limit = 10;
    const market = "US";

    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchInput
    )}&type=artist&limit=${limit}&market=${market}`;

    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await fetch(searchUrl, searchParameters);

      if (!response.ok) {
        throw new Error(
          `Search request failed with status: ${response.status}`
        );
      }

      const searchData = await response.json();
      setIsLoading(false);

      if (searchType === "artist" && searchData?.artists?.items.length > 0) {
        setArtistResults(searchData);
        setErrorMessage("");
      } else if (
        searchType === "album" &&
        searchData?.artists?.items.length > 0
      ) {
        const artistId = searchData.artists.items[0].id;
        const topTracks = await fetchTopTracks(artistId, searchParameters);

        setAlbumResults(topTracks);
        setIsLoading(false);
        setErrorMessage("");
      } else {
        setErrorMessage("No results found. Please try a different search.");
        setIsLoading(false);
      }
    } catch (err) {
      setErrorMessage("An error occurred while searching. Please try again.");
      setIsLoading(false);
    }
  };

  const handleCardFavoriteClick = (item: ISpotifyAlbum | ISpotifyArtist) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === item.id);
      return isFavorite
        ? prevFavorites.filter((fav) => fav.id !== item.id)
        : [...prevFavorites, item];
    });
  };

  const handleItemClick = (
    item: ISpotifyAlbum | ISpotifyArtist,
    type: "album" | "artist"
  ) => {
    setSelectedItem({ ...item, type });
  };

  const handleFavoritesToggle = () => {
    setShowFavorites((prev) => !prev);
  };

  useEffect(() => {
    setSearchType("artist");
  }, [searchInput]);

  return (
    <Container>
      <Header>
        <TitleContainer>
          <TypewriterTitle text="Music.ally Search" delay={100} />
          <FavoritesIcon
            onClick={handleFavoritesToggle}
            role="button"
            tabIndex={0}
            aria-label="View Favorites"
          >
            Favorites <IoHeartSharp />
          </FavoritesIcon>
        </TitleContainer>
        <SearchContainer>
          <SearchBar
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={`Search for ${searchType}`}
            aria-label={`Search for ${searchType}`}
          />
          <SearchButton
            onClick={search}
            aria-label="Search for music"
            role="button"
            tabIndex={0}
          >
            Search
          </SearchButton>
        </SearchContainer>
        <ToggleFilterComponent
          searchType={searchType}
          setSearchType={setSearchType}
          aria-label="Change search type"
        />
      </Header>
      {errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            color: "red",
            padding: "10px",
            backgroundColor: "#ffcccc",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          {errorMessage}
        </div>
      )}
      {isLoading ? (
        <LoadingBarContainer>
          <Bars data-testid="loading-bar" />
        </LoadingBarContainer>
      ) : (
        <div>
          {searchType === "album" && albumResults.length > 0 && (
            <>
              <CarouselSection
                title="Top Albums"
                items={albumResults.slice(0, 3)}
                type="album"
                handleItemClick={handleItemClick}
                handleFavorite={handleCardFavoriteClick}
                favorites={favorites}
                size="large"
                aria-labelledby="top-albums"
              />
              <CarouselSection
                title="Other Related Albums"
                items={albumResults.slice(3)}
                type="album"
                handleItemClick={handleItemClick}
                handleFavorite={handleCardFavoriteClick}
                favorites={favorites}
                size="small"
                aria-labelledby="other-related-albums"
              />
            </>
          )}

          {searchType === "artist" &&
            artistResults &&
            artistResults.artists.items.length > 0 && (
              <>
                <CarouselSection
                  title="Top 3 Results"
                  items={artistResults.artists.items.slice(0, 3)}
                  type="artist"
                  handleItemClick={handleItemClick}
                  handleFavorite={handleCardFavoriteClick}
                  favorites={favorites}
                  size="large"
                  aria-labelledby="top-artist-results"
                />
                <CarouselSection
                  title="Other Artists Results"
                  items={artistResults.artists.items.slice(3)}
                  type="artist"
                  handleItemClick={handleItemClick}
                  handleFavorite={handleCardFavoriteClick}
                  favorites={favorites}
                  size="small"
                  aria-labelledby="other-artist-results"
                />
              </>
            )}
        </div>
      )}

      {showFavorites && (
        <FavoritesListView
          favorites={favorites}
          onClose={() => setShowFavorites(false)}
          deleteFavorite={deleteFavorite}
          aria-labelledby="favorites-list"
        />
      )}

      {selectedItem && (
        <Modal selectedItem={selectedItem} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default Home;
