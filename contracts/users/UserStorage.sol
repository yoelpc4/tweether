// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../helpers/BaseStorage.sol';

contract UserStorage is BaseStorage {
  struct User {
    uint id;
    bytes32 username; // use bytes32 instead of string because username usually short
    bytes32 firstName;
    bytes32 lastName;
    string bio;
    string gravatarEmail;
  }

  // hash map to store user's profile with their id as the key
  mapping(uint => User) public users;

  mapping(address => uint) public addresses;

  mapping(bytes32 => uint) public usernames;

  uint latestUserId = 0;

  function createUser(
    address _address,
    bytes32 _username,
    bytes32 _firstName,
    bytes32 _lastName,
    string memory _bio,
    string memory _gravatarEmail
  ) public onlyController returns (uint) {
    latestUserId++;

    users[latestUserId] = User(
      latestUserId,
      _username,
      _firstName,
      _lastName,
      _bio,
      _gravatarEmail
    );

    addresses[_address] = latestUserId;

    usernames[_username] = latestUserId;

    return latestUserId;
  }
}
