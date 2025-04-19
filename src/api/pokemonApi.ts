interface Results {
  id: number;
  name: string;
  url: string;
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
