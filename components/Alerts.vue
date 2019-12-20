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
  props: {
    msg: {
      type   : Object,
      default: function () {
        return { alertClass: '', alertMessage: '' }
      },
    },
  },
  data () {
    return {
      alertShow   : false,
      alertMessage: '',
      alertClass  : '',
    }
  },
  watch: {
    msg: function () {
      this.alertMessage = this.msg.message
      this.alertClass   = `alert ${this.msg.alertClass}`
      this.alertShow    = true
      setTimeout(() => this.setVariable(), 5000)
    },
  },
  methods: {
    setVariable () {
      this.$set(this.msg, 'alertClass', '')
      this.$set(this.msg, 'message', '')
      this.alertShow    = false
      this.alertMessage = ''
      this.alertClass   = ''
    },
    reset () {
      this.$set(this.msg, 'alertClass', '')
      this.$set(this.msg, 'message', '')
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
