import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton";

export default function ArtPiecePreview({ slug, src, name, artist, alt }) {
  return (
    <>
      <li>
        <Link href={`/pieces/${slug}`}>
          <Image alt={alt} src={src} width={100} height={100} />
          {name} by {artist}
        </Link>
        <FavouriteButton slug={slug} />
      </li>
    </>
  );
}
