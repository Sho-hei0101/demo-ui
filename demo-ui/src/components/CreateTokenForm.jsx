import React, { useState } from "react";

export default function CreateTokenForm() {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tokenData = { tokenName, symbol, supply };
    localStorage.setItem("tokenData", JSON.stringify(tokenData));
    alert("Token created and saved to localStorage!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Token</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Token Name</label>
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              placeholder="Enter token name"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Symbol</label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              placeholder="e.g. ATH"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Initial Supply</label>
            <input
              type="number"
              value={supply}
              onChange={(e) => setSupply(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded"
              placeholder="1000000"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Token
          </button>
        </form>
      </div>
    </div>
  );
}