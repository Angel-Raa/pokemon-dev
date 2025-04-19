import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CountStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  resest: () => void;
}
export const useCounterStore = create<CountStore>()(
  persist(
    (set, _) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      resest: () => set(() => ({ count: 0 })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
