// pages/customer/brick/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BrickDetails() {
  const { id } = useRouter().query;
  const [brick, setBrick] = useState(null);

  useEffect(() => {
    if (id) {
      // TODO: Fetch brick by ID from API
      setBrick({
        id,
        name: 'Premium Red Brick',
        price: 10,
        discount: 2,
        description: 'High quality red brick ideal for construction.',
        sellerLogo: '/seller-logo.png',
        image: '/brick.png'
      });
    }
  }, [id]);

  if (!brick) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <img src={brick.image} alt={brick.name} className="w-full h-60 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{brick.name}</h1>
      <p className="text-gray-700 my-2">{brick.description}</p>
      <p className="text-xl font-semibold">Price: ₹{brick.price - brick.discount}</p>
      {brick.discount > 0 && (
        <p className="text-sm text-red-600">Discount: ₹{brick.discount}</p>
      )}
      <img src={brick.sellerLogo} alt="Seller Logo" className="w-20 mt-4" />
      <div className="mt-6 p-4 bg-yellow-100 text-center text-sm">Ad Section (banner or static)</div>
      <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">Buy Now</button>
    </div>
  );
}

