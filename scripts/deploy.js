require("dotenv").config();
const { ethers } = require("hardhat");
const { Client, PrivateKey, FileCreateTransaction, ContractCreateTransaction, ContractFunctionParameters, Hbar } = require("@hashgraph/sdk");
const fs = require("fs");

// Hedera Client Setup
const client = Client.forTestnet();
client.setOperator(process.env.HEDERA_ACCOUNT_ID, PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY));

async function deployContract() {
    // Read compiled contract bytecode
    const contractJson = JSON.parse(fs.readFileSync("./artifacts/contracts/PaymentSplitter.sol/PaymentSplitter.json", "utf8"));
    const bytecode = contractJson.deployedBytecode;

    // Store contract bytecode on Hedera
    const fileCreateTx = new FileCreateTransaction().setContents(bytecode);
    const fileResponse = await fileCreateTx.execute(client);
    const fileReceipt = await fileResponse.getReceipt(client);
    const bytecodeFileId = fileReceipt.fileId;
    console.log("Smart Contract Bytecode File ID:", bytecodeFileId.toString());

    // Deploy contract
    const contractTx = new ContractCreateTransaction()
        .setBytecodeFileId(bytecodeFileId)
        .setGas(2000000) // Adjust gas if needed
        .setConstructorParameters(new ContractFunctionParameters());
    const contractResponse = await contractTx.execute(client);
    const contractReceipt = await contractResponse.getReceipt(client);
    const contractId = contractReceipt.contractId;
    console.log("Smart Contract ID:", contractId.toString());

    return contractId;
}

deployContract().then(contractId => console.log("Deployment complete!"));
