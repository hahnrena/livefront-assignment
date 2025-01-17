import React from "react";
import CardItem from "../card-item/CardItem";
import { Section, SectionTitle, Carousel } from "./styles";
import { ICardItem } from "../../models/spotify";

interface CarouselSectionProps {
  title: string;
  items: ICardItem[];
  type: "album" | "artist";
  handleItemClick: (item: ICardItem, type: string) => void;
  handleFavorite: (item: ICardItem) => void;
  favorites: ICardItem[];
  size: "large" | "small";
}

const CarouselSection = ({
  title,
  items,
  type,
  handleItemClick,
  handleFavorite,
  favorites,
  size,
}: CarouselSectionProps) => {
  const cardStyle = size === "large" ? "card-large" : "card-small";

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <Carousel className={cardStyle}>
        {items?.map((item) => (
          <CardItem
            item={item}
            type={type}
            size={size}
            handleClick={handleItemClick}
            handleFavorite={handleFavorite}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default CarouselSection;
