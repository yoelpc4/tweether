<template>
  <Center>
    <h2>
      A <mark>decentralized</mark>, <mark>uncensorable</mark> Twitter clone
      built on Ethereum
    </h2>

    <div class="right-side">
      <Button
        style="display: inline-flex; align-items: center"
        @click="onToggleRegisterModal"
      >
        <img
          src="~/assets/icons/metamask.svg"
          alt="MetaMask"
          style="margin-right: 5px"
        />

        Create your account
      </Button>

      <div class="disclaimer">
        <p>
          MetaMask will automatically open and ask you to confirm a transaction.
        </p>

        <p>
          Please note that creating an account on the Ethereum blockchain costs
          a small amount of Ether.
        </p>
      </div>
    </div>

    <Modal v-show="showRegisterModal" @close="onToggleRegisterModal">
      <registration-form @close="onToggleRegisterModal"></registration-form>
    </Modal>
  </Center>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',

  layout: 'LandingLayout',

  data() {
    return {
      showRegisterModal: false,
    }
  },

  computed: {
    ...mapState('auth', ['isAuthenticated']),
  },

  watch: {
    isAuthenticated(newIsAuthenticated) {
      if (newIsAuthenticated) {
        this.$router.push('/home')
      }
    },
  },

  methods: {
    onToggleRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal
    },
  },
}
</script>

<style scoped>
h2 {
  font-size: 50px;
  color: #fff;
  line-height: 78px;
  position: relative;
  text-transform: uppercase;
  max-width: 520px;
  display: inline-block;
}

mark {
  color: inherit;
  background-color: #9f99ec;
  padding: 0 7px;
}

.right-side {
  float: right;
  position: relative;
  max-width: 320px;
  text-align: center;
  margin-top: 120px;
}

.right-side :global(svg) {
  position: absolute;
  margin-left: -46px;
  margin-top: -8px;
}

.disclaimer {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 23px;
  font-weight: 400;
  margin-top: 23px;
}
</style>
