const hre = require("hardhat");

async function main() {
    const PaymentSplitter = await hre.ethers.getContractFactory("PaymentSplitter");
    const contract = await PaymentSplitter.deploy();
    await contract.deployed();
    console.log("Contract deployed at:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
