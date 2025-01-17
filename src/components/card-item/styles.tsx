import styled from "styled-components";

export const Card = styled.div`
  min-width: 150px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
    img {
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
        -5px -5px 15px rgba(255, 255, 255, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      transform: scale(1.05);
    }
  }
  .card-large {
    max-width: 350px;
    height: 100%;
    max-height: 350px;
    width: 100%;

    /* Mobile responsiveness */
    @media (max-width: 600px) {
      max-width: 110px;
      height: 100%;
      max-height: 110px;
      width: 100%;
    }

    @media (min-width: 600px) and (max-width: 780px) {
      max-width: 168px;
      height: 100%;
      max-height: 168px;
      width: 100%;
    }

    @media (min-width: 780px) and (max-width: 1140px) {
      max-width: 210px;
      height: 100%;
      max-height: 210px;
      width: 100%;
    }
  }
  .card-small {
    max-width: 150px;
    height: 100%;
    max-height: 150px;
    width: 100%;

    /* Mobile responsiveness */
    @media (max-width: 600px) {
      max-width: 110px;
      height: 100%;
      max-height: 110px;
      width: 100%;
    }

    @media (min-width: 600px) and (max-width: 780px) {
      max-width: 168px;
      height: 100%;
      max-height: 168px;
      width: 100%;
    }

    @media (min-width: 780px) and (max-width: 1140px) {
      max-width: 219px;
      height: 100%;
      max-height: 190px;
      width: 100%;
    }
  }
`;

export const AlbumImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
`;

export const ItemName = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 8px;
  color: #ff6f61;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;
