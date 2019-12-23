<template>
  <section class="container">
    <div class="page">
      <div class="page-header">
        <img
          alt="Logo"
          src="~/assets/images/aside-logo.png"
          width="90%"
        >
        <h6>
          <b> WMS </b>| Warehouse Management System
        </h6>
      </div>
      <div class="page-content">
        <div
          v-if="formError"
          class="alert alert-danger"
        >
          <div class="alert-icon">
            <i class="flaticon-warning" />
          </div>
          <div class="alert-text">
            {{ formError }}
          </div>
        </div>
        <b-form @submit.prevent="login">
          <b-form-group label="Username">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="icon-lock" />
              </b-input-group-text>
              <b-form-input
                ref="username"
                v-model="formUsername"
                placeholder="Enter Your Username"
              />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Password">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="icon-key" />
              </b-input-group-text>
              <b-form-input
                ref="password"
                v-model="formPassword"
                type="password"
                placeholder="Enter Your Password"
              />
            </b-input-group>
          </b-form-group>

          <b-button
            variant="outline-warning btn-block btn-lg"
            class="mt-4 mb-2"
            type="submit"
          >
            SIGN IN
          </b-button>
        </b-form> <!-- END: FORM-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blank',
  data () {
    return {
      formError   : null,
      formUsername: '',
      formPassword: '',
    }
  },
  methods: {
    async login () {
      try {
        if (this.formUsername.trim() === '') {
          this.$refs.username.$el.focus()
          throw new Error('Username is required')
        }

        if (this.formPassword.trim() === '') {
          this.$refs.password.$el.focus()
          throw new Error('Password is required')
        }
        this.$nuxt.$loading.start()
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword,
        })
      } catch (error) {
        this.formError = error.message
        this.$nuxt.$loading.finish()
      }
    },
  },
  middleware: 'unauthenticated',
}
</script>

<style lang="scss">
  @import '@/assets/scss/variables/variables';
  @import '@/assets/scss/pages/login/login';
  @import '@/assets/scss/pages/login/index';
</style>
