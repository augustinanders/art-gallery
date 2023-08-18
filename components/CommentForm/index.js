import useLocalStore from "@/Stores/useLocalStore";

export default function CommentForm({ slug }) {
  const addComment = useLocalStore((state) => state.addComment);
  const handleSubmitComment = (event, addComment) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addComment(slug, data.commentInput);
    const commentInput = document.getElementById("commentInput");
    commentInput.value = "";
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
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// characters left: {250 - commentInput.value.length}
