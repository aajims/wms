<template>

    <div class="kt-grid kt-grid--hor kt-grid--root">
			<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <mobileHeader />
        <sidebar />
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
          <headers />
          <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
            <div class="kt-subheader  kt-grid__item" id="kt_subheader">
              <subheader />
            </div> 
            <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
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
import MobileHeader from '@/components/MobileHeader.vue'
import Headers from '@/components/Header.vue'
import Subheader from '@/components/Subheader.vue'
import Footers from '@/components/Footer.vue'

export default {
  components: {
    Sidebar, MobileHeader, Headers, Subheader, Footers
  },
}
</script>
