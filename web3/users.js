import Web3 from 'web3'
import { eth, getInstance } from '~/web3/provider'
import UserStorage from '~/web3/artifacts/UserStorage.json'
import UserController from '~/web3/artifacts/UserController.json'

export const getProvidedUserId = async () => {
  const addresses = await eth.requestAccounts()

  if (!addresses.length) {
    return null
  }

  const storage = await getInstance(UserStorage)

  const userId = await storage.addresses.call(addresses[0])

  const id = parseInt(userId)

  if (!id) {
    return null
  }

  return id
}

export const getUserIdFromUsername = async (username) => {
  const storage = await getInstance(UserStorage)

  return await storage.usernames.call(Web3.utils.fromAscii(username))
}

export const getUser = async (userId) => {
  const storage = await getInstance(UserStorage)

  const result = await storage.users.call(userId)

  const { id, username, firstName, lastName, bio, gravatarEmail } = result

  if (!parseInt(id)) {
    return null
  }

  return {
    id: userId,
    username: Web3.utils.toAscii(username).replace(/\u0000/g, ''),
    firstName: Web3.utils.toAscii(firstName).replace(/\u0000/g, ''),
    lastName: Web3.utils.toAscii(lastName).replace(/\u0000/g, ''),
    bio,
    gravatarEmail,
  }
}

export const createUser = async (
  username,
  firstName,
  lastName,
  bio,
  gravatarEmail
) => {
  const addresses = await eth.requestAccounts()

  if (!addresses.length) {
    return null
  }

  const controller = await getInstance(UserController)

  return await controller.createUser(
    Web3.utils.fromAscii(username),
    Web3.utils.fromAscii(firstName),
    Web3.utils.fromAscii(lastName),
    bio,
    gravatarEmail,
    {
      from: addresses[0],
    }
  )
}
