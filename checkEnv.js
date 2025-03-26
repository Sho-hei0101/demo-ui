// checkEnv.js
require("dotenv").config(); // .envを読み込む

console.log("🔑 PRIVATE_KEY:", process.env.PRIVATE_KEY);
console.log("🌐 SEPOLIA_RPC_URL:", process.env.SEPOLIA_RPC_URL);
console.log("🔍 ETHERSCAN_API_KEY:", process.env.ETHERSCAN_API_KEY);
