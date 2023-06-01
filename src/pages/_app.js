import "@/styles/globals.css";
import useSWR from "swr";
import useStore from "@/useStore";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const setArtPieces = useStore((state) => state.setArtPieces);
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher,
    {
      onSuccess: (data) => {
        setArtPieces(data);
      },
    }
  );

  return <Component {...pageProps} />;
}
