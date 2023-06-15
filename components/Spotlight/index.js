import useStore from "@/useStore";
import Image from "next/image";
import Link from "next/link";

export default function Spotlight() {
  const pieces = useStore((state) => state.artPieces);

  const indexNumberSpotlight = Math.floor(Math.random() * pieces.length);

  return (
    <>
      <Link href={`/pieces/${pieces[indexNumberSpotlight].slug}`}>
        <Image
          src={pieces[indexNumberSpotlight].imageSource}
          alt={pieces[indexNumberSpotlight].name}
          width={100}
          height={100}
        />
        <p>{pieces[indexNumberSpotlight].artist}</p>
      </Link>
    </>
  );
}
