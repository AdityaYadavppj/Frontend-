// pages/team.js
export default function Team() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Meet the Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <img src="/team1.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-2" />
          <h2 className="text-xl font-semibold">Rahul</h2>
          <p className="text-sm text-gray-600">Founder</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img src="/team2.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-2" />
          <h2 className="text-xl font-semibold">Priya</h2>
          <p className="text-sm text-gray-600">Developer</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img src="/team3.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-2" />
          <h2 className="text-xl font-semibold">Vikram</h2>
          <p className="text-sm text-gray-600">Operations</p>
        </div>
      </div>
    </div>
  );
}

