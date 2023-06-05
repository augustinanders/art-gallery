import Image from "next/image";

export default function ArtPiecePreview({ alt, src, name, artist }) {
  return (
    <>
      <li>
        <Image alt={alt} src={src} width={100} height={100} />
        {name} by {artist}
      </li>
    </>
  );
}
