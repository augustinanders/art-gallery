import { useState, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLocalStore = createLocalStorageStore((set) => ({
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
  addComment: (slug, comment) => {
    set((state) => {
      const isSlugInArtPiecesInfo = state.artPiecesInfo.find(
        (artPieceInfo) => artPieceInfo.slug === slug
      );
      if (isSlugInArtPiecesInfo) {
        return {
          artPiecesInfo: state.artPiecesInfo.map((artPieceInfo) =>
            artPieceInfo.slug === slug
              ? {
                  ...artPieceInfo,
                  comments: [...artPieceInfo.comments, comment],
                }
              : artPieceInfo
          ),
        };
      }
      return {
        artPiecesInfo: [...state.artPiecesInfo, { slug, comments: [comment] }],
      };
    });
  },
}));

export default useLocalStore;

function createLocalStorageStore(initialStore, name) {
  const useServerStore = create(initialStore);

  const useClientStore = create(persist(initialStore, { name }));

  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      setHydrated(true);
    }, []);

    const clientStore = useClientStore(selector, compare);
    const serverStore = useServerStore(selector, compare);

    return hydrated ? clientStore : serverStore;
  }

  return useStore;
}
