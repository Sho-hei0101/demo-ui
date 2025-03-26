const hre = require("hardhat");

async function main() {
  const PlayerTokenFactory = await hre.ethers.getContractFactory("PlayerTokenFactory");
  const factory = await PlayerTokenFactory.deploy();
  await factory.waitForDeployment();

  const address = await factory.getAddress();
  console.log("✅ Factory deployed to:", address);
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exitCode = 1;
});
