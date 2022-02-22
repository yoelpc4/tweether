const { assertVMException } = require('../utils')
const UserController = artifacts.require('UserController')
const UserStorage = artifacts.require('UserStorage')

contract('users', () => {
  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed()

    try {
      const username = web3.utils.fromAscii('yoel')

      const firstName = web3.utils.fromAscii('Yoel')

      const lastName = web3.utils.fromAscii('Peter Chandra')

      await storage.createUser(
        0x0,
        username,
        firstName,
        lastName,
        'I like building stuff',
        'example@example.com'
      )

      assert.fail()
    } catch (error) {
      assertVMException(error)
    }
  })

  it('can create user with controller', async () => {
    const controller = await UserController.deployed()

    const username = web3.utils.fromAscii('yoel')

    const firstName = web3.utils.fromAscii('Yoel')

    const lastName = web3.utils.fromAscii('Peter Chandra')

    const tx = await controller.createUser(
      username,
      firstName,
      lastName,
      'I like building stuff',
      'example@example.com'
    )

    assert.isOk(tx)
  })

  it('can get user', async () => {
    const storage = await UserStorage.deployed()

    const userId = 1

    const { id, username } = await storage.users.call(userId)

    assert.equal(parseInt(id), userId)

    assert.equal(web3.utils.toAscii(username).replace(/\u0000/g, ''), 'yoel')
  })
})
