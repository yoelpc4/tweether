<template>
  <div class="avatar" :style="style" v-bind="$attrs" v-on="$listeners">
    <img :src="url" alt="avatar" />
  </div>
</template>

<script>
import gravatarUrl from 'gravatar-url'

export default {
  name: 'Avatar',

  props: {
    gravatarEmail: {
      default: null,
      type: String,
    },
    size: {
      default: 32,
      type: Number,
    },
  },

  computed: {
    style() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    },
    url() {
      if (!this.gravatarEmail) {
        return '~/assets/icons/avatar.svg'
      }

      return gravatarUrl(this.gravatarEmail, {
        size: this.size * 2,
      })
    },
  },
}
</script>

<style scoped>
.avatar {
  display: inline-block;
  vertical-align: middle;
}

.avatar :global(svg) {
  width: 100%;
  height: 100%;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
