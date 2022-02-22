// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../helpers/BaseStorage.sol';

contract TweetStorage is BaseStorage {
  struct Tweet {
    uint id;
    string text;
    uint userId;
    uint postedAt;
  }

  mapping(uint => Tweet) public tweets;

  mapping(uint => uint[]) userTweetIds;

  uint[] public tweetIds;

  uint latestTweetId = 0;

  function createTweet(uint _userId, string memory _text) public onlyController returns (uint) {
    latestTweetId++;

    tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, block.timestamp);

    userTweetIds[_userId].push(latestTweetId);

    tweetIds.push(latestTweetId);

    return latestTweetId;
  }

  function getTweetIdsFromUser(uint _userId) public view returns (uint[] memory) {
    return userTweetIds[_userId];
  }

  function getCountTweets() public view returns (uint _countTweets) {
    return tweetIds.length;
  }
}
