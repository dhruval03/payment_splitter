const { PrivateKey } = require("@hashgraph/sdk");

// Replace with your ED25519 private key
const ed25519PrivateKey = "3030020100300706052b8104000a04220420d38a3fd270417a86fc6790a7e228950e5772303d6a27caeb02f75cdc9ec2d4b1";

// Convert to 32-byte private key
const privateKey = PrivateKey.fromString(ed25519PrivateKey);
const rawPrivateKey = privateKey.toStringRaw(); // 32-byte private key

console.log("32-byte Private Key:", rawPrivateKey);