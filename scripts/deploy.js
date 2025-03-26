const { ethers } = require("hardhat");

async function main() {
  const PlayerTokenFactory = await ethers.getContractFactory("PlayerTokenFactory");
  const factory = await PlayerTokenFactory.deploy();
  await factory.deployed();

  console.log("PlayerTokenFactory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
