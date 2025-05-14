// pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', mobile: '', password: '', pincode: '' });
  const router = useRouter();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // TODO: Add registration API
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="text" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="text" name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} className="w-full p-3 border rounded" required />
          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">Register</button>
        </form>
      </div>
    </div>
  );
}

