import { create } from "zustand";

const useStore = create((set) => ({
  artPieces: [],
  setArtPieces: (data) => set({ artPieces: data }),

  artPiecesInfo: [],
  setIsFavourite: (slug) =>
    set((state) => {
      const isSlugInArtPiecesInfo = state.artPiecesInfo.find(
        (artPieceInfo) => artPieceInfo.slug === slug
      );
      if (isSlugInArtPiecesInfo) {
        return {
          artPiecesInfo: state.artPiecesInfo.map((artPieceInfo) =>
            artPieceInfo.slug === slug
              ? { ...artPieceInfo, isFavourite: !artPieceInfo.isFavourite }
              : artPieceInfo
          ),
        };
      }
      return {
        artPiecesInfo: [...state.artPiecesInfo, { slug, isFavourite: true }],
      };
    }),
}));

export default useStore;
