// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Owned.sol';

contract BaseController is Owned {
  address managerAddress;

  function setManagerAddress(address _managerAddress) public onlyOwner {
    managerAddress = _managerAddress;
  }
}
