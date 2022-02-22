<template>
  <form id="form-registration" @submit.prevent="onRegister">
    <h3>Create your account</h3>

    <InputText v-model="firstName" title="First name" required> </InputText>

    <InputText v-model="lastName" title="Last name" required> </InputText>

    <InputText v-model="username" title="Username" required> </InputText>

    <InputEmail v-model="gravatarEmail" title="Gravatar Email" required>
    </InputEmail>

    <InputTextarea v-model="bio" title="Bio" required> </InputTextarea>

    <footer>
      <Button type="submit" form="form-registration" :disabled="loading">
        Create
      </Button>
    </footer>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { createUser } from '~/web3/users'

export default {
  name: 'RegistrationForm',

  data() {
    return {
      firstName: null,
      lastName: null,
      username: null,
      gravatarEmail: null,
      bio: null,
      loading: false,
    }
  },

  methods: {
    ...mapActions('auth', ['login']),
    async onRegister() {
      this.loading = true

      const infoToast = this.$toast.info(
        'Your account is being registered. This will take a couple of seconds...'
      )

      try {
        await createUser(
          this.username,
          this.firstName,
          this.lastName,
          this.bio,
          this.gravatarEmail
        )

        this.username = null
        this.firstName = null
        this.lastName = null
        this.bio = null
        this.gravatarEmail = null

        this.$toast.success('Your account has been registered!', {
          duration: 4000,
        })

        this.$emit('close')

        await this.login()
      } catch (error) {
        this.$nuxt.error({
          message: error.message,
        })

        this.$toast.error("Sorry, we couldn't register your account!", {
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
h3 {
  padding-bottom: 10px;
}

footer {
  text-align: right;
  padding-top: 16px;
}
</style>
