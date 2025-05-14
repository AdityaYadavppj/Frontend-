// components/BrickCard.js
import Link from 'next/link';

export default function BrickCard({ brick }) {
  return (
    <div className="bg-white rounded shadow-md p-4 hover:shadow-lg transition">
      <img src={brick.image} alt={brick.name} className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="text-lg font-semibold">{brick.name}</h2>
      <p className="text-sm text-gray-600 mb-1">{brick.description}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-red-600 font-bold">₹{brick.price}</p>
        {brick.discount && (
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
            {brick.discount}% OFF
          </span>
        )}
      </div>
      <Link href={`/brick/${brick.id}`} className="block mt-3 text-center bg-red-600 text-white py-2 rounded hover:bg-red-700">
        View Details
      </Link>
    </div>
  );
}

