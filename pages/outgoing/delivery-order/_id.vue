<style type="text/css" media="screen,print">
@page {
  size: auto;   /* auto is the initial value */
}
body {
  margin: 20px 30px;
  color: black;
  font-family: "Times New Roman", Times, serif;
  background-color: white;
}
table.page{
  margin-bottom:20px;
}
table, tr, td {
  border-collapse: collapse;
  border-spacing: 0px;
  vertical-align: top;
}
h1 {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}
table.layout-main,
table.layout-header,
table.footer-info,
table.footer-sign,
table.footer-final {
    width: 100%;
}
table.layout-do {
  margin-left: 60%;
  margin-bottom: 10px;
}
tr.ship-info {
  font-size: 14px;
}
tr.ship-info td.ship-from { width: 60%; }
tr.ship-info td.ship-to { width: 40%; }
table.content {
  width: 100%;
  border: 1px solid #000;
}
table.content thead td {
  border: 1px solid #000;
  vertical-align: middle;
}
table.content tr.total td {
  vertical-align: middle;
  border-right: 1px solid #000;
  border-top: 1px solid #000;
}
table.content tr.total td.norborder {
  border-right: none;
}
table.content {
  height: 445px;
  margin-bottom: 5px;
  margin-top: 5px;
}
table.content tbody tr.record {
  line-height: 20px;
  height: 16px;
}
table.content td:empty {
  border-left: 0;
  border-right: 0;
}
table.content tbody tr.record td {
  padding-left: 5px;
}
table.content tbody tr.record td:first-child {
  padding-left: 0;
}
table.content tbody td,
table.content tbody tr.empty td {
  border-right: 1px solid #000;
}
table thead tr td,
table tr td.center {
  text-align: center;
}
table.footer-info td.fixed-width {
  width: 100px;
}
table.footer-sign td { text-align: center; }
table.footer-final {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-style: italic;
  margin-top: 1em;
}
table.footer-final td:first-child {
  padding-left: 15px;
}
table.footer-final td:last-child {
  padding-right: 15px;
}
table.footer-sign {
  margin-top: 10px;
}
table.footer-sign td {
  width: 20%;
}
table.footer-sign tbody td.sig-line {
  height: 100px;
  border-bottom: 1px solid #000;
}
table.layout-do td.first-col {
  width: 75px;
}
</style>

<template>
  <client-only>
    <div>
      <table
        id="page-1"
        class="page layout-main"
      >
        <tr class="header">
          <td>
            <!-- header content -->
            <table class="layout-header">
              <tr>
                <td colspan="2">
                  <h1 class="title">
                    Delivery Order
                  </h1>
                </td>
              </tr>
              <tr class="do-info">
                <td colspan="2">
                  <!-- delivery order details -->
                  <table class="layout-do">
                    <tr>
                      <td class="first-col">
                        No
                      </td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{{ outgoing.job_no }}</td>
                    </tr>
                    <tr>
                      <td>Order No</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{{ outgoing.order_no }}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{{ date(outgoing.created_at) }}</td>
                    </tr>
                  </table>
                <!--br-->
                </td>
              </tr>
              <tr class="ship-info">
                <td class="ship-from">
                  <table>
                    <tr><td><b>Address of Loading from/Shipper</b></td></tr>
                    <tr><td>{{ outgoing.from_warehouse_name }}<br>{{ outgoing.from_country_name }}</td></tr>
                    <tr><td><b>From/Shipper</b></td></tr>
                    <tr><td>{{ outgoing.company_name }}<br>{{ warehouse.address }}<br>{{ warehouse.zip_code }} {{ warehouse.district_name }}<br>{{ warehouse.city_name }}, {{ warehouse.state_name }}<br>{{ warehouse.country_name }}</td></tr>
                  </table>
                </td>
                <td class="ship-to">
                  <table>
                    <tr>
                      <td>To</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{{ outgoing.to }}</td>
                    </tr>
                    <tr>
                      <td>Ship to</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{{ outgoing.to_country_name }}</td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td />
                    </tr>
                    <tr>
                      <td>Tel.</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td />
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="content">
          <td>
            <!--br-->
            <!-- main content -->
            <table class="content">
              <thead>
                <tr>
                  <td>No</td>
                  <td>SKU / QR</td>
                  <td>Product Name / Batch</td>
                  <td>Total Unit Qty</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(data, key) in outgoing.products"
                  :key="data.id"
                  class="record"
                >
                  <td class="center">
                    {{ key + 1 }}
                  </td>
                  <td>{{ data.product_sku }}<br>{{ data.unique_code }}</td>
                  <td>{{ data.product_name }}<br>Batch No: {{ data.batch }}<br></td>
                  <td class="center">
                    {{ data.qty }}
                  </td>
                </tr>
                <tr class="empty">
                  <td /><td /><td /><td />
                </tr>
              </tbody>
              <tfoot>
                <tr class="total">
                  <td class="center norborder" />
                  <td class="center norborder">
                    Total
                  </td>
                  <td class="center" />
                  <td class="center">
                    {{ totalQty }}
                  </td>
                </tr>
              </tfoot>
            </table>
          <!--br-->
          </td>
        </tr>
        <tr class="footer">
          <td>
            <!-- footer content -->
            <table class="footer-info">
              <tr>
                <td class="fixed-width">
                  Transport Type
                </td><td align="left">
                  : {{ transportType }}
                </td>
              </tr>
              <tr>
                <td class="fixed-width">
                  No Ctn/Seal
                </td><td align="left">
                  : {{ transportNumber }}
                </td>
              </tr>
              <tr>
                <td class="fixed-width">
                  Description
                </td><td align="left">
                  : {{ outgoing.description }}
                </td>
              </tr>
            </table>
            <!--br-->
            <table class="footer-sign">
              <thead>
                <tr>
                  <td>Transporter</td>
                  <td />
                  <td>PIC Warehouse</td>
                  <td />
                  <td>Customer</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="sig-line" />
                  <td />
                  <td class="sig-line" />
                  <td />
                  <td class="sig-line" />
                </tr>
              </tbody>
            </table>
            <!--br-->
            <table class="footer-final">
              <tr>
                <td>Putih&nbsp;:&nbsp;Finance</td>
                <td>Merah&nbsp;:&nbsp;Customer</td>
                <td>Kuning&nbsp;:&nbsp;Logistic</td>
                <td>Hijau&nbsp;:&nbsp;Ekspedisi</td>
                <td>Biru&nbsp;:&nbsp;Warehouse</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </client-only>
</template>

<script>
import moment from 'moment'

export default {
  layout: 'admin-print',
  data () {
    return {
      outgoing       : [],
      warehouse      : [],
      transportType  : '',
      transportNumber: '',
    }
  },
  computed: {
    totalQty: function () {
      if (this.outgoing.products !== undefined) {
        let total = 0
        this.outgoing.products.forEach((value) => {
          total = total + value.qty
        })
        return total
      }

      return 0
    },
  },
  async mounted () {
    await this.getData()
    window.print()
  },
  methods: {
    async getData () {
      await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: atob(this.$route.params.id) })
      this.outgoing        = this.$store.getters['outgoing/getOutgoingDetail'].result
      this.transportType   = `${this.outgoing.transport_type.charAt(0).toUpperCase()}${this.outgoing.transport_type.slice(1)}`
      this.transportNumber = this.outgoing.transport_type === 'truck' ? this.outgoing.transport_number : this.outgoing.flight

      // get warehouse detil
      await this.$store.dispatch('warehouse/getWarehouseDetail', { idWarehouse: this.outgoing.from_warehouse_id })
      this.warehouse        = this.$store.getters['warehouse/getWarehouseDetail'].result
    },
    date: function (date) {
      return moment(date).format('DD/MM/Y')
    },
  },
}

</script>
