import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import styled from "styled-components";

// Ensure this file exists and is used to extend DefaultTheme
import "styled-components";
import { usePokemonByName } from "../../hooks/usePokemonByName";
import { Loader } from "./Loader";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    color2: string;
  }
}

export const Seeker = (): React.JSX.Element => {
  const [search, setSearch] = useState<string>("");
  // Usamos un estado adicional para el término de búsqueda final
  const [finalSearch, setFinalSearch] = useState<string>("");

  const { data, isLoading } = usePokemonByName(finalSearch);

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
        return  <Loader />;
    }
  console.log(data);

  return (
    <Container>
      <section className="content">
        <Icon className="icono" icon="ic:twotone-search" />
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={search}
          placeholder="Search for a Pokémon, ability, item, or move"
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          maxLength={50}
          minLength={1}
          required={true}
          pattern="[a-zA-Z0-9\s]+"
          title="Please enter a valid search term."
          aria-label="Search for a Pokémon, ability, item, or move"
        />
        <button onClick={handleSearch}>Search</button>
      </section>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.text};
  border: 2px solid ${({ theme }) => theme.color2};
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .icono {
      font-size: 30px;
      cursor: pointer;
    }
    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${(props) => props.theme.text};
    }
    button {
      background: none;
      border: 0;
      cursor: pointer;
      color: ${(props) => props.theme.text};
      font-size: 18px;
      padding: 0 10px;
    }
    button:hover {
      color: ${({ theme }) => theme.color2};
      transition: 0.3s;
    }
  }
`;
