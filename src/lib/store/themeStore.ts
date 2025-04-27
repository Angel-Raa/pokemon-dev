import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Dark, Light } from "../../styles/Themes";

interface ThemeStore {
  theme: string;
  themeStyle: typeof Dark | typeof Light;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      themeStyle: Dark,
      setTheme: () => {
        set((state) => {
          const newTheme = state.theme === "dark" ? "light" : "dark";
          const newThemeStyle = newTheme === "dark" ? Dark : Light;
          return {
            theme: newTheme,
            themeStyle: newThemeStyle,
          };
        });
        
      },
    }),

    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
