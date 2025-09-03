import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black-600 text-teal p-4 flex justify-between">
      <h1 className="text-2xl font-bold">obsession</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
