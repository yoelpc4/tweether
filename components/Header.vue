<template>
  <header>
    <Center>
      <nuxt-link to="/home">
        <img src="~/assets/icons/logotype.svg" alt="logo" />
      </nuxt-link>

      <Navbar @toggleComposeModal="onToggleComposeModal"> </Navbar>
    </Center>

    <Modal v-show="showComposeModal" @close="onToggleComposeModal">
      <ComposeTweetForm @close="onToggleComposeModal"></ComposeTweetForm>
    </Modal>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      showComposeModal: false,
    }
  },

  methods: {
    onToggleComposeModal() {
      this.showComposeModal = !this.showComposeModal
    },
  },
}
</script>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
