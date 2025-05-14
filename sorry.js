// pages/sorry.js
export default function SorryPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl text-center shadow max-w-md">
        <h1 className="text-3xl font-bold text-red-600">Sorry!</h1>
        <p className="mt-4 text-gray-700">We couldn't find any sellers for your pincode.</p>
        <p className="text-sm mt-2 text-gray-500">Try exploring nearby areas or check back later.</p>
      </div>
    </div>
  );
}

