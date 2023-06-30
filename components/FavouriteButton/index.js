import Heart from "../Heart";
import useStore from "@/useStore";

export default function FavouriteButton({ slug }) {
  const setIsFavourite = useStore((state) => state.setIsFavourite);
  const artPiecesInfo = useStore((state) => state.artPiecesInfo);

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
