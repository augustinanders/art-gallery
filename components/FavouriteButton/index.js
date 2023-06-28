import Heart from "../Heart";

export default function FavouriteButton() {
  return (
    <button>
      <Heart isFavourite={true} />
    </button>
  );
}
