import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function Market() {
  const [tokens, setTokens] = useState([]);
  const [portfolio, setPortfolio] = useState({ ATHLX: 1000 });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tokens') || '[]');
    const withPrice = stored.map(token => ({
      ...token,
      price: 10 + Math.random() * 10,
      history: Array.from({ length: 10 }, (_, i) => ({
        name: `T${i + 1}`,
        value: 10 + Math.random() * 10
      }))
    }));
    setTokens(withPrice);
  }, []);

  const handleBuy = (token) => {
    const cost = token.price;
    if (portfolio.ATHLX >= cost) {
      setPortfolio(prev => ({
        ...prev,
        ATHLX: prev.ATHLX - cost,
        [token.symbol]: (prev[token.symbol] || 0) + 1
      }));
    }
  };

  const handleSell = (token) => {
    if ((portfolio[token.symbol] || 0) > 0) {
      setPortfolio(prev => ({
        ...prev,
        ATHLX: prev.ATHLX + token.price,
        [token.symbol]: prev[token.symbol] - 1
      }));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📊 Athlete Token Market</h1>
      <p className="mb-6">💰 Your ATHLX: {portfolio.ATHLX.toFixed(2)}</p>

      {tokens.length === 0 && <p>No token created yet.</p>}

      {tokens.map((token, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-4 w-full max-w-2xl"
        >
          <h2 className="text-xl font-bold text-blue-600 hover:underline">
            <Link to={`/token/${token.symbol}`}>{token.name}</Link>
          </h2>
          <p><strong>Symbol:</strong> {token.symbol}</p>
          <p><strong>Initial Supply:</strong> {token.supply}</p>
          <p><strong>Price (ATHLX):</strong> {token.price.toFixed(2)}</p>

          <div className="my-2">
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={token.history}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
                <XAxis dataKey="name" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleBuy(token)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Buy
            </button>
            <button
              onClick={() => handleSell(token)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Sell
            </button>
            <span className="text-sm text-gray-300 ml-auto">
              You own: {portfolio[token.symbol] || 0}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Market;