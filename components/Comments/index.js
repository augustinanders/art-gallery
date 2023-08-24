import useLocalStore from "@/Stores/useLocalStore";

export default function Comments({ slug }) {
  const artPiecesInfo = useLocalStore((state) => state.artPiecesInfo);
  const artPieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );
  return (
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
  );
}
