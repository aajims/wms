<template>
  <div
    id="kt_subheader"
    class="kt-subheader kt-grid__item"
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
import menus from '@/data/menu'
export default {
  data () {
    return {
      data       : [],
      currentPage: '',
    }
  },
  created () {
    const path = this.$nuxt.$route.path.split('/')
    for (const menu of menus) {
      if (menu.url === `/${path[1]}`) {
        let parentUrl = menu.url
        if (menu.folder === true)
          parentUrl = '/'
        this.currentPage = menu.name
        this.data.push({ name: menu.name, url: parentUrl })
        for (const subMenu of menu.children) {
          if (subMenu.name.toLowerCase() === path[2]) {
            let param = ''
            if (subMenu.param === true)
              param = `/${this.$nuxt.$route.params.id}`
            this.currentPage = subMenu.name
            this.data.push({ name: subMenu.name, url: `${menu.url}${subMenu.url}${param}` })
            for (const childMenu of subMenu.children) {
              let param = ''
              if (childMenu.param === true)
                param = `/${this.$nuxt.$route.params.id}`
              this.currentPage = childMenu.name
              this.data.push({ name: childMenu.name, url: `${menu.url}${subMenu.url}${childMenu.url}${param}` })
            }
          }
        }
      }
    }
  },
}
</script>
