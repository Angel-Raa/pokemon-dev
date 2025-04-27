interface Results {
  id: number;
  name: string;
  url: string;
}

interface FullPokemonApiResponse {
  id: number;
  name: string;
  pokemon: Results[];
}

// This file contains the API calls to fetch Pokemon data from the PokeAPI.
// It includes functions to get a list of Pokemons and to get a specific Pokemon by its ID.
// The functions use the Fetch API to make HTTP requests and return the data in a structured format.
// The getPokemons function fetches a list of Pokemons and maps the results to include the ID extracted from the URL.

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

export const getByNamePokemon = ({
  name,
}: {
  name: string;
}): Promise<FullPokemonApiResponse> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, name, pokemon } = data;
      return { id, name, pokemon };
    });
};
