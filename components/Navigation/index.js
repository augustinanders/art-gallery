import Link from "next/link";
import Image from "next/image";

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
      </ul>
    </nav>
  );
}
