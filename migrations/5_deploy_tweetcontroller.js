const TweetController = artifacts.require('TweetController')
const TweetStorage = artifacts.require('TweetStorage')
const ContractManager = artifacts.require('ContractManager')

module.exports = (deployer) => {
  deployer
    .deploy(TweetController)
    .then(() => TweetController.deployed())
    .then((tweetController) => {
      tweetController.setManagerAddress(ContractManager.address)

      return Promise.all([ContractManager.deployed(), TweetStorage.deployed()])
    })
    .then(([manager, storage]) =>
      Promise.all([
        manager.setAddress('TweetController', TweetController.address),
        storage.setControllerAddress(TweetController.address),
      ])
    )
}
