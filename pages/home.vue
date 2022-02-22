<template>
  <Center>
    <h2>Latest tweets</h2>

    <TweetList :tweets="latestTweets"></TweetList>
  </Center>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',

  layout: 'MainLayout',

  middleware: ['auth'],

  computed: {
    ...mapState('tweets', ['latestTweets']),
  },

  async mounted() {
    try {
      await this.loadLatestTweets()
    } catch (error) {
      this.$nuxt.error({
        message: error.message,
      })
    }
  },

  methods: {
    ...mapActions('tweets', ['loadLatestTweets']),
  },
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  color: rgba(84, 83, 98, 0.64);
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 4px;
}
</style>
