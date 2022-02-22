<template>
  <div class="feed">
    <p v-if="!tweets.length">No tweets yet</p>

    <template v-if="tweets.length">
      <Tweet
        v-for="(tweet, index) of tweets"
        :key="index"
        :username="tweet.user.username"
        :text="tweet.text"
        :posted-at="tweet.postedAt"
        :gravatar-email="tweet.user.gravatarEmail"
      >
      </Tweet>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TweetList',

  props: {
    tweets: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style scoped>
.feed {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  max-width: 560px;
  margin: 20px auto;
}

p {
  padding: 20px;
  text-align: center;
}
</style>
