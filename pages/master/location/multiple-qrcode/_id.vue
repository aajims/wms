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
          style="padding:1px; !important; border: 2px; border-color: #000; border-style: solid; width: 100%;"
        >
          <tbody>
            <tr>
              <td>
                <span style="font-size: 0.575em;">Location:</span><br>
                <span style="font-size: 0.875em;"><strong>{{ location.name }}</strong></span><br><br>
                <span style="font-size: 0.575em;">Level:</span><br>
                <span style="font-size: 0.875em;"><strong>{{ location.level }}</strong></span>
              </td>
              <td
                align="center"
                style="width:10%; padding-top: 10px"
              >
                <qrcode-vue
                  :value="location.unique_code"
                  :size="size"
                  level="H"
                />
                <span style="font-size: 0.575em;">{{ location.unique_code }}</span>
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
  layout: 'admin-print',
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
