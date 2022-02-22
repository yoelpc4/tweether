const TweetherToken = artifacts.require('TweetherToken')
const TweetherICO = artifacts.require('TweetherICO')
const {
  utils: { toWei },
} = require('web3')

contract('token', (accounts) => {
  it('distribute token supply', async () => {
    const token = await TweetherToken.deployed()

    const ico = await TweetherICO.deployed()

    const icoBalance = await token.balanceOf.call(ico.address)

    const founderBalance = await token.balanceOf.call(accounts[0])

    assert.equal(icoBalance.toString(), '750000')

    assert.equal(founderBalance.toString(), '250000')
  })

  it('can buy token', async () => {
    const token = await TweetherToken.deployed()

    const ico = await TweetherICO.deployed()

    const userAddress = accounts[1]

    const value = toWei('1', 'ether')

    await ico.sendTransaction({
      from: userAddress,
      value,
    })

    const userBalance = await token.balanceOf.call(userAddress)

    assert.equal(userBalance.toString(), '1000')

    const icoBalance = await token.balanceOf.call(ico.address)

    assert.equal(icoBalance.toString(), '749000')
  })
})
