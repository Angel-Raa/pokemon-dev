interface Results {
  id: number;
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
  base_experience: number;
}
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface FullPokemonApiResponse
  extends Omit<Pokemon, "types" | "stats" | "abilities"> {
  types: string[]; // Solo los nombres de los tipos
  stats: { name: string; base_stat: number }[];
}

export const getPokemons = async (): Promise<Results[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  const pokemons: Results[] = data.results.map(
    (result: Omit<Results, "id">) => ({
      ...result,
      id: Number(result.url.split("/").filter(Boolean).pop()), // Extrae el ID de la URL
    })
  );

  console.log("Pokemons:", pokemons);

  return pokemons;
};

export const getByNamePokemon = async ({
  name,
}: {
  name: string;
}): Promise<FullPokemonApiResponse> => {
  if (!name.trim()) {
    throw new Error("El nombre del Pokémon no puede estar vacío");
  }

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `Pokémon no encontrado: ${name}`);
  }

  const data: Pokemon = await response.json();

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
    types: data.types.map(
      (typeInfo: { type: { name: string } }) => typeInfo.type.name
    ),
    stats: data.stats.map(
      (statInfo: { stat: { name: string }; base_stat: number }) => ({
        name: statInfo.stat.name,
        base_stat: statInfo.base_stat,
      })
    ),
  };
};
