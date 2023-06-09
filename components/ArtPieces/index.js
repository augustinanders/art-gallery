import useStore from "@/useStore";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces() {
  const pieces = useStore((state) => state.artPieces);

  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            alt={piece.name}
            src={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </ul>
  );
}
