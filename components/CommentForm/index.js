import useLocalStore from "@/Stores/useLocalStore";

export default function CommentForm({ slug }) {
  const addComment = useLocalStore((state) => state.addComment);
  const handleSubmitComment = (event, addComment) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addComment(slug, data.commentInput);
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmitComment(event, addComment);
      }}
    >
      <label htmlFor="commentInput">Comment:</label>
      <input
        type="textarea"
        placeholder="Leave a comment"
        id="commentInput"
        name="commentInput"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

//keys
