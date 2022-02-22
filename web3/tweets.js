import { DateTime } from 'luxon'
import { eth, getInstance } from '~/web3/provider'
import { getUser } from '~/web3/users'
import TweetStorage from '~/web3/artifacts/TweetStorage.json'
import TweetController from '~/web3/artifacts/TweetController.json'

export const createTweet = async (text) => {
  const addresses = await eth.requestAccounts()

  if (!addresses.length) {
    return null
  }

  const controller = await getInstance(TweetController)

  return await controller.createTweet(text, {
    from: addresses[0],
  })
}

export const getTweet = async (tweetId) => {
  const storage = await getInstance(TweetStorage)

  const { id, text, userId, postedAt } = await storage.tweets.call(tweetId)

  if (!parseInt(id)) {
    return null
  }

  return {
    id: tweetId,
    text,
    userId: parseInt(userId),
    postedAt: DateTime.fromSeconds(parseInt(postedAt)),
  }
}

export const getTweetIdsFromUser = async (userId) => {
  const storage = await getInstance(TweetStorage)

  return await storage.getTweetIdsFromUser.call(userId)
}

export const getTweetsFromTweetIds = async (tweetIds) => {
  const getTweets = tweetIds.map((tweetId) => getTweet(tweetId))

  const tweets = await Promise.all(getTweets)

  const getUsers = tweets.map((tweet) => getUser(tweet.userId))

  const users = await Promise.all(getUsers)

  return tweets.map((tweet, index) => {
    return {
      ...tweet,
      id: parseInt(tweet.id),
      user: users[index],
    }
  })
}

export const getLatestTweetIds = async (amount = 5, page = 1) => {
  const storage = await getInstance(TweetStorage)

  const countTweets = await storage.getCountTweets.call()

  const getTweetIds = []

  const lastIndex = countTweets - 1

  const pageIndex = page - 1

  const startIndex = lastIndex - amount * pageIndex

  const endIndex = startIndex - amount

  for (let i = startIndex; i > endIndex; i--) {
    if (i < 0) {
      break
    }

    getTweetIds.push(storage.tweetIds(i))
  }

  return await Promise.all(getTweetIds)
}
