//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract USDC is ERC20, Ownable {
  constructor() ERC20("USDC", "USDC") {
    mint(_msgSender(), 1000000 ether);
  }

  function mint(address to, uint256 amount) public {
    _mint(to, amount);
  }
}
