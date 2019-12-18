<template>
  <div class="kt-grid kt-grid--hor kt-grid--root">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
      <mobileheader />
      <sidebar />
      <div
        id="kt_wrapper"
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
      >
        <headers @alertShow="sendMessage" />
        <div
          id="kt_content"
          class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
        >
          <div
            id="kt_subheader"
            class="kt-subheader  kt-grid__item"
          >
            <subheader />
          </div>
          <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <alerts :msg="emitMessage" />
            <nuxt />
          </div>
        </div>
        <footers />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Mobileheader from '@/components/MobileHeader.vue'
import Headers from '@/components/Header.vue'
import Subheader from '@/components/Subheader.vue'
import Footers from '@/components/Footer.vue'
import Alerts from '@/components/Alerts.vue'

export default {
  components: {
    Sidebar, Mobileheader, Headers, Subheader, Footers, Alerts,
  },
  data: function () {
    return { emitMessage: { alertClass: '', alertMessage: '' } }
  },
  methods: {
    sendMessage (message) {
      this.emitMessage = message
    },
  },
  middleware: 'auth',
}

</script>
