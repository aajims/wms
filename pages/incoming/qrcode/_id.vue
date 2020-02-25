<style>
body {
  color: black;
}
canvas {
  height: 25% !important;
  width: 25% !important;
}
</style>
<template>
  <client-only>
    <div>
      <div
        v-for="data in incoming.products"
        :key="data.id"
      >
        <div
          v-if="data.status !== statusCancel"
          style="margin: 0cm !important; width:100%; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold; page-break-before:always;"
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
              <center><span style="font-size: 10px;">{{ incoming.company_name }}</span></center>
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
                    <center><span style="font-size: 10px;">{{ incoming.job_no }}</span></center>
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
                  Created:<br><br>
                  <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ date(incoming.created_at) }}</span></center>
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
                    <center><span style="font-size: 10px;">{{ date(incoming.expired_date) }}</span></center>
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
                  Batch :<br><br>
                  <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ data.batch }}</span></center>
                  </div>
                </td>
                <td
                  valign="top"
                  style="width: 33%; padding: 2px;  border: 2px; border-left: 4px; font-family: Arial, Helvetica, sans-serif; font-size: 8px; font-weight: bold;"
                >
                  Parent Job:<br><br> <div style="margin-top: -10px;">
                    <center><span style="font-size: 10px;">{{ incoming.parent_job_no }}</span></center>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 5px; padding-left: 2px; border: 2px; border-left: 4px; border-right: 4px; border-color: #000; border-style: solid;">
            Product : <br><br>
            <div style="margin-top: -10px;">
              <center><span style="font-size: 10px;">{{ data.product_name }}</span></center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import moment from 'moment'
import { STATUS_CANCEL } from '@/utils/constants'

export default {
  layout: 'admin-print',
  data () {
    return {
      incoming    : [],
      size        : 250,
      statusCancel: STATUS_CANCEL,
    }
  },
  async mounted () {
    await this.getData()
    // window.print()
  },
  methods: {
    async getData () {
      await this.$store.dispatch('incoming/getIncomingDetail', { idIncoming: atob(this.$route.params.id) })
      this.incoming    = this.$store.getters['incoming/getIncomingDetail'].result
    },
    date: function (date) {
      return moment(date).format('DD/MM/Y')
    },
  },
}

</script>
