<style>
body {
  color: black;
  font-size: 10px;
}
canvas {
  height: 25% !important;
  width: 25% !important;
}
table td {
  padding: 5px;
}
table tr{
  border: 1px solid black;
}
.separate{
  border-left: 1px solid black;
}
</style>
<template>
  <client-only>
    <div style="margin:1% !important; width:98%;">
      <div
        v-for="data in incoming.products"
        :key="data.id"
      >
        <table
          v-if="data.status !== statusCancel"
          class="table"
          style="page-break-before:always;"
        >
          <tr>
            <td
              colspan="6"
              align="center"
            >
              <b style="font-size: 12px">{{ data.unique_code }}</b>
              <br><br>
              <qrcode-vue
                :value="data.unique_code"
                :size="size"
                level="H"
              />
              <br>
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Company</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ incoming.company_name }}
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Pallet ID</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ data.id }}
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>SKU Number</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td>{{ data.product_sku }}</td>
            <td
              class="separate"
              style="width: 10%"
            >
              <b>QTY</b>
            </td>
            <td style="width: 1%">
              <b>:</b>
            </td>
            <td>{{ data.qty }} {{ data.product_packing_uom }}</td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Product</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ data.product_name }}
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Batch</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td>{{ data.batch }}</td>
            <td
              class="separate"
              style="width: 10%"
            >
              <b>Nett Weight</b>
            </td>
            <td style="width: 1%">
              <b>:</b>
            </td>
            <td>{{ data.product_weight * data.qty }} {{ data.product_weight_type }}</td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Created</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td>{{ date(incoming.created_at) }}</td>
            <td
              class="separate"
              style="width: 10%"
            >
              <b>Gross Weight</b>
            </td>
            <td style="width: 1%">
              <b>:</b>
            </td>
            <td>{{ (data.product_weight * data.qty) + data.packing_type_weight }} {{ data.packing_type_weight_type }}</td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Expired</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td>{{ date(data.expired_date) }}</td>
            <td
              class="separate"
              style="width: 10%"
            >
              <b>Volume</b>
            </td>
            <td style="width: 1%">
              <b>:</b>
            </td>
            <td>{{ data.packing_type_length * data.packing_type_width * data.packing_type_height }} {{ data.packing_type_dimension_type }} <sup>3</sup></td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Job Number</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ incoming.job_no }}
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Parent Job</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ incoming.parent_job_no }}
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Order Number</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ incoming.order_no }}
            </td>
          </tr>
          <tr>
            <td style="width: 20%">
              <b>Description</b>
            </td>
            <td style="width: 1%;">
              <b>:</b>
            </td>
            <td colspan="4">
              {{ data.description }}
            </td>
          </tr>
        </table>
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
    window.print()
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
