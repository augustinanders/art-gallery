import useStore from "@/Stores/useStore";
import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton";

export default function Spotlight() {
  const pieces = useStore((state) => state.artPieces);

  const indexNumberSpotlight = Math.floor(Math.random() * pieces.length);

  const randomPiece = pieces[indexNumberSpotlight];

  return (
    <>
      <Link href={`/pieces/${randomPiece.slug}`}>
        <Image
          src={randomPiece.imageSource}
          alt={randomPiece.name}
          width={100}
          height={100}
        />
      </Link>
      <FavouriteButton slug={randomPiece.slug} />
      <p>{randomPiece.artist}</p>
    </>
  );
}
