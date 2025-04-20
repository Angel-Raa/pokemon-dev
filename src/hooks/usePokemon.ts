import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api";

export const usePokemons = () => {
  const {
    data: pokemons,
    isError,
    isPending,
    isFetching
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled:true

  });

  return {
    pokemons,
    isError,
    isPending,
    isFetching
  };
};
