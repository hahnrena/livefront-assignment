import styled from "styled-components";

export const FavoritesDrawer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  padding: 20px;
  z-index: 10;
`;

export const FavoritesTitle = styled.h3`
  font-size: 24px;
`;

export const NoFavoritesMessage = styled.p`
  color: #ccc;
`;

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const FavoritesItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const FavoritesItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const SpotifyLink = styled.a`
  text-decoration: none;
  color: #1db954;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const RemoveButton = styled.button`
  background-color: #ff4f58;
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 10px;
  &:hover {
    background-color: #e03d49;
    cursor: pointer;
  }
`;
