const TweetherToken = artifacts.require('TweetherToken')
const TweetherICO = artifacts.require('TweetherICO')

module.exports = (deployer) => {
  deployer
    .deploy(TweetherICO, TweetherToken.address)
    .then(() => TweetherToken.deployed())
    .then((token) => token.fundICO(TweetherICO.address))
}
