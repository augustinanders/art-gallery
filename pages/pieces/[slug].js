import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <ArtPieceDetails slug={slug} />;
}
