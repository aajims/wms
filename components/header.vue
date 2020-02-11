<template>
  <div
    id="kt_header"
    class="kt-header kt-grid__item  kt-header--fixed"
  >
    <div
      id="kt_header_menu_wrapper"
      class="kt-header-menu-wrapper"
    />

    <div class="kt-header__topbar">
      <!--begin: User Bar -->
      <div class="kt-header__topbar-item kt-header__topbar-item--user show">
        <div
          class="kt-header__topbar-wrapper"
          data-toggle="dropdown"
          data-offset="0px,0px"
        >
          <div class="kt-header__topbar-user">
            <span class="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
            <span class="kt-header__topbar-username kt-hidden-mobile">{{ fullName }}</span>
            <!-- <img class="kt-hidden" alt="Pic" src="assets/media/users/300_25.jpg" /> -->

            <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
            <span class="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">{{ firstFont }}</span>
          </div>
        </div>
        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
          <!--begin: Head -->
          <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x">
            <div class="kt-user-card__avatar">
              <!-- <img class="kt-hidden" alt="Pic" src="assets/media/users/300_25.jpg" /> -->

              <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
              <span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">{{ firstFont }}</span>
            </div>
            <div class="kt-user-card__name">
              {{ fullName }}
            </div>
          </div>

          <!--end: Head -->

          <!--begin: Navigation -->
          <div class="kt-notification">
            <a
              href="/master/user/profile"
              class="kt-notification__item"
            >
              <div class="kt-notification__item-icon">
                <i class="flaticon2-calendar-3 kt-font-success" />
              </div>
              <div class="kt-notification__item-details">
                <div class="kt-notification__item-title kt-font-bold">
                  My Profile
                </div>
                <div class="kt-notification__item-time">
                  Account settings and more
                </div>
              </div>
            </a>
            <div class="kt-notification__custom kt-space-between">
              <a
                href="javascript:void(0)"
                class="btn btn-label btn-label-brand btn-sm btn-bold"
                @click="logout"
              >Sign Out</a>
            </div>
          </div>

          <!--end: Navigation -->
        </div>
      </div>

      <!--end: User Bar -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullName : '',
      firstFont: '',
    }
  },
  created () {
    this.fullName  = this.$store.getters['getUserData'].full_name
    this.firstFont = this.fullName.charAt(0).toUpperCase()
  },
  methods: {
    async logout () {
      try {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('logout')
      } catch (error) {
        const parameter = {
          alertClass: 'alert-danger',
          message   : error.message,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>
