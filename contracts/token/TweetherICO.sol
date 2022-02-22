// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TweetherToken.sol";

contract TweetherICO {
  TweetherToken token;

  uint256 public RATE = 1000;

  constructor(address _tokenAddress) {
    token = TweetherToken(_tokenAddress);
  }

  function _getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
    return (_weiAmount / (10 ** 18)) * RATE;
  }

  receive() external payable {
    uint256 _amount = _getTokenAmount(msg.value);

    token.transfer(msg.sender, _amount);
  }
}
