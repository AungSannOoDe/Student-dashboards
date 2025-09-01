import { create } from "zustand";

const useElectorStore = create((set) => ({
  electors: [],
  setElectors: (electors) => set({ electors }),
  updateElectors: (updater) =>
    set((state) => ({ electors: updater(state.electors) })),
}));

export default useElectorStore;