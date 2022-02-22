import {
  getLatestTweetIds,
  getTweetIdsFromUser,
  getTweetsFromTweetIds,
} from '~/web3/tweets'

const reverseSortTweets = (tweets) =>
  tweets.sort((first, second) => {
    if (first.postedAt < second.postedAt) {
      return 1
    }

    if (first.postedAt > second.postedAt) {
      return -1
    }

    return 0
  })

export const state = () => ({
  latestTweets: [],
  userTweets: [],
})

export const mutations = {
  SET_LATEST_TWEETS(state, latestTweets) {
    state.latestTweets = latestTweets
  },
  SET_USER_TWEETS(state, userTweets) {
    state.userTweets = userTweets
  },
}

export const actions = {
  async loadLatestTweets({ commit }) {
    const latestTweetIds = await getLatestTweetIds()

    const latestTweets = await getTweetsFromTweetIds(latestTweetIds)

    commit('SET_LATEST_TWEETS', reverseSortTweets(latestTweets))
  },
  async loadUserTweets({ commit }, userId) {
    const userTweetIds = await getTweetIdsFromUser(userId)

    const userTweets = await getTweetsFromTweetIds(userTweetIds)

    commit('SET_USER_TWEETS', reverseSortTweets(userTweets))
  },
}
