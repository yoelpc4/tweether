import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['isAuthenticated']),
  },

  async mounted() {
    if (!this.isAuthenticated) {
      try {
        await this.login()
      } catch (error) {
        this.$nuxt.error({
          message: error.message,
        })
      }
    }
  },

  methods: {
    ...mapActions('auth', ['login']),
  },
}
