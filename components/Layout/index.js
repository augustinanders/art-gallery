import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Art Gallery</h1>
      </header>
      <main>{children}</main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
}
