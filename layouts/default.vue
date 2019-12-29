<template>
  <div class="kt-grid kt-grid--hor kt-grid--root">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
      <mobile-header />
      <sidebar />
      <div
        id="kt_wrapper"
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
      >
        <desktop-header />
        <div
          id="kt_content"
          class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
        >
          <div
            id="kt_subheader"
            class="kt-subheader  kt-grid__item"
          >
            <sub-header />
          </div>
          <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <alerts />
            <nuxt />
          </div>
        </div>
        <footers />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import MobileHeader from '@/components/mobile-header.vue'
import DesktopHeader from '@/components/header.vue'
import SubHeader from '@/components/sub-header.vue'
import Footers from '@/components/footer.vue'
import Alerts from '@/components/alerts.vue'

export default {
  components: {
    Sidebar, MobileHeader, DesktopHeader, SubHeader, Footers, Alerts,
  },
  middleware: 'authenticated',
}

</script>
