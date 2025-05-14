// pages/admin/dashboard.js
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ sellers: 0, orders: 0, payments: 0 });

  useEffect(() => {
    // TODO: Fetch admin summary stats
    setStats({ sellers: 12, orders: 58, payments: 9 });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold">Total Sellers</p>
          <p className="text-2xl">{stats.sellers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold">Total Orders</p>
          <p className="text-2xl">{stats.orders}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold">Weekly Payments</p>
          <p className="text-2xl">{stats.payments}</p>
        </div>
      </div>
    </div>
  );
}

