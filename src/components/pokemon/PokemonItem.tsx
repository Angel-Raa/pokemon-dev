import React from "react";
import { getPokemonImage } from "../../utils/pokemonSprites";
import styled from "styled-components";
interface Props {
  name: string;
  url: string;
  id: number;
  imageVariant?: 'official' | 'dreamworld' | 'home' | 'pixel' | 'animated';
  
}
export const PokemonItem = ({ name, id, imageVariant = 'pixel' }: Props):React.JSX.Element => {
  const imageUrl = getPokemonImage({ id: id.toString(), variant: imageVariant });
  return (
    <Card>
      <ImageContainer>
        <PokemonImage 
          src={imageUrl} 
          alt={name}
          onError={(e) => {
            // Fallback a imagen oficial si la variante falla
            if (imageVariant !== 'official') {
              e.currentTarget.src = getPokemonImage({ id: id.toString(), variant: 'official' });
            }
          }}
        />
      </ImageContainer>
      <PokemonInfo>
        <Name>{name}</Name>
        <Id>#{id.toString().padStart(3, '0')}</Id>
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

const PokemonImage = styled.img`
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