const hre = require("hardhat");

async function main() {
  console.log("=== Script started ===");

  const factoryAddress = "0x77Ac72c5A924845D961e4E0267710b389203e565"; // ← あなたの最新のFactoryアドレスに差し替えてください

  const [deployer] = await hre.ethers.getSigners(); // ✅ Signerを取得
  console.log("Using account:", deployer.address);

  // ✅ Signer を明示的に指定してコントラクトインスタンス取得！
  const PlayerTokenFactory = await hre.ethers.getContractAt(
    "PlayerTokenFactory",
    factoryAddress,
    deployer // ← ここがとても重要！
  );

  console.log("✅ Contract instance fetched");

  const tx = await PlayerTokenFactory.createPlayerToken("ShoheiToken", "SHO", 10000);
  console.log("📤 Transaction sent, waiting for confirmation...");
  await tx.wait();

  console.log("🎉 Player token created!");
}

main().catch((error) => {
  console.error("❌ Error occurred:", error);
  process.exitCode = 1;
});
