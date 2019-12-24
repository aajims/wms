<template lang="html">
  <div
    v-if="loading"
    class="loading-page"
  >
    <div class="loading-container">
      <div class="kt-spinner kt-spinner--lg kt-spinner--warning" />
      <div class="loading-text">
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data   : () => ({ loading: false }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
  },
}
</script>

<style>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  z-index: 9999;
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -35px 0px 0px -25px;
}

.loading-text {
  margin-top: 40px;
  margin-left: -3px;
  font-weight: 10px;
}

.kt-spinner--lg:before {
  width:50px !important;
  height:50px !important;
}
</style>
