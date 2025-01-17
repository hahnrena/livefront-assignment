import styled from "styled-components";

export const DetailContainer = styled.div`
  padding: 20px;
  background: linear-gradient(145deg, #ff8c00, #ff6f61);
  color: #fff;
  border-radius: 12px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3),
      -10px -10px 30px rgba(255, 255, 255, 0.2);
  }
`;

export const DetailHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const DetailContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;

  span.label {
    font-weight: bold;
    color: #ffedcc;
  }
`;

export const SpotifyLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #fff;
    color: #ff6f61;
  }
`;

export const ArtistContainer = styled.div`
  padding: 20px;
  background: linear-gradient(145deg, #8e44ad, #3498db);
  color: #fff;
  border-radius: 12px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3),
      -10px -10px 30px rgba(255, 255, 255, 0.2);
  }
`;

export const ArtistHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const ArtistInfo = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;

  span.label {
    font-weight: bold;
    color: #f4e8ff;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
