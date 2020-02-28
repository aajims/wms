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
import pkg from '@/package'

export default {
  components: {
    Sidebar, MobileHeader, DesktopHeader, SubHeader, Footers, Alerts,
  },
  head () {
    return {
      bodyAttrs: { class: 'kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading' },
      title    : pkg.name,
      meta     : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid    : 'description',
          name   : 'description',
          content: pkg.description,
        },
      ],
      link: [
        {
          rel : 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        { rel: 'stylesheet', href: '/css/select2.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap-datetimepicker.min.css' },
        { rel: 'stylesheet', href: '/css/style.bundle.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700' },
      ],
      script: [
        { src: '/vendors/jquery.min.js', body: true },
        { src: '/vendors/popper.min.js', body: true },
        { src: '/vendors/bootstrap.bundle.min.js', body: true },
        { src: '/vendors/js.cookie.min.js', body: true },
        { src: '/vendors/moment.min.js', body: true },
        { src: '/vendors/tooltip.min.js', body: true },
        { src: '/vendors/perfect-scrollbar.min.js', body: true },
        { src: '/vendors/sticky.min.js', body: true },
        { src: '/vendors/wNumb.js', body: true },
        { src: '/vendors/bootstrap-switch.min.js', body: true },
        { src: '/vendors/select2.full.min.js', body: true },
        { src: '/vendors/jquery.validate.min.js', body: true },
        { src: '/vendors/additional-methods.min.js', body: true },
        { src: '/vendors/sweetalert2.min.js', body: true },
        { src: '/js/config.js', body: true },
        { src: '/js/scripts.bundle.min.js', body: true },
        { src: '/js/jquery-validation.init.js', body: true },
        { src: '/js/sweetalert2.init.js', body: true },
        { src: '/vendors/bootstrap-select.min.js', body: true },
        { src: '/vendors/datatables.bundle.min.js', body: true },
        { src: '/vendors/bootstrap-datepicker.min.js', body: true },
        { src: '/vendors/bootstrap-datetimepicker.min.js', body: true },
        { src: '/vendors/jquery.repeater.min.js', body: true },
        { src: '/vendors/jquery.bootstrap-touchspin.min.js', body: true },
        { src: '/vendors/bootstrap-datetimepicker.min.js', body: true },
      ],
    }
  },
  middleware: 'authenticated',
}

</script>
