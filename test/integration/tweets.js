const { assertVMException } = require('../utils')
const UserController = artifacts.require('UserController')
const TweetController = artifacts.require('TweetController')
const TweetStorage = artifacts.require('TweetStorage')

contract('tweets', () => {
  before(async () => {
    const userController = await UserController.deployed()

    const username = web3.utils.fromAscii('yoel')

    const firstName = web3.utils.fromAscii('Yoel')

    const lastName = web3.utils.fromAscii('Peter Chandra')

    await userController.createUser(
      username,
      firstName,
      lastName,
      'I like building stuff',
      'example@example.com'
    )
  })

  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed()

    try {
      await storage.createTweet('Yoel')

      assert.fail()
    } catch (error) {
      assertVMException(error)
    }
  })

  it('can create tweet with controller', async () => {
    const controller = await TweetController.deployed()

    const tx = await controller.createTweet('Hello World')

    assert.isOk(tx)
  })

  it('can get tweet', async () => {
    const storage = await TweetStorage.deployed()

    const tweetId = 1

    const { id, text } = await storage.tweets.call(tweetId)

    assert.equal(parseInt(id), tweetId)

    assert.equal(text, 'Hello World')
  })

  it('can get all tweet IDs from user', async () => {
    const storage = await TweetStorage.deployed()

    const userId = 1

    const ids = await storage.getTweetIdsFromUser.call(userId)

    const expectedTweetId = 1

    assert.isOk(Array.isArray(ids))

    assert.equal(parseInt(ids[0]), expectedTweetId)
  })

  it('can get tweet ID based on index', async () => {
    const storage = await TweetStorage.deployed()

    const tweetId = await storage.tweetIds.call(0)

    assert.equal(tweetId, 1)
  })
})
