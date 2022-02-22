<template>
  <Center style="max-width: 560px">
    <div v-if="user">
      <div class="profile-top">
        <div class="info">
          <h1>{{ user.firstName }} {{ user.lastName }}</h1>

          <p class="username">@{{ user.username }}</p>

          <p class="desc">
            {{ user.bio }}
          </p>
        </div>

        <Avatar :size="113" :gravatar-email="user.gravatarEmail"> </Avatar>
      </div>

      <h2>{{ user.firstName }}'s tweet ({{ userTweets.length }})</h2>

      <tweet-list :tweets="userTweets"></tweet-list>
    </div>
  </Center>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { getUser, getUserIdFromUsername } from '~/web3/users'

export default {
  name: 'Profile',

  layout: 'MainLayout',

  data() {
    return {
      user: null,
    }
  },

  computed: {
    ...mapState('tweets', ['userTweets']),
  },

  async mounted() {
    const username = this.$route.query.username

    if (!username) {
      this.$nuxt.error({
        message: 'Username is undefined',
      })

      return
    }

    try {
      const userId = await getUserIdFromUsername(username)

      await this.loadProfile(userId)

      await this.loadUserTweets(userId)
    } catch (error) {
      this.$nuxt.error({
        message: error.message,
      })
    }
  },

  methods: {
    ...mapActions('tweets', ['loadUserTweets']),
    async loadProfile(userId) {
      try {
        const user = await getUser(userId)

        if (!user) {
          this.$nuxt.error({
            message: 'User not found',
          })

          return
        }

        this.user = user
      } catch (error) {
        this.$nuxt.error({
          message: error.message,
        })
      }
    },
  },
}
</script>

<style scoped>
.profile-top {
  margin: 40px 0;
}

.info {
  display: inline-block;
  width: calc(82% - 113px);
  vertical-align: top;
}

h1 {
  font-size: 30px;
  font-weight: 500;
}

.username {
  font-size: 17px;
  font-weight: 400;
  margin: 7px 0;
}

.desc {
  font-size: 19px;
  font-weight: 400;
  margin-top: 22px;
}

h2 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 70px;
}
</style>
