import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPaginatedPokemons } from "../api/pokemonApi";

export const usePokemons = () => {
  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }) => getPaginatedPokemons(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // Asumiendo que la API devuelve un offset para paginación
      const nextOffset = allPages.length * 20; // 20 Pokémon por página
      return lastPage.results.length > 0 ? nextOffset : undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  // Aplanamos los resultados de todas las páginas
  const pokemons = data?.pages.flatMap((page) => page.results) || [];

  return {
    pokemons,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
