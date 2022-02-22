require('dotenv').config()

const receiver = process.env.METAMASK_ADDRESS

const amount = web3.utils.toWei('10', 'ether')

module.exports = async (callback) => {
  const addresses = await web3.eth.getAccounts()

  web3.eth.sendTransaction(
    {
      from: addresses[1],
      to: receiver,
      value: amount,
    },
    callback
  )
}
