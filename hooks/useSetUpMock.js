import useStore from "@/Stores/useStore";
import useLocalStore from "@/Stores/useLocalStore";

jest.mock("../Stores/useStore");
jest.mock("../Stores/useLocalStore");

const useSetUpMock = () => {
  useStore.mockReturnValueOnce([
    {
      slug: "the-creation-of-adam",
      name: "The Creation of Adam",
      artist: "Michelangelo",
      imageSource: "/images/the-creation-of-adam.jpg",
    },
    {
      slug: "the-scream",
      name: "The Scream",
      artist: "Edvard Munch",
      imageSource: "/images/the-scream.jpg",
    },
  ]);

  useLocalStore.mockImplementation((selector) => {
    const state = {
      artPiecesInfo: [
        {
          slug: "the-creation-of-adam",
          isFavourite: true,
        },
        {
          slug: "the-scream",
          isFavourite: false,
        },
      ],
    };
    return selector(state); // Return the selected part of the state
  });
};

export default useSetUpMock;
