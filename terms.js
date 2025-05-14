
// pages/terms.js
export default function TermsPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4 text-gray-700">
        By using this platform, you agree to the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>All bricks are sold directly by third-party sellers.</li>
        <li>The platform is not responsible for delivery delays or product issues.</li>
        <li>Payments to sellers are settled weekly based on completed orders.</li>
        <li>Customers must accept the delivery disclaimer at checkout.</li>
        <li>There are no return or refund policies for orders placed.</li>
      </ul>
      <p className="mt-6 text-sm text-gray-500">Updated: May 2025</p>
    </div>
  );
}
