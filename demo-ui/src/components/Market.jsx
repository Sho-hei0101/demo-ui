import React from "react";

export default function Market() {
  const storedToken = localStorage.getItem("tokenData");
  const token = storedToken ? JSON.parse(storedToken) : null;

  if (!token) {
    return <p className="text-white p-4">No token created yet.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Token Details</h2>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Name:</strong> {token.name}</li>
        <li><strong>Symbol:</strong> {token.symbol}</li>
        <li><strong>Initial Supply:</strong> {token.supply}</li>
      </ul>
    </div>
  );
}