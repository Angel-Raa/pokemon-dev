import styled from "styled-components";
import {
  Header,
  InfiniteScrollObserver,
  Loader,
  PokemonItem,
} from "../components";
import { useIsFetching } from "@tanstack/react-query";
import { usePokemons } from "../hooks";
import { useState } from "react";

const Home = (): React.JSX.Element => {
  const {
    pokemons,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemons();
  const isFetching = useIsFetching({
    queryKey: ["pokemon"],
  });
  const [searchMode, setSearchMode] = useState(false);

  const isLoading = isPending || isFetching > 0;

  return (
    <Container>
      <Header onSearchToggle={setSearchMode} />

      {searchMode ? (
        <SearchResultsContainer>
          {/* Search results will be displayed by the Seeker component */}
        </SearchResultsContainer>
      ) : (
        <>
          {isLoading && pokemons.length === 0 ? (
            <Loader />
          ) : (
            <>
              <PokemonGrid>
                {pokemons.map((pokemon) => {
                  const id = pokemon.url.split("/").slice(-2, -1)[0];
                  return (
                    <PokemonItem
                      key={`${pokemon.name}-${id}`}
                      name={pokemon.name}
                      id={id}
                      url={""}
                    />
                  );
                })}
              </PokemonGrid>

              {isFetchingNextPage && <Loader small />}

              <InfiniteScrollObserver
                onIntersect={() => hasNextPage && fetchNextPage()}
                enabled={!isFetchingNextPage && hasNextPage && !searchMode}
              />
            </>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const SearchResultsContainer = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default Home;
