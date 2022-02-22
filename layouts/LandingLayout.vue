<template>
  <div class="landing">
    <Header></Header>

    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
import auth from '~/mixins/auth'

export default {
  name: 'MainLayout',

  mixins: [auth],
}
</script>

<style scoped>
.landing {
  min-height: 100vh;
  background-color: #262740;
  background-image: url('~assets/images/landing-bg.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
