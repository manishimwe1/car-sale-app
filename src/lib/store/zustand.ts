import { create } from "zustand";
import { Id } from "../../../convex/_generated/dataModel";

interface BearStore {
  carsId: Id<"cars">[];
  increasePopulation: (id: Id<"cars">) => void;
  removeAllBears: (id: Id<"cars">) => void;
  removeAll: () => void;
}

export const useBearStore = create<BearStore>((set) => ({
  carsId: [],

  increasePopulation: (id: Id<"cars">) =>
    set((state) => ({
      carsId: [...state.carsId, id],
    })),

  removeAllBears: (id: Id<"cars">) =>
    set((state) => ({
      carsId: state.carsId.filter((carId) => carId !== id),
    })),
  removeAll: () =>
    set(() => ({
      carsId: [],
    })),
}));
