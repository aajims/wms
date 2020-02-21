<style>
@page {
  size: auto;
}
.table td, .table th {
    border-top: 1px solid black;
}
</style>
<template>
  <client-only>
    <div>
      <div
        v-for="location in locations"
        :key="location.id"
        style="padding: 10px; page-break-before:always;"
      >
        <table
          v-if="location.status === statusActive"
          border="1"
          class="table"
        >
          <tbody>
            <tr>
              <td>
                Location:<br>
                <h4>{{ location.name }}</h4><br>
                Level:<br>
                <h4>{{ location.level }}</h4>
              </td>
              <td
                align="center"
                style="width:20%;"
              >
                <qrcode-vue
                  :value="location.unique_code"
                  :size="size"
                  level="H"
                />
                <br><h5>{{ location.unique_code }}</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </client-only>
</template>

<script>
import { STATUS_ACTIVE } from '@/utils/constants'
export default {
  layout: 'admin-blank',
  data () {
    return {
      locations   : [],
      size        : 100,
      statusActive: STATUS_ACTIVE,
    }
  },
  async mounted () {
    await this.getData()
    window.print()
  },
  methods: {
    async getData () {
      const param    = JSON.parse(atob(this.$route.params.id))
      await this.$store.dispatch('location/getLocationByWarehouse', {
        warehouseId: param.warehouse_id,
        page       : param.page,
        perpage    : param.perpage,
      })
      this.locations = this.$store.getters['location/getLocationByWarehouse'].result
    },
  },
}

</script>
