import { create } from "zustand";

const useStore = create((set) => ({
  artPieces: [],
  setArtPieces: (data) => set({ artPieces: data }),
}));

export default useStore;
