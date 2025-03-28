import React, { useState } from "react";

const CreateTokenForm = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState(10000);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToken = { name, symbol, supply };

    // 保存処理：既存のトークンを取得して新しいトークンを追加
    const existingTokens = JSON.parse(localStorage.getItem("tokens") || "[]");
    existingTokens.push(newToken);
    localStorage.setItem("tokens", JSON.stringify(existingTokens));

    alert(`トークンを作成しました：\nName: ${name}, Symbol: ${symbol}, Supply: ${supply}`);
    setName("");
    setSymbol("");
    setSupply(10000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2 className="text-xl font-bold mb-4">🪙 フリートークン作成</h2>
      <div>
        <label className="block">Token Name</label>
        <input
          className="border w-full p-2 mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block">Symbol</label>
        <input
          className="border w-full p-2 mb-2"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block">Initial Supply</label>
        <input
          type="number"
          className="border w-full p-2 mb-4"
          value={supply}
          onChange={(e) => setSupply(Number(e.target.value))}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Token
      </button>
    </form>
  );
};

export default CreateTokenForm;