import useLocalStore from "@/Stores/useLocalStore";

export default function CommentForm({ slug }) {
  const addComment = useLocalStore((state) => state.addComment);
  const commentInput = document.getElementById("commentInput");

  const handleSubmitComment = (event, addComment) => {
    event.preventDefault();
    addComment(slug, commentInput.value);
    commentInput.value = "";
    handleChange();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmitComment(event, addComment);
    }
  };

  const handleChange = () => {
    const characterCount = document.getElementById("characterCount");
    characterCount.innerHTML = `${
      250 - commentInput?.value.length
    } characters left`;
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmitComment(event, addComment);
      }}
    >
      <label htmlFor="commentInput">Comment:</label>
      <textarea
        placeholder="Leave a comment"
        id="commentInput"
        name="commentInput"
        required
        maxLength="250"
        rows="5"
        onKeyDown={(event) => {
          handleKeyDown(event);
        }}
        onChange={handleChange}
      />
      <p id="characterCount">250 characters left</p>
      <button type="submit">Submit</button>
    </form>
  );
}
