// components/SidebarMenu.js
import Link from 'next/link';
import { useState } from 'react';

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl p-2 text-red-600 md:hidden"
      >
        &#9776;
      </button>
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:static md:w-64 z-40`}>
        <div className="p-4 border-b text-lg font-bold text-red-600">Menu</div>
        <ul className="p-4 space-y-4 text-gray-700">
          <li><Link href="/explore">Explore Pincode</Link></li>
          <li><Link href="/orders">My Orders</Link></li>
          <li><Link href="/best-seller">Best Seller of the Week</Link></li>
        </ul>
      </aside>
    </>
  );
}

