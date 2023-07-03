import Heart from "../Heart";
import useLocalStore from "@/Stores/useLocalStore";

export default function FavouriteButton({ slug }) {
  const setIsFavourite = useLocalStore((state) => state.setIsFavourite);
  const artPiecesInfo = useLocalStore((state) => state.artPiecesInfo);

  const CurrentArtPieceInfo = artPiecesInfo.find((artPieceInfo) => {
    return artPieceInfo.slug === slug;
  });

  return (
    <button
      onClick={() => {
        setIsFavourite(slug);
      }}
    >
      <Heart isFavourite={CurrentArtPieceInfo?.isFavourite} />
    </button>
  );
}
