<template>
  <div>
    <h3>Compose a new tweet</h3>

    <form id="form-compose-tweet" @submit.prevent="onCreateTweet">
      <InputTextarea v-model="text" title="Text" maxlength="140" required>
      </InputTextarea>

      <Button
        type="submit"
        form="form-compose-tweet"
        :disabled="loading"
        style="margin-top: 12px; float: right"
      >
        Post
      </Button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { createTweet } from '~/web3/tweets'

export default {
  name: 'ComposeTweetForm',

  data() {
    return {
      text: null,
      loading: false,
    }
  },

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {
    ...mapActions('tweets', ['loadLatestTweets', 'loadUserTweets']),
    async onCreateTweet() {
      this.loading = true

      const infoToast = this.$toast.info(
        'Your tweet is being posted. This will take a couple of seconds...'
      )

      try {
        await createTweet(this.text)

        await this.loadLatestTweets()

        await this.loadUserTweets(this.user.id)

        this.text = null

        this.$toast.success('Your tweet has been posted!', {
          duration: 4000,
        })

        this.$emit('close')
      } catch (error) {
        this.$nuxt.error({
          message: error.message,
        })

        this.$toast.error("Sorry, we couldn't post your tweet!", {
          duration: 4000,
        })
      }

      infoToast.goAway()

      this.loading = false
    },
  },
}
</script>

<style scoped>
textarea {
  box-sizing: border-box;
  margin: 10px 0 0 0;
  border: 2px solid rgba(107, 108, 139, 0.58);
  border-radius: 7px;
  width: 100%;
  padding: 11px;
  font-size: 16px;
}

textarea:focus {
  outline: none;
}
</style>
