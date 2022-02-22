<template>
  <nav v-if="user">
    <button @click="$emit('toggleComposeModal')">
      <img src="~/assets/icons/compose.svg" alt="compose" />
    </button>

    <nuxt-link :to="`/profile?username=${user.username}`" class="username">
      <Avatar :gravatar-email="user.gravatarEmail" style="margin-bottom: -2px">
      </Avatar>

      <span> {{ user.firstName }} {{ user.lastName }} </span>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',

  computed: {
    ...mapState('auth', ['user']),
  },
}
</script>

<style scoped>
nav {
  display: inline-block;
  float: right;
}

nav button,
nav a {
  min-height: 33px;
  border: none;
  padding: 7px;
  text-align: center;
  border-radius: 24px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.1s;
  color: inherit;
}

nav button,
nav a:hover {
  background-color: rgba(140, 111, 193, 0.14);
}

nav button:focus {
  outline: none;
}

.username {
  font-size: 18px;
  text-decoration: none;
}

.username span {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
}

nav :global(svg) {
  margin-bottom: -2px;
}
</style>
