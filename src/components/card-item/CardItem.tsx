import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FavoriteButton, Card, AlbumImage, ItemName } from "./styles";
import { ICardItem } from "../../models/spotify";

interface ICardItemProps {
  item: ICardItem[];
  type: "album" | "artist";
  size: "large" | "small";
  handleClick: (item: any, type: string) => void;
  handleFavorite: (item: any) => void;
  isFavorite: boolean;
}

const CardItem = ({
  item,
  type,
  size,
  handleClick,
  handleFavorite,
  isFavorite,
}): ICardItemProps => {
  const cardStyle = size === "large" ? "card-large" : "card-small"; //dynamic styles

  return (
    <Card key={item.id}>
      {type === "album" && (
        <AlbumImage
          className={cardStyle}
          src={item.album.images[0]?.url}
          alt={item.name}
          onClick={() => handleClick(item, type)}
        />
      )}
      {type === "artist" && (
        <AlbumImage
          className={cardStyle}
          src={item.images[0]?.url}
          alt={item.name}
          onClick={() => handleClick(item, type)}
        />
      )}
      <ItemName
        data-testid={`${item.name}-card-title`}
        onClick={() => handleClick(item, type)}
      >
        {item.name}
      </ItemName>
      <FavoriteButton
        data-testid="card-favorite-button"
        onClick={() => handleFavorite(item)}
      >
        {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
      </FavoriteButton>
    </Card>
  );
};

export default CardItem;
