import { create } from "zustand";
import { Id } from "../../../convex/_generated/dataModel";

// Define the state shape
interface BearStore {
  carsId: Id<"cars">[];
  increasePopulation: (id: Id<"cars">) => void;
  removeAllBears: (id: Id<"cars">) => void;
  removeAll: () => void;
}
// interface DeleteButtonStore {
//   delete: boolean;
//   setDelete: () => void;
//   removeDelete: () => void;
// }

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
    set((state) => ({
      carsId: [],
    })),
}));

// export const useDeleteButtonStore = create<DeleteButtonStore>((set) => ({
//   delete: false,

//   setDelete: () =>
//     set((state) => ({
//       delete: !state.delete, // Toggles the delete state
//     })),

//   removeDelete: () =>
//     set({
//       delete: false, // Explicitly sets delete to false
//     }),
// }));
