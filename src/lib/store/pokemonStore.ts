import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface Results {
  name: string;
  url: string;
}

interface PokemonStore {
  pokemons: Results[];
  fetchPokemons: () => Promise<Results>;
}

export const usePokemonStore = create<PokemonStore>()(
  persist(
    (set) => ({
      pokemons: [],
      fetchPokemons: async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        set(() => ({
          pokemons: data.results,
        }));
        return data.results; // Ensure the function returns a Promise<Results>
      },
    }),
    {
      name: "pokemon-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
