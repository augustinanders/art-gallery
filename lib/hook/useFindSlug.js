import useStore from "@/useStore";

const useFindSlug = (slug, array) => {
  const pieces = useStore((state) => state.artPieces);
  const piece = pieces.find((piece) => piece.slug === slug);
  return piece;
};

export default useFindSlug;
