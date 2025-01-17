import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  background: transparent;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const LoadingBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: white;
`;

export const SearchBar = styled.input`
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;
`;

export const SearchButton = styled.button`
  background: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #e65f55;
  }
`;

export const FavoritesIcon = styled.div`
  font-size: 25px;
  cursor: pointer;
  color: red;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ResultsSection = styled.div`
  margin-top: 20px;
`;
