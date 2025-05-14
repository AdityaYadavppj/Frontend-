// pages/customer/home.js
import { useEffect, useState } from 'react';

export default function CustomerHome() {
  const [bricks, setBricks] = useState([]);
  const [pincode, setPincode] = useState(''); // Simulate fetch from user

  useEffect(() => {
    // TODO: Fetch bricks by user pincode
    setBricks([
      { id: 1, name: 'Red Brick', price: 10, image: '/brick.png', seller: 'Best Bricks Ltd' },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Available Bricks</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {bricks.map(brick => (
          <div key={brick.id} className="border rounded p-3 bg-white shadow">
            <img src={brick.image} alt={brick.name} className="w-full h-32 object-cover rounded" />
            <h2 className="mt-2 text-xl font-bold">{brick.name}</h2>
            <p>₹{brick.price}</p>
            <p className="text-sm text-gray-500">Seller: {brick.seller}</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

