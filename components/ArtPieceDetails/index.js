import useStore from "@/Stores/useStore";
import useLocalStore from "@/Stores/useLocalStore";
import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton";
import CommentForm from "../CommentForm";

export default function ArtPieceDetails({ slug }) {
  const pieces = useStore((state) => state.artPieces);
  const piece = pieces.find((piece) => piece.slug === slug);
  const artPiecesInfo = useLocalStore((state) => state.artPiecesInfo);
  const artPieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );

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
          <h2>
            {piece.name} by {piece.artist}
          </h2>
          <p>{piece.genre}</p>
          <p>{piece.year}</p>
        </figcaption>
      </figure>
      <h3>Comments</h3>
      <ul>
        {artPieceInfo?.comments?.map((comment, index) => {
          const parsedDate = new Date(comment.date);
          console.log(typeof parsedDate, parsedDate);
          return (
            <li key={index}>
              {comment.comment}, {parsedDate.toLocaleDateString("de-DE")},{" "}
              {parsedDate.toLocaleTimeString("de-DE", {
                timeStyle: "short",
              })}
            </li>
          );
        })}
      </ul>
      <CommentForm slug={slug} />
    </>
  );
}
