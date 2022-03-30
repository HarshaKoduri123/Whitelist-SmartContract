const { ethers } = require("hardhat");

async function main() {
    const WhitelistContract = await ethers.getContractFactory("WhiteList");

    const deployedWhitelistContract =  await WhitelistContract.deploy(10);

    await deployedWhitelistContract.deployed();

    console.log(
        "Whitelist Contract Address:",
        deployedWhitelistContract.address
      );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });