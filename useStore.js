import { create } from "zustand";

const useStore = create((set) => ({
  artPieces: [],
  setArtPieces: (data) => set({ artPieces: data }),

  artPiecesInfo: [],
  setIsFavourite: (slug) =>
    set((state) => {
      const artPiecesInfo = state.artPiecesInfo.map((artPiece) => {
        if (artPiece.slug === slug) {
          return {
            ...artPiece,
            isFavourite: !artPiece.isFavourite,
          };
        }
        return artPiece;
      });
      return { artPiecesInfo };
    }),
}));

export default useStore;
