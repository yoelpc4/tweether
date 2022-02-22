// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../helpers/Owned.sol";

contract TweetherToken is ERC20, Owned {
  uint256 public FOR_ICO = 750000;

  uint256 public FOR_FOUNDER = 250000;

  constructor() ERC20("TweetherToken", "TWE") {
    _mint(msg.sender, FOR_FOUNDER + FOR_ICO);
  }

  function decimals() public view virtual override returns (uint8) {
    return 0;
  }

  function fundICO(address _icoAddress) public onlyOwner {
    transfer(_icoAddress, FOR_ICO);
  }
}
