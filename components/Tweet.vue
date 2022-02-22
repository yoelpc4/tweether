<template>
  <div class="tweet">
    <Avatar :size="42" :gravatar-email="gravatarEmail"> </Avatar>

    <div class="info">
      <div class="top">
        <nuxt-link class="username" :to="`/profile?username=${username}`">
          {{ username }}
        </nuxt-link>

        <time>
          {{ postedAt.toRelative() }}
        </time>
      </div>

      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'Tweet',

  props: {
    gravatarEmail: {
      required: true,
      type: String,
    },
    postedAt: {
      required: true,
      type: DateTime,
    },
    text: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
.tweet {
  padding: 20px;
  border-bottom: 1px solid rgba(151, 151, 151.17);
}

.tweet:last-child {
  border-bottom: none;
}

.avatar {
  width: 42px;
  height: 42px;
  background-color: gray;
  border-radius: 50%;
  display: inline-block;
}

.info {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
  width: calc(98% - 62px);
}

.top {
  display: flex;
}

a {
  font-size: 17px;
  color: #5d5d65;
  font-weight: 600;
  flex-grow: 1;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  font-size: 16px;
  color: #444448;
  line-height: 24px;
  margin-top: 6px;
}

time {
  font-size: 16px;
  color: rgba(68, 68, 72.45);
}
</style>
