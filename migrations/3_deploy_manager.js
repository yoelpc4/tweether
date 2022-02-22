const ContractManager = artifacts.require('ContractManager')
const UserStorage = artifacts.require('UserStorage')
const TweetStorage = artifacts.require('TweetStorage')

module.exports = (deployer) => {
  deployer
    .deploy(ContractManager)
    .then(() => ContractManager.deployed())
    .then((manager) =>
      Promise.all([
        manager.setAddress('UserStorage', UserStorage.address),
        manager.setAddress('TweetStorage', TweetStorage.address),
      ])
    )
}
