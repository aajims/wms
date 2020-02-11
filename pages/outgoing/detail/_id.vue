<style scoped>
.margin-top-20 {
  margin-top: 20px;
}
</style>
<template>
  <div class="row">
    <div class="col-lg-12">
      <div
        id="kt_page_portlet"
        class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
      >
        <div class="kt-portlet__head kt-portlet__head--lg">
          <div class="kt-portlet__head-label">
            <span class="kt-portlet__head-icon">
              <i class="kt-font-brand flaticon-edit-1" />
            </span>
            <h3 class="kt-portlet__head-title">
              Outgoing Stock Detail
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/outgoing"
              class="btn btn-clean kt-margin-r-10"
            >
              <i class="la la-arrow-left" />
              <span class="kt-hidden-mobile">Back</span>
            </a>
          </div>
        </div>
        <div class="kt-portlet__body">
          <div class="form-group row">
            <div class="col-lg-4">
              <label>Job No.</label>
              <input
                :value="outgoing.job_no"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Unique Code</label>
              <input
                :value="outgoing.unique_code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
          <div class="form-group row">
            <div class="col-lg-4 margin-top-20">
              <label>Order No.</label>
              <input
                :value="outgoing.order_no"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Company</label>
              <input
                :value="outgoing.company_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>From Warehouse</label>
              <input
                :value="outgoing.from_warehouse_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <div class="kt-form__label">
                <label>ETD</label>
              </div>
              <div class="kt-form__control">
                <div class="input-group date">
                  <input
                    :value="etd"
                    type="text"
                    class="form-control"
                    readonly
                  >
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="la la-calendar" />
                    </span>
                  </div>
                </div>
                <span class="form-text text-muted" />
              </div>
            </div>
            <div class="col-lg-4 margin-top-20">
              <div class="kt-form__label">
                <label>ETA</label>
              </div>
              <div class="kt-form__control">
                <div class="input-group date">
                  <input
                    :value="eta"
                    type="text"
                    class="form-control"
                    readonly
                  >
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="la la-calendar" />
                    </span>
                  </div>
                </div>
                <span class="form-text text-muted" />
              </div>
            </div>
            <div class="col-lg-4 margin-top-20">
              <div class="kt-form__label">
                <label>Shipment Date</label>
              </div>
              <div class="kt-form__control">
                <div class="input-group date">
                  <input
                    :value="shipmentDate"
                    type="text"
                    class="form-control"
                    readonly
                  >
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="la la-calendar" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 margin-top-20">
              <div class="kt-form__label">
                <label>Order Date</label>
              </div>
              <div class="kt-form__control">
                <div class="input-group date">
                  <input
                    :value="orderDate"
                    type="text"
                    class="form-control"
                    readonly
                  >
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="la la-calendar" />
                    </span>
                  </div>
                </div>
                <span class="form-text text-muted" />
              </div>
            </div>
            <div class="col-lg-4 margin-top-20">
              <div class="kt-form__label">
                <label>To Country</label>
              </div>
              <input
                :value="outgoing.to_country_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>To</label>
              <textarea
                :value="outgoing.from"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-4 margin-top-20">
              <div class="kt-form__label">
                <label>Transport Type</label>
              </div>
              <input
                :value="transportType"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div
              v-if="outgoing.transport_type === 'truck'"
              class="col-lg-4 margin-top-20"
            >
              <label>Transport Number</label>
              <input
                :value="outgoing.transport_number"
                type="text"
                class="form-control"
                name="transport_number"
                placeholder="Enter transport number"
              >
            </div>
            <div
              v-if="outgoing.transport_type === 'air-freight'"
              class="col-lg-4 margin-top-20"
            >
              <label>Flight</label>
              <input
                :value="outgoing.flight"
                type="text"
                class="form-control"
                name="flight"
                placeholder="Enter flight"
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Custom Permit</label>
              <input
                :value="outgoing.custom_permit"
                type="text"
                class="form-control"
                name="custom_permit"
                placeholder="Enter custom permit"
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Cargo Insurance</label>
              <input
                :value="outgoing.cargo_insurance"
                type="text"
                class="form-control"
                name="cargo_insurance"
                placeholder="Enter cargo insurance"
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label for="description">Description</label>
              <textarea
                :value="outgoing.description"
                class="form-control"
                rows="4"
              />
            </div>
          </div>
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
          <div class="form-group row">
            <div class="col-lg-12">
              <!--begin: Datatable -->
              <table
                id="product_table"
                class="table table-hover table-checkable nowrap"
              >
                <thead>
                  <tr>
                    <th>SKU Number</th>
                    <th>Product Location</th>
                    <th>Product</th>
                    <th>Packing</th>
                    <th>Quantity</th>
                    <th class="location_name">
                      Location
                    </th>
                    <th>Batch</th>
                    <th class="expired_date">
                      Expired
                    </th>
                    <th>Description</th>
                    <th class="status">
                      Status
                    </th>
                    <th class="created_at">
                      Created
                    </th>
                    <th class="updated_at">
                      Updated
                    </th>
                  </tr>
                </thead>
              </table>
              <!--end: Datatable -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- begin::Scrolltop -->
    <div
      id="kt_scrolltop"
      class="kt-scrolltop"
    >
      <i class="flaticon flaticon-up-arrow-1" />
    </div>
    <!-- end::Scrolltop -->
  </div>
</template>

<script>
import moment from 'moment'
import { OUTGOING_STATUS, JOB_STATUS } from '@/utils/constants'

export default {
  data () {
    return {
      outgoing     : [],
      datatable    : [],
      etd          : '',
      eta          : '',
      orderDate    : '',
      shipmentDate : '',
      createdDate  : '',
      updatedDate  : '',
      status       : [],
      transportType: [],
    }
  },
  async mounted () {
    const app = this
    try {
      await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: atob(this.$route.params.id) })
      this.outgoing    = this.$store.getters['outgoing/getOutgoingDetail'].result
      this.etd         = moment(this.outgoing.etd).format('DD/MM/Y HH:mm')
      this.eta         = moment(this.outgoing.eta).format('DD/MM/Y HH:mm')
      this.orderDate   = moment(this.outgoing.order_date).format('DD/MM/Y HH:mm')
      this.createdDate = moment(this.outgoing.created_at).format('DD/MM/Y HH:mm:ss')
      if (this.outgoing.shipment_date !== '' && this.outgoing.shipment_date !== '0000-00-00 00:00:00')
        this.shipmentDate = moment(this.outgoing.shipment_date).format('DD/MM/Y HH:mm')
      if (this.outgoing.updated_at !== '' && this.outgoing.updated_at !== null)
        this.updatedDate      = moment(this.outgoing.updated_at).format('DD/MM/Y HH:mm:ss')
      for (const statusIndex in JOB_STATUS) {
        if (this.outgoing.status === JOB_STATUS[statusIndex].id)
          this.status = JOB_STATUS[statusIndex]
      }
      this.transportType = `${this.outgoing.transport_type.charAt(0).toUpperCase()}${this.outgoing.transport_type.slice(1)}`
    } catch (error) {

    }

    // datatable
    this.datatable = $('#product_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      data      : app.outgoing.products,
      columns   : [
        { data: 'product_sku' },
        { data: 'unique_code' },
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'qty' },
        { data: 'from_warehouse_location_name' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'description' },
        { data: 'status' },
        { data: 'created_at' },
        { data: 'updated_at' },
      ],
      columnDefs: [
        {
          targets  : 'location_name',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (full.id === 0 || full.from_warehouse_location_level === undefined)
              return data
            else
              return `${data} - Level ${full.from_warehouse_location_level}`
          },
        },
        {
          targets  : 'expired_date',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (data !== '' && data !== '0000-00-00 00:00:00')
              return moment(data).format('DD/MM/Y')
            else
              return ''
          },
        },
        {
          targets: 'created_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.created_by_name}`
            else
              return data
          },
        },
        {
          targets: 'updated_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.updated_by_name}`
            else
              return data
          },
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            for (const statusIndex in OUTGOING_STATUS) {
              if (data === OUTGOING_STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${OUTGOING_STATUS[statusIndex].class} kt-badge--inline">${OUTGOING_STATUS[statusIndex].text}</span>`
            }
            return data
          },
        },
      ],
    })
  },
}
</script>
