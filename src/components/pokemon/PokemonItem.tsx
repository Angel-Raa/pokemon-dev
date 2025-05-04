import React from "react";
import styled from "styled-components";
interface Props {
  name: string;
  url: string;
  id: number;
  imageVariant?: "official" | "dreamworld" | "home" | "pixel" | "animated";
}
export const PokemonItem = ({ name, id }: Props): React.JSX.Element => {
  const imageStyle = usePokemonImageStore((state) => state.imageStyle);

  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  const getImageUrl = () => {
    switch (imageStyle) {
      case "pixel":
        return `${baseUrl}/${id}.png`;
      case "dreamworld":
        return `${baseUrl}/other/dream-world/${id}.svg`;
      case "official":
        return `${baseUrl}/other/official-artwork/${id}.png`;
      case "home":
        return `${baseUrl}/other/home/${id}.png`;
      case "animated":
        return `${baseUrl}/versions/generation-v/black-white/animated/${id}.gif`;
      default:
        return `${baseUrl}/other/official-artwork/${id}.png`;
    }
  };
  return (
    <Card>
      <ImageContainer>
        <PokemonImage
          src={getImageUrl()}
          alt={name}
          $imageStyle={imageStyle}
          onError={(e) => {
            // Fallback a imagen oficial si la seleccionada falla
            if (!e.currentTarget.src.includes("official-artwork")) {
              e.currentTarget.src = `${baseUrl}/other/official-artwork/${id}.png`;
            }
          }}
        />
      </ImageContainer>
      <PokemonInfo>
        <Name>{name}</Name>
        <Id>#{id.toString().padStart(3, "0")}</Id>
      </PokemonInfo>
    </Card>
  );
};

const Card = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  background: ${({ theme }) => theme.imageBackground || "#f5f5f5"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 140px;
`;

const PokemonImage = styled.img<{ $imageStyle: string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
`;

const PokemonInfo = styled.div`
  padding: 16px;
  text-align: center;
  background: ${({ theme }) => theme.cardFooterBackground};
`;

const Name = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.cardText};
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Id = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.cardSecondaryText};
  font-size: 0.9rem;
  font-weight: 500;
`;

import "styled-components";
import { usePokemonImageStore } from "../../lib/store/pokemonImageStore";

declare module "styled-components" {
  export interface DefaultTheme {
    color1: string;
    color2: string;
    text: string;
    textSecondary: string;
    background: string; // Added this line
    backgroundSecondary: string;
    imageBackground?: string; // Added imageBackground
    cardFooterBackground: string; // Added cardFooterBackground
    cardText: string; // Added cardText
    cardSecondaryText: string; // Added cardSecondaryText
  }
}
