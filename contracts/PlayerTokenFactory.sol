// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./PlayerToken.sol";

contract PlayerTokenFactory {
    event PlayerTokenCreated(address tokenAddress, string name, string symbol, uint256 supply);

    function createPlayerToken(string memory name, string memory symbol, uint256 supply) external returns (address) {
        PlayerToken token = new PlayerToken(name, symbol, supply);
        emit PlayerTokenCreated(address(token), name, symbol, supply);
        return address(token);
    }
}
