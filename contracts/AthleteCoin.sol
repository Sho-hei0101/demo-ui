// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AthleteCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("AthleteCoin", "ATHLX") {
        _mint(msg.sender, initialSupply);
    }
}

contract PlayerToken is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply)
        ERC20(name, symbol)
    {
        _mint(msg.sender, initialSupply);
    }
}

