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
          <b-form-group label="Email">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="icon-lock" />
              </b-input-group-text>
              <b-form-input
                ref="email"
                v-model="formUsername"
                placeholder="Enter Your Email"
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

          <a
            href="#"
            class="font-small"
          >Forgot your password?</a>
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
          this.$refs.email.$el.focus()
          throw new Error('Email is required')
        }

        if (this.formPassword.trim() === '') {
          this.$refs.password.$el.focus()
          throw new Error('Password is required')
        }

        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword,
        })
        window.location.href = '/dashboard'
      } catch (error) {
        this.formError = error.message
      }
    },
  },
  middleware: 'auth',
}
</script>
