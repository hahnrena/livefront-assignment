import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

import {
  FavoritesDrawer,
  FavoritesTitle,
  NoFavoritesMessage,
  FavoritesList,
  FavoritesItem,
  FavoritesItemWrapper,
  ItemName,
  RemoveButton,
  SpotifyLink,
} from "./styles";

interface FavoriteItem {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
}

interface FavoritesListViewProps {
  favorites: FavoriteItem[];
  onClose: () => void;
  deleteFavorite: (id: string) => void;
}

const FavoritesListView = ({
  favorites,
  onClose,
  deleteFavorite,
}: FavoritesListViewProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <FavoritesDrawer ref={drawerRef} className="favorites-drawer">
      <button
        style={{ cursor: "pointer" }}
        data-testid="close-favorite-drawer"
        onClick={onClose}
        className="close-button"
      >
        <MdClose />
      </button>
      <FavoritesTitle>My Favorites</FavoritesTitle>
      {favorites.length === 0 ? (
        <NoFavoritesMessage>No favorites yet!</NoFavoritesMessage>
      ) : (
        <FavoritesList>
          {favorites.map((item) => (
            <FavoritesItemWrapper key={item.id}>
              <FavoritesItem>
                <ItemName>{item.name}</ItemName>
                <SpotifyLink
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Spotify
                </SpotifyLink>
              </FavoritesItem>
              <RemoveButton onClick={() => deleteFavorite(item.id)}>
                Remove from Faves
              </RemoveButton>
            </FavoritesItemWrapper>
          ))}
        </FavoritesList>
      )}
    </FavoritesDrawer>
  );
};

export default FavoritesListView;
