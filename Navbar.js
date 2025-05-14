// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-red-600">
        BrickBazaar
      </Link>
      <div className="space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-red-600">Login</Link>
        <Link href="/register" className="text-gray-700 hover:text-red-600">Register</Link>
      </div>
    </nav>
  );
}

