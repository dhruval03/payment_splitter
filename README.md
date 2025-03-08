# Decentralized Payment Splitter


## Overview

The **Decentralized Payment Splitter** is a smart contract that enables seamless and trustless distribution of funds among multiple recipients. This project ensures that payments are split according to predefined shares, leveraging blockchain technology for transparency and immutability.


## Features

- Smart contract-based payment splitting

- Trustless and automated distribution

- Gas-efficient transactions

- Supports multiple recipients with predefined shares

- Compatible with Ethereum and EVM-compatible blockchains


## Technologies Used

- Solidity

- Hardhat/Truffle

- OpenZeppelin Contracts

- Ethereum/EVM-compatible networks

- JavaScript/TypeScript for testing


## Installation


1. Clone the repository:

```sh

git clone https://github.com/dhruval03/payment_splitter.git

cd payment_splitter

```


2. Install dependencies:

```sh

npm install

```


3. Compile the smart contract:

```sh

npx hardhat compile

```


## Usage


### Deploying the Contract

1. Configure your network settings in `hardhat.config.js`.

2. Deploy the contract using Hardhat:

```sh

npx hardhat run scripts/deploy.js --network hedera

```


### Interacting with the Contract

- Send ETH or tokens to the contract address.

- Call the `release` function to distribute funds among recipients.

- Use Hardhat or Ethers.js scripts to automate interactions.


## Testing

Run the test suite to ensure functionality:

```sh

npx hardhat test

```


## License

This project is licensed under the MIT License.


## Contribution

Feel free to contribute by submitting issues or pull requests.


## Contact

For questions or support, reach out to `maniyardhruval1290@gmail.com` or open an issue on GitHub.