<div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-blue-600">
    Token Detail: {token.name}
  </h2>
  <ul className="mb-4 text-sm text-gray-100 space-y-1">
    <li><strong>Symbol:</strong> {token.symbol}</li>
    <li><strong>Initial Supply:</strong> {token.supply}</li>
    <li><strong>Current Price:</strong> {token.price} ATHLX</li>
    <li><strong>You Own:</strong> {portfolio[token.symbol] || 0} tokens</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
  <ul className="list-disc list-inside text-sm text-gray-300">
    {transactions.length === 0 && <li>No transactions yet.</li>}
    {transactions.map((tx, index) => (
      <li key={index}>
        [{new Date(tx.time).toLocaleString()}] {tx.type} at {tx.price} ATHLX
      </li>
    ))}
  </ul>
</div>