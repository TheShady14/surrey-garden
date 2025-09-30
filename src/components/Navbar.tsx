import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          Surrey Garden Services
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/showcase">Showcase</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/book">Book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
