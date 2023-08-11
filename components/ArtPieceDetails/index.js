import useStore from "@/Stores/useStore";
import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton";
import CommentForm from "../CommentForm";

export default function ArtPieceDetails({ slug }) {
  const pieces = useStore((state) => state.artPieces);

  const piece = pieces.find((piece) => piece.slug === slug);
  console.log(slug);
  if (!piece) {
    return <h2>Piece not found</h2>;
  }

  return (
    <>
      <Link href="/pieces">Back</Link>

      <figure>
        <Image
          alt={piece.name}
          src={piece.imageSource}
          width={100}
          height={100}
        />
        <FavouriteButton slug={slug} />
        <figcaption>
          <h3>
            {piece.name} by {piece.artist}
          </h3>
          <p>{piece.genre}</p>
          <p>{piece.year}</p>
        </figcaption>
      </figure>
      <CommentForm slug={slug} />
    </>
  );
}
