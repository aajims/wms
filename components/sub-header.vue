<template>
  <div
    id="kt_subheader"
    class="kt-subheader   kt-grid__item"
  >
    <div class="kt-container  kt-container--fluid ">
      <div
        v-if="data.length <= 1"
        class="kt-subheader__main"
      >
        <h3 class="kt-subheader__title">
          {{ currentPage }}
        </h3>
      </div>
      <div
        v-else
        class="kt-subheader__main"
      >
        <h3 class="kt-subheader__title">
          {{ currentPage }}
        </h3>
        <span class="kt-subheader__separator kt-hidden" />
        <div
          v-for="(value, index) in data"
          :key="index"
          class="kt-subheader__breadcrumbs"
        >
          <a
            v-if="index === 0"
            href="/"
            class="kt-subheader__breadcrumbs-home"
          >
            <i class="flaticon2-shelter" />
          </a>
          <span class="kt-subheader__breadcrumbs-separator" />
          <a
            :href="value.url"
            class="kt-subheader__breadcrumbs-link"
          >
            {{ value.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menus from '@/menu'
export default {
  data () {
    return {
      data       : [],
      currentPage: '',
    }
  },
  created () {
    let temporary    = []
    const app        = this
    const data       = this.$nuxt.$route.path.split('/')
    this.currentPage = data[1][0].toUpperCase() + data[1].substr(1)
    for (const menu of menus) {
      if (menu.url === `/${data[1]}`) {
        temporary = { name: menu.name, url: menu.url }
        app.data.push(temporary)
        break
      }
      for (const subMenu of menu.children) {
        if (subMenu.url === `/${data[1]}`) {
          temporary = { name: menu.name, url: menu.url }
          app.data.push(temporary)
          temporary = { name: subMenu.name, url: subMenu.url }
          app.data.push(temporary)
          break
        }
      }
    }
  },
}
</script>
