// pages/index.js
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SidebarMenu from '@/components/SidebarMenu';
import BrickCard from '@/components/BrickCard';

export default function HomePage() {
  const [pincode, setPincode] = useState('');
  const [bricks, setBricks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noSellers, setNoSellers] = useState(false);

  useEffect(() => {
    // Simulate user pincode fetch (could be from localStorage or API)
    const savedPincode = localStorage.getItem('pincode') || '110001';
    setPincode(savedPincode);

    // Simulate fetching bricks from backend
    setTimeout(() => {
      if (savedPincode === '000000') {
        setNoSellers(true);
        setBricks([]);
      } else {
        setBricks([
          {
            id: '1',
            name: 'Standard Red Brick',
            description: 'High-quality red bricks for construction.',
            price: 9,
            discount: 10,
            image: '/brick1.jpg',
          },
          {
            id: '2',
            name: 'Fly Ash Brick',
            description: 'Eco-friendly and durable fly ash bricks.',
            price: 7,
            discount: 5,
            image: '/brick2.jpg',
          },
        ]);
        setNoSellers(false);
      }
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <SidebarMenu />

        <main className="flex-1 p-6 md:ml-64">
          <h1 className="text-2xl font-bold mb-4">
            Bricks available in your area ({pincode})
          </h1>

          {loading ? (
            <p>Loading bricks...</p>
          ) : noSellers ? (
            <div className="text-center mt-10">
              <h2 className="text-xl font-semibold text-red-600">Sorry, no sellers found in your area.</h2>
              <p className="text-gray-600 mt-2">Try checking nearby pincodes or explore our suggestions.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bricks.map((brick) => (
                <BrickCard key={brick.id} brick={brick} />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

