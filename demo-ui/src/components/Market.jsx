<div
  key={index}
  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-4 w-full max-w-md"
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