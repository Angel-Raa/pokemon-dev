import styled from "styled-components";
import { Seeker } from "./Seeker";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
interface Props {
  onSearchToggle: (isSearching: boolean) => void;
}

export const Header = ({ onSearchToggle }: Props): React.JSX.Element => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    const newState = !showSearch;
    setShowSearch(newState);
    onSearchToggle(newState);
  };
  return (
    <Container>
      {!showSearch && (
        <PokemonGifs>
          <img
            alt="Pokemon bulbasaur gif"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
          />
          <img
            alt="Pokemon charmander gif"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
          />
          <img
            alt="Pokemon squirtle gif"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
          />
          <img
            alt="Pokemon pikachu gif"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
          />
          <img
            alt="Pokemon eevee gif"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif"
          />
        </PokemonGifs>
      )}

      <SearchWrapper>
        <SearchToggle onClick={toggleSearch}>
          <Icon
            icon={showSearch ? "ic:twotone-arrow-back" : "ic:twotone-search"}
          />
        </SearchToggle>
        {showSearch && <Seeker />}
      </SearchWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PokemonGifs = styled.section`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  img {
    height: 60px;
    width: auto;
    image-rendering: pixelated;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
