// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  UserStorage userStorage;

  constructor() {
    userStorage = new UserStorage();

    userStorage.setControllerAddress(address(this));
  }

  function testCreateFirstUser() public {
    uint _expectedId = 1;

    Assert.equal(
      userStorage.createUser(
        address(0),
        "yoel",
        "Yoel",
        "Peter Chandra",
        "I like building staff",
        "example@example.com"
      ),
      _expectedId,
      "Should create user with ID 1"
    );
  }
}
