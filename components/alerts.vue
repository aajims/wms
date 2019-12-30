<template>
  <transition name="fade">
    <div
      v-if="alertShow"
      :class="alertClass"
      role="alert"
    >
      <div class="alert-text">
        {{ alertMessage }}
      </div>
      <div class="alert-close">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="reset"
        >
          <span aria-hidden="true"><i class="la la-close" /></span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      alertShow   : false,
      alertMessage: '',
      alertClass  : '',
    }
  },
  created () {
    this.$nuxt.$on('alertShow', (data) => {
      this.alertMessage = data.message
      this.alertClass   = `alert ${data.alertClass}`
      this.alertShow    = true
      setTimeout(() => this.reset(), 5000)
    })
  },
  methods: {
    reset () {
      this.alertShow    = false
      this.alertMessage = ''
      this.alertClass   = ''
    },
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
