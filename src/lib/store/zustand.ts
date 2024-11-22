import { create } from "zustand";
import { Id } from "../../../convex/_generated/dataModel";

interface BearStore {
  carsId: Id<"cars">[];
  increasePopulation: (id: Id<"cars">) => void;
  removeAllBears: (id: Id<"cars">) => void;
  removeAll: () => void;
}
interface ReserveData {
  [key: string]: string; // Key-value pairs (keys are strings, values are strings)
}

interface ReserveStore {
  data: ReserveData;
  sendData: (newData: ReserveData) => void;
  // sendBatchData: (newData: ReserveData) => void;
  // removeData: (key: string) => void;
  // clearData: () => void;
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

export const useReserveStore = create<ReserveStore>((set) => ({
  data: {},

  sendData: (newData: ReserveData) =>
    set((state) => ({
      data: {
        ...state.data,
        ...newData, // Merge new data into the existing object
      },
    })),
}));
