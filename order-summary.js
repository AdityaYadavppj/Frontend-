// pages/customer/order-summary.js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function OrderSummary() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const order = {
    brickName: 'Premium Red Brick',
    price: 10,
    quantity: 10,
    address: '123 Main Street, Pincode 123456'
  };

  const total = order.price * order.quantity;

  const handleConfirm = () => {
    if (!agreed) return;
    // TODO: Post order to backend
    alert('Order confirmed!');
    router.push('/customer/orders');
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <p><strong>Brick:</strong> {order.brickName}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Price:</strong> ₹{order.price}</p>
      <p><strong>Address:</strong> {order.address}</p>
      <p><strong>Total:</strong> ₹{total}</p>
      <p><strong>Delivery Charge:</strong> ₹0 (Free)</p>

      <div className="mt-4 bg-gray-100 p-4 text-sm rounded">
        <p><strong>Note:</strong> Delivery is by the seller.</p>
        <p>No return or replacement via platform.</p>
      </div>

      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
          <span>I understand and agree to the terms.</span>
        </label>
      </div>

      {agreed && (
        <button onClick={handleConfirm} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Confirm Order
        </button>
      )}
    </div>
  );
}

