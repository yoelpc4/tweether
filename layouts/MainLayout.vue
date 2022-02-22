<template>
  <div>
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

<style scoped></style>
