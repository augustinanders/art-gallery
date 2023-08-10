import useLocalStore from "@/Stores/useLocalStore";
import useStore from "@/Stores/useStore";
import ArtPiecePreview from "../ArtPiecePreview";

export default function Favourites() {
  const pieces = useStore((state) => state.artPieces);
  const artPiecesInfo = useLocalStore((state) => state.artPiecesInfo);

  const favouritePiecesInfo = artPiecesInfo.filter((artPieceInfo) => {
    return artPieceInfo.isFavourite;
  });

  const favouritePieces = pieces.filter((piece) => {
    const isSlugMatching = favouritePiecesInfo.some(
      (infoObject) => infoObject.slug === piece.slug
    );
    if (isSlugMatching) {
      return piece;
    }
  });

  return (
    <ul>
      {favouritePieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            slug={piece.slug}
            src={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
            alt={piece.name}
          />
        );
      })}
    </ul>
  );
}
