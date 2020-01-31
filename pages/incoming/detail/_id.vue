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
              <i class="kt-font-brand flaticon-add" />
            </span>
            <h3 class="kt-portlet__head-title">
              Incoming Stock Detail
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/incoming"
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
                :value="incoming.job_no"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Unique Code</label>
              <input
                :value="incoming.unique_code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
          <div class="form-group row">
            <div class="col-lg-4">
              <label>Order No.</label>
              <input
                :value="incoming.order_no"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Company</label>
              <input
                :value="incoming.company_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Warehouse</label>
              <input
                :value="incoming.to_warehouse_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
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
            <div class="col-lg-4">
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
            <div class="col-lg-4">
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
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
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
              </div>
            </div>
            <div class="col-lg-4">
              <label>Created Date</label>
              <input
                :value="createdDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Created By</label>
              <input
                :value="incoming.created_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
              <label for="description">Description</label>
              <textarea
                :value="incoming.description"
                class="form-control"
                rows="6"
                readonly
              />
            </div>
            <div class="col-lg-4">
              <label>Updated Date</label>
              <input
                :value="updatedDate"
                type="text"
                class="form-control"
                readonly
              ><br>
              <label>Status</label><br>
              <span
                :class="`btn btn-${status.class}`"
              > {{ status.text }} </span>
            </div>
            <div class="col-lg-4">
              <label>Updated By</label>
              <input
                :value="incoming.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4" />
            <div class="col-lg-4" />
          </div>
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
          <div class="form-group row">
            <div class="col-lg-4">
              <label>Country</label>
              <input
                :value="incoming.from_country_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Cargo Insurance</label>
              <input
                :value="incoming.cargo_insurance"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Custom Permit</label>
              <input
                :value="incoming.custom_permit"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
              <label>From</label>
              <textarea
                :value="incoming.from"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
          </div>
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
          <div class="form-group row">
            <div class="col-lg-4">
              <label>Transport Type</label>
              <input
                :value="transportType"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div
              v-if="incoming.transport_type === 'truck'"
              class="col-lg-4"
            >
              <label>Transport Number</label>
              <input
                :value="incoming.transport_number"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div
              v-if="incoming.transport_type === 'air-freight'"
              class="col-lg-4"
            >
              <label>Flight</label>
              <input
                :value="incoming.flight"
                type="text"
                class="form-control"
                readonly
              >
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
                    <th>SKU - Product</th>
                    <th>Packing</th>
                    <th>Qty</th>
                    <th class="to_warehouse_location_name">
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
import { INCOMING_STATUS, JOB_STATUS } from '@/utils/constants'

export default {
  data () {
    return {
      incoming     : [],
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
      await this.$store.dispatch('incoming/getIncomingDetail', { idIncoming: atob(this.$route.params.id) })
      this.incoming    = this.$store.getters['incoming/getIncomingDetail'].result
      this.etd         = moment(this.incoming.etd).format('DD/MM/Y HH:mm')
      this.eta         = moment(this.incoming.eta).format('DD/MM/Y HH:mm')
      this.orderDate   = moment(this.incoming.order_date).format('DD/MM/Y HH:mm')
      this.createdDate = moment(this.incoming.created_at).format('DD/MM/Y HH:mm:ss')
      if (this.incoming.shipment_date !== '' && this.incoming.shipment_date !== '0000-00-00 00:00:00')
        this.shipmentDate = moment(this.incoming.shipment_date).format('DD/MM/Y HH:mm')
      if (this.incoming.updated_at !== '' && this.incoming.updated_at !== null)
        this.updatedDate      = moment(this.incoming.updated_at).format('DD/MM/Y HH:mm:ss')
      for (const statusIndex in JOB_STATUS) {
        if (this.incoming.status === JOB_STATUS[statusIndex].id)
          this.status = JOB_STATUS[statusIndex]
      }
      this.transportType = `${this.incoming.transport_type.charAt(0).toUpperCase()}${this.incoming.transport_type.slice(1)}`
    } catch (error) {

    }
    // datatable
    this.datatable = $('#product_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      data      : app.incoming.products,
      columns   : [
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'qty' },
        { data: 'to_warehouse_location_name' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'description' },
        { data: 'status' },
        { data: 'created_at' },
        { data: 'updated_at' },
      ],
      columnDefs: [
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
          targets: 'created_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.created_by_name}`
            else
              return data
          },
        },
        {
          targets: 'to_warehouse_location_name',
          render : function (data, type, full, meta) {
            return `${data} - Level ${full.to_warehouse_location_level}`
          },
        },
        {
          targets: 'expired_date',
          render : function (data, type, full, meta) {
            if (data !== '0000-00-00 00:00:00')
              return moment(data).format('DD/MM/Y')
            else
              return ''
          },
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (typeof data === 'undefined')
              return data
            for (const statusIndex in INCOMING_STATUS) {
              if (data === INCOMING_STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${INCOMING_STATUS[statusIndex].class} kt-badge--inline">${INCOMING_STATUS[statusIndex].text}</span>`
            }
          },
        },
      ],
    })
  },
}
</script>
