
// pages/seller/manage-bricks.js
import { useState, useEffect } from 'react';

export default function ManageBricks() {
  const [bricks, setBricks] = useState([]);
  const [newBrick, setNewBrick] = useState({ name: '', price: '', image: '', description: '' });

  useEffect(() => {
    // TODO: Fetch seller's bricks
    setBricks([{ id: 1, name: 'Clay Brick', price: 7 }]);
  }, []);

  const handleCreate = () => {
    // TODO: Send POST to backend
    setBricks([...bricks, { ...newBrick, id: Date.now() }]);
    setNewBrick({ name: '', price: '', image: '', description: '' });
  };

  const handleDelete = id => {
    // TODO: Send DELETE to backend
    setBricks(bricks.filter(b => b.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Bricks</h2>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Brick</h3>
        <div className="space-y-2">
          <input placeholder="Name" value={newBrick.name} onChange={e => setNewBrick({ ...newBrick, name: e.target.value })} className="w-full p-2 border rounded" />
          <input placeholder="Price" type="number" value={newBrick.price} onChange={e => setNewBrick({ ...newBrick, price: e.target.value })} className="w-full p-2 border rounded" />
          <input placeholder="Image URL" value={newBrick.image} onChange={e => setNewBrick({ ...newBrick, image: e.target.value })} className="w-full p-2 border rounded" />
          <textarea placeholder="Description" value={newBrick.description} onChange={e => setNewBrick({ ...newBrick, description: e.target.value })} className="w-full p-2 border rounded" />
          <button onClick={handleCreate} className="bg-green-600 text-white px-4 py-2 rounded">Add Brick</button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Bricks</h3>
        {bricks.map(brick => (
          <div key={brick.id} className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center">
            <span>{brick.name} - ₹{brick.price}</span>
            <button onClick={() => handleDelete(brick.id)} className="text-red-500 hover:underline">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
