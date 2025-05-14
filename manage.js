// pages/admin/manage.js
import { useEffect, useState } from 'react';

export default function AdminManage() {
  const [sellers, setSellers] = useState([]);
  const [bricks, setBricks] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: Fetch from backend
    setSellers([{ id: 1, name: 'Seller A', status: 'Pending' }]);
    setBricks([{ id: 1, name: 'Red Brick', seller: 'Seller A' }]);
    setOrders([{ id: 1, customer: 'Ravi', status: 'Delivered' }]);
  }, []);

  const toggleSeller = (id) => {
    // TODO: Toggle seller status
    setSellers(prev => prev.map(s => s.id === id ? { ...s, status: s.status === 'Approved' ? 'Disabled' : 'Approved' } : s));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Platform</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sellers</h2>
        {sellers.map(seller => (
          <div key={seller.id} className="bg-white p-4 mb-2 rounded shadow flex justify-between">
            <span>{seller.name} — {seller.status}</span>
            <button onClick={() => toggleSeller(seller.id)} className="bg-blue-500 text-white px-3 py-1 rounded">
              {seller.status === 'Approved' ? 'Disable' : 'Approve'}
            </button>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Bricks</h2>
        {bricks.map(brick => (
          <div key={brick.id} className="bg-white p-4 mb-2 rounded shadow">
            {brick.name} by {brick.seller}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Orders</h2>
        {orders.map(order => (
          <div key={order.id} className="bg-white p-4 mb-2 rounded shadow">
            Order #{order.id} - {order.customer} ({order.status})
          </div>
        ))}
      </section>
    </div>
  );
}

