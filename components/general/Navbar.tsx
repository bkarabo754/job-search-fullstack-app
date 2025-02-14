import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Searchify</span>
        </h1>
      </Link>
    </nav>
  );
}
