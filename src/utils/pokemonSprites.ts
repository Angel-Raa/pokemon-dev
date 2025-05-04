interface PokemonImageOptions {
  id: string;
  variant?: "official" | "dreamworld" | "home" | "pixel" | "animated";
}
const getPokemonImage = ({ id, variant = "official" }: PokemonImageOptions) => {
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  const variants = {
    official: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    dreamworld: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    home: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
    pixel: `${baseUrl}/${id}.png`, // Sprites clásicos
    animated: `${baseUrl}/versions/generation-v/black-white/animated/${id}.gif`,
  };

  return variants[variant];
};

export { getPokemonImage, type PokemonImageOptions };
