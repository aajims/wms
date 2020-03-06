<style>
.table-bordered th, .table-bordered td {
  border: 1px solid #ddd!important;
  padding: 5px;
}
#page:after {
  counter-increment: page;
  content: counter(page);
}
</style>

<template>
  <client-only>
    <div
      style="margin:1% !important; width:98%;"
    >
      <h5>INCOMING STOCK</h5>
      <table width="100%">
        <tr>
          <td style="width: 10%">
            Company
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ incoming.company_name }}
          </td>
          <td style="width: 10%">
            Order Number
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ incoming.order_no }}
          </td>
        </tr>
        <tr>
          <td style="width: 10%">
            Warehouse
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ incoming.to_warehouse_name }}
          </td>
          <td style="width: 10%">
            Created Date
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ date(incoming.created_at) }}
          </td>
        </tr>
        <tr>
          <td style="width: 10%">
            Job Number
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ incoming.job_no }}
          </td>
          <td style="width: 10%">
            Page
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            <span id="page" />
          </td>
        </tr>
        <tr>
          <td style="width: 10%">
            From
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ incoming.from }}
          </td>
        </tr>
        <tr>
          <td style="width: 10%">
            Transport Type
          </td>
          <td style="width: 1%;">
            :
          </td>
          <td>
            {{ transportType }}
          </td>
        </tr>
      </table>
      <br>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered">
            <tr>
              <td
                valign="top"
                width="30px"
              >
                No.
              </td>
              <td valign="top">
                Product SKU
              </td>
              <td valign="top">
                Product Name
              </td>
              <td valign="top">
                Batch
              </td>
              <td valign="top">
                Product Location
              </td>
              <td valign="top">
                Pallet ID
              </td>
              <td valign="top">
                Location
              </td>
              <td valign="top">
                Exp Date
              </td>
              <td valign="top">
                UOM
              </td>
              <td valign="top">
                Qty
              </td>
              <td valign="top">
                WUn  ({{ nettWeightType }})
              </td>
              <td valign="top">
                Nett Weight ({{ nettWeightType }})
              </td>
              <td valign="top">
                Gross Weight ({{ grossWeightType }})
              </td>
              <td valign="top">
                Volume ({{ volumeType }}) <sup>3</sup>
              </td>
            </tr>
            <tr
              v-for="(data, idx) in incoming.products"
              :key="data.id"
            >
              <td
                valign="top"
              >
                <input
                  :v-model="nettWeightType = data.packing_type_weight_type"
                  type="hidden"
                >
                <input
                  :v-model="grossWeightType = data.packing_type_weight_type"
                  type="hidden"
                >
                <input
                  :v-model="volumeType = data.packing_type_dimension_type"
                  type="hidden"
                >
                {{ idx + 1 }}
              </td>
              <td valign="top">
                {{ data.product_sku }}
              </td>
              <td valign="top">
                {{ data.product_name }}
              </td>
              <td valign="top">
                {{ data.batch }}
              </td>
              <td valign="top">
                {{ data.unique_code }}
              </td>
              <td valign="top">
                {{ data.id }}
              </td>
              <td valign="top">
                {{ data.to_warehouse_location_name }}
              </td>
              <td valign="top">
                {{ date(data.expired_date) }}
              </td>
              <td valign="top">
                {{ data.product_packing_uom }}
              </td>
              <td valign="top">
                {{ data.qty }}
              </td>
              <td valign="top">
                {{ data.product_weight }}
              </td>
              <td valign="top">
                {{ data.product_weight * data.qty }}
              </td>
              <td valign="top">
                {{ (data.product_weight * data.qty) + data.packing_type_weight }}
              </td>
              <td valign="top">
                {{ data.packing_type_length * data.packing_type_width * data.packing_type_height }}
              </td>
            </tr>
            <tr>
              <td
                valign="top"
                align="right"
                colspan="9"
              >
                Total:
              </td>
              <td valign="top">
                {{ totalQty }}
              </td>
              <td valign="top">
                {{ totalWUn }}
              </td>
              <td valign="top">
                {{ totalNettWeight }}
              </td>
              <td valign="top">
                {{ totalGrossWeight }}
              </td>
              <td valign="top">
                {{ totalVolume }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br>
      <table width="60%">
        <tr>
          <td>
            PIC Warehouse,
            <br><br><br><br>
            __________________________<br>Date and Signature
          </td>
          <td>
            Operator,<br><br><br><br>
            __________________________<br>Date and Signature
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
      incoming       : [],
      etd            : '',
      transportType  : '',
      nettWeightType : '',
      grossWeightType: '',
      volumeType     : '',
    }
  },
  computed: {
    totalQty: function () {
      if (this.incoming.products !== undefined) {
        let total = 0
        this.incoming.products.forEach((value) => {
          total = total + value.qty
        })
        return total
      }

      return 0
    },
    totalWUn: function () {
      if (this.incoming.products !== undefined) {
        let total = 0
        this.incoming.products.forEach((value) => {
          total = total + value.product_weight
        })
        return total
      }

      return 0
    },
    totalNettWeight: function () {
      if (this.incoming.products !== undefined) {
        let total = 0
        this.incoming.products.forEach((value) => {
          total = total + (value.product_weight * value.qty)
        })
        return total
      }

      return 0
    },
    totalGrossWeight: function () {
      if (this.incoming.products !== undefined) {
        let total = 0
        this.incoming.products.forEach((value) => {
          total = total + ((value.product_weight * value.qty) + value.packing_type_weight)
        })
        return total
      }

      return 0
    },
    totalVolume: function () {
      if (this.incoming.products !== undefined) {
        let total = 0
        this.incoming.products.forEach((value) => {
          total = total + (value.packing_type_length * value.packing_type_width * value.packing_type_height)
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
      await this.$store.dispatch('incoming/getIncomingDetail', { idIncoming: atob(this.$route.params.id) })
      this.incoming      = this.$store.getters['incoming/getIncomingDetail'].result
      this.etd           = moment(this.incoming.etd).format('DD/MM/Y HH:mm')
      this.transportType = `${this.incoming.transport_type.charAt(0).toUpperCase()}${this.incoming.transport_type.slice(1)}`
    },
    date: function (date) {
      return moment(date).format('DD/MM/Y')
    },
  },
}
</script>
