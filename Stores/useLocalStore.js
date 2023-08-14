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
      const date = new Date();
      console.log(date);
      if (isSlugInArtPiecesInfo) {
        return {
          artPiecesInfo: state.artPiecesInfo.map((artPieceInfo) =>
            artPieceInfo.slug === slug
              ? {
                  ...artPieceInfo,
                  comments: [...artPieceInfo.comments, { comment, date }],
                }
              : artPieceInfo
          ),
        };
      }
      return {
        artPiecesInfo: [
          ...state.artPiecesInfo,
          { slug, comments: [{ comment, date }] },
        ],
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

/* const useTimeFormatter = (count) => {
  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const displayTime = `${formattedTime(minutes)}:${formattedTime(seconds)}`;

  return {
    displayTime,
  };
};

export default useTimeFormatter; */

/*  const useLocalStore = createLocalStorageStore(
  (set) => ({
    storedTimes: [],
    addStoredTime: (retentionCount) => {
      const now = new Date();
      const date = now.toISOString().slice(0, 10);
      const time = now.toTimeString().slice(0, 8);
      set((state) => ({
        storedTimes: [
          ...state.storedTimes,
          {
            id: uuidv4(),
            date: date,
            time: time,
            retentionCount,
            isEditingRetentionTime: false,
          },
        ],
      }));
    } */
