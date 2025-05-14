// pages/customer/orders.js
import { useEffect, useState } from 'react';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: Fetch orders from backend
    setOrders([
      { id: 1, brick: 'Red Brick', status: 'Confirmed' },
      { id: 2, brick: 'Clay Brick', status: 'Out for Delivery' },
      { id: 3, brick: 'Fly Ash Brick', status: 'Delivered' }
    ]);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      {orders.map(order => (
        <div key={order.id} className="border p-4 rounded mb-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold">{order.brick}</h2>
          <p>Status: <span className="font-medium">{order.status}</span></p>
          {order.status === 'Delivered' && (
            <button className="mt-2 text-blue-600 underline text-sm">Leave a Review</button>
          )}
        </div>
      ))}
    </div>
  );
}

