<style>
.table-bordered th, .table-bordered td {
  border: 1px solid #ddd!important;
  padding: 5px;
}
</style>

<template>
  <client-only>
    <div
      style="margin:1% !important; width:98%;"
    >
      <table width="100%">
        <tr>
          <td
            valign="top"
            align="left"
            width="50%"
          >
            <h4>INCOMING STOCK</h4>COMPANY: {{ incoming.company_name }}
          </td>
          <td
            valign="top"
            align="right"
            width="50%"
          >
            <h4>{{ incoming.job_no }}</h4>
          </td>
        </tr>
      </table>

      <div style="margin-top: 20px;  margin-bottom: 20px; border: 0; border-top: 1px solid #eee;" />

      <table class="table table-bordered">
        <tr>
          <td
            valign="top"
            width="150px"
          >
            Description
          </td>
          <td
            valign="top"
            width="150px"
          >
            ETD
          </td>
          <td
            valign="top"
            width="150px"
          >
            Transport type
          </td>
        </tr>
        <tr>
          <td>{{ incoming.description }}</td>
          <td>{{ etd }}</td>
          <td>{{ transportType }}</td>
        </tr>
      </table>

      <table class="table table-bordered">
        <tr>
          <td
            valign="top"
            width="150px"
          >
            From
          </td>
          <td
            valign="top"
            width="150px"
          >
            Country
          </td>
          <td
            valign="top"
            width="150px"
          >
            Custom permit
          </td>
          <td
            valign="top"
            width="150px"
          >
            Cargo Insurance
          </td>
        </tr>
        <tr>
          <td>{{ incoming.from }}</td>
          <td>{{ incoming.from_country_name }}</td>
          <td>{{ incoming.custom_permit }}</td>
          <td>{{ incoming.cargo_insurance }}</td>
        </tr>
      </table>

      <div style="margin-top: 20px;  margin-bottom: 20px; border: 0; border-top: 1px solid #eee;" />
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered">
            <tr>
              <td
                valign="top"
                width="30px"
              >
                #
              </td>
              <td valign="top">
                Product SKU
              </td>
              <td valign="top">
                Batch
              </td>
              <td valign="top">
                Product Name
              </td>
              <td valign="top">
                Location
              </td>
              <td valign="top">
                Packing
              </td>
              <td valign="top">
                Exp Date
              </td>
              <td valign="top">
                Qty
              </td>
            </tr>
            <tr
              v-for="(data, idx) in incoming.products"
              :key="data.id"
            >
              <td valign="top">
                {{ idx + 1 }}
              </td>
              <td valign="top">
                {{ data.product_sku }}
              </td>
              <td valign="top">
                {{ data.batch }}
              </td>
              <td valign="top">
                {{ data.product_name }}
              </td>
              <td valign="top">
                {{ data.to_warehouse_location_name }} - Level : {{ data.to_warehouse_location_level }}
              </td>
              <td valign="top">
                {{ data.product_packing_name }}
              </td>
              <td valign="top">
                {{ date(data.expired_date) }}
              </td>
              <td valign="top">
                {{ data.qty }}
              </td>
            </tr>
            <tr>
              <td
                valign="top"
                colspan="6"
              /><td
                valign="top"
                align="right"
              >
                Total:
              </td>
              <td valign="top">
                {{ totalQty }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br>
      <br>
      <div id="printfooter">
        __________________________<br>Date and Signature
      </div>
    </div>
  </client-only>
</template>

<script>
import moment from 'moment'

export default {
  layout: 'admin-print',
  data () {
    return {
      incoming     : [],
      etd          : '',
      transportType: '',
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
  },
  async mounted () {
    try {
      await this.$store.dispatch('incoming/getIncomingDetail', { idIncoming: atob(this.$route.params.id) })
      this.incoming      = this.$store.getters['incoming/getIncomingDetail'].result
      this.etd           = moment(this.incoming.etd).format('DD/MM/Y HH:mm')
      this.transportType = `${this.incoming.transport_type.charAt(0).toUpperCase()}${this.incoming.transport_type.slice(1)}`
    } catch (error) {

    }
  },
  methods: {
    date: function (date) {
      return moment(date).format('DD/MM/Y')
    },
  },
}
</script>
