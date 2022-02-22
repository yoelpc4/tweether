// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Owned {
  address ownerAddress;

  modifier onlyOwner() {
    require(msg.sender == ownerAddress);
    _;
  }

  constructor() {
    ownerAddress = msg.sender;
  }

  function transferOwnership(address _ownerAddress) public onlyOwner {
    require(_ownerAddress != address(0));

    ownerAddress = _ownerAddress;
  }
}
