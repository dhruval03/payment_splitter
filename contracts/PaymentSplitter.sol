// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract PaymentSplitter {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function splitPayment(address payable[] memory recipients, uint256[] memory percentages) public payable {
        require(recipients.length == percentages.length, "Recipients and percentages must match");
        require(msg.value > 0, "Must send HBAR");

        uint256 totalPercentage = 0;
        for (uint i = 0; i < percentages.length; i++) {
            totalPercentage += percentages[i];
        }
        require(totalPercentage == 100, "Total percentage must be 100");

        for (uint i = 0; i < recipients.length; i++) {
            uint256 amount = (msg.value * percentages[i]) / 100;
            recipients[i].transfer(amount);
        }
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
