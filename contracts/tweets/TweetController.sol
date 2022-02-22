// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './TweetStorage.sol';
import '../users/UserStorage.sol';

contract TweetController is BaseController {
  function createTweet(string memory _text) public returns (uint) {
    ContractManager _manager = ContractManager(managerAddress);

    address _userStorageAddress = _manager.getAddress("UserStorage");

    UserStorage _userStorage = UserStorage(_userStorageAddress);

    // get user id from stored addresses
    uint _userId = _userStorage.addresses(msg.sender);

    // make sure user id isn't null
    require(_userId != 0);

    address _tweetStorageAddress = _manager.getAddress("TweetStorage");

    TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddress);

    return _tweetStorage.createTweet(_userId, _text);
  }
}
