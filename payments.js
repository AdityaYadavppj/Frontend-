// pages/seller/payments.js
import { useState, useEffect } from 'react';

export default function SellerPayments() {
  const [orders, setOrders] = useState([]);
  const unpaid = orders.filter(o => !o.paid).length;
  const totalDue = unpaid * 20;

  useEffect(() => {
    // TODO: Fetch weekly order/payment data
    setOrders([
      { id: 1, customer: 'A', paid: true },
      { id: 2, customer: 'B', paid: false },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Weekly Payment Summary</h2>
      <p className="mb-2">₹20 per order | Unpaid Orders: {unpaid}</p>
      <p className="text-lg font-semibold mb-4">Total Due: ₹{totalDue}</p>
      {totalDue > 0 ? (
        <button className="bg-purple-600 text-white px-5 py-2 rounded">Pay via Razorpay</button>
      ) : (
        <p className="text-green-600 font-medium">All payments completed</p>
      )}
    </div>
  );
}

