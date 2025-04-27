import { useQuery } from "@tanstack/react-query";
import { getByNamePokemon } from "../api";

export const usePokemonByName = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name], // Clave única de caché
    queryFn: () => getByNamePokemon({ name }),
    enabled: !!name.trim(), // Solo ejecuta la consulta si hay un nombre válido
    staleTime: 1000 * 60 * 5, // Los datos se consideran frescos por 5 minutos
    retry: (failureCount, error) => {
      // No reintentar si el Pokémon no se encuentra (error 404)
      if (error.message.includes("Pokémon no encontrado")) {
        return false;
      }
      return failureCount < 3; // Reintentar hasta 3 veces para otros errores
    },
  });
};



