<style>
body {
  color: black;
}
</style>
<template>
  <client-only>
    <div>
      <div
        v-for="data in internal.products"
        :key="data.id"
      >
        <div
          v-if="data.status !== statusCancel"
          class="container"
          style="margin: 0cm !important; width:98%; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold;"
        >
          <div style="background-color: black; color: #fff; padding: 10px;" />
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            <center>
              <span><font size="4">{{ data.unique_code }}</font></span>
              <br><br><br>
              <qrcode-vue
                :value="data.unique_code"
                :size="size"
                level="H"
              />
              <br><br><br>
              <span><font size="10">{{ data.id }}</font></span>
            </center>
          </div>
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            Company: <br><br>
            <div style="margin-top: -10px;">
              <center><span style="font-size: 14px;">{{ internal.company_name }}</span></center>
            </div>
          </div>
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            <table style="width: 100%;">
              <tr>
                <td
                  valign="top"
                  style="width: 33%; border-right: 2px solid #000; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold;"
                >
                  Job Number :<br><br>
                  <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ internal.job_no }}</span></center>
                  </div>
                </td>
                <td
                  valign="top"
                  style="width: 33%; padding: 2px;  border: 2px; border-left: 4px; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold; border-right: 2px solid #000;"
                >
                  Quantity:<br><br>
                  <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ data.qty }}</span></center>
                  </div>
                </td>
                <td
                  valign="top"
                  style="width: 33%; padding: 2px;  border: 2px; border-left: 4px; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold;"
                >
                  Country:<br><br>
                  <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ internal.from_country_name }}</span></center>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            <table style="width: 100%;">
              <tr>
                <td
                  valign="top"
                  style="width: 33%; border-right: 2px solid #000; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold;"
                >
                  SKU Number :<br><br>
                  <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ data.product_sku }}</span></center>
                  </div>
                </td>
                <td
                  valign="top"
                  style="width: 33%; padding: 2px;  border: 2px; border-left: 4px; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold;"
                >
                  Expire Date:<br><br> <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ date(internal.expired_date) }}</span></center>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            Batch: <br><br>
            <div style="margin-top: -10px;">
              <center><span style="font-size: 10px;">{{ data.batch }}</span></center>
            </div>
          </div>
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            Product : <br><br>
            <div style="margin-top: -10px;">
              <center><span style="font-size: 10px;">{{ data.product_name }}</span></center>
            </div>
          </div>
        </div>
        <div style="display:block; page-break-before:always;" />
      </div>
    </div>
  </client-only>
</template>

<script>
import moment from 'moment'
import { STATUS_CANCEL } from '@/utils/constants'

export default {
  layout: 'admin-blank',
  data () {
    return {
      internal    : [],
      size        : 400,
      statusCancel: STATUS_CANCEL,
    }
  },
  async mounted () {
    await this.getData()
    window.print()
  },
  methods: {
    async getData () {
      await this.$store.dispatch('internal/getInternalDetail', { idInternal: atob(this.$route.params.id) })
      this.internal    = this.$store.getters['internal/getInternalDetail'].result
    },
    date: function (date) {
      return moment(date).format('DD/MM/Y')
    },
  },
}

</script>
