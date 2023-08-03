import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/pieces">Pieces</Link>
        </li>
        <li>
          <Link href="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
}
