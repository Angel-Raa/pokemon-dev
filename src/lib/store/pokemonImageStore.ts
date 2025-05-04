import { create } from "zustand";

type ImageStyle = "pixel" | "dreamworld" | "official" | "home" | "animated";

interface PokemonImageStore {
  imageStyle: ImageStyle;
  setImageStyle: (style: ImageStyle) => void;
}
export const usePokemonImageStore = create<PokemonImageStore>((set) => ({
  imageStyle: "official", // Valor por defecto
  setImageStyle: (style: ImageStyle) => set({ imageStyle: style }),
}));
