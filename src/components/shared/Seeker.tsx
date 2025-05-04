import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import styled from "styled-components";

// Ensure this file exists and is used to extend DefaultTheme
import "styled-components";
import { usePokemonByName } from "../../hooks/usePokemonByName";
import { Loader } from "./Loader";
import { PokemonDetails } from "../pokemon/PokemonDetails";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    color2: string;
    error: string;
  }
}

export const Seeker = (): React.JSX.Element => {
  const [search, setSearch] = useState<string>("");
  // Usamos un estado adicional para el término de búsqueda final
  const [finalSearch, setFinalSearch] = useState<string>("");

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = usePokemonByName(finalSearch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    // Solo actualizamos finalSearch cuando el usuario decide buscar
    setFinalSearch(search.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <SearchInputWrapper>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={search}
          placeholder="Search for a Pokémon"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <SearchButton onClick={handleSearch}>
          <Icon icon="ic:twotone-search" />
        </SearchButton>
      </SearchInputWrapper>

      {isLoading && finalSearch && (
        <ResultsContainer>
          <Loader />
        </ResultsContainer>
      )}

      {isError && (
        <ResultsContainer>
          <ErrorMessage>{error?.message || "Pokémon not found"}</ErrorMessage>
        </ResultsContainer>
      )}

      {pokemon && !isLoading && (
        <ResultsContainer>
          <PokemonDetails pokemon={pokemon} />
        </ResultsContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.color2};
  border-radius: 30px;
  padding: 8px 15px;
  width: 100%;
  max-width: 500px;

  input {
    flex: 1;
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    padding: 5px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const ResultsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  text-align: center;
`;
