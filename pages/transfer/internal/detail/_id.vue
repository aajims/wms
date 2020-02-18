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
              <i class="kt-font-brand flaticon-clipboard" />
            </span>
            <h3 class="kt-portlet__head-title">
              Internal Transfer Detail
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/transfer/internal/"
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
                :value="internal.job_no"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4">
              <label>Unique Code</label>
              <input
                :value="internal.unique_code"
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
                :value="internal.order_no"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Company</label>
              <input
                :value="internal.company_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Warehouse</label>
              <input
                :value="internal.from_warehouse_name"
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
                <label>ETA</label>
              </div>
              <div class="kt-form__control">
                <div class="input-group date">
                  <input
                    :value="eta"
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
                <label>Shipment Date</label>
              </div>
              <div class="kt-form__control">
                <div class="input-group date">
                  <input
                    :value="shipmentDate"
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
              <label for="description">Description</label>
              <textarea
                :value="internal.description"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Created Date</label>
              <input
                :value="createdDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Created By</label>
              <input
                :value="internal.created_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Updated Date</label>
              <input
                :value="updatedDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Updated By</label>
              <input
                :value="internal.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-4 margin-top-20">
              <label>Status</label><br>
              <span
                :class="`btn btn-${status.class}`"
              > {{ status.text }} </span>
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
                    <th class="from_warehouse_location_name">
                      From Location
                    </th>
                    <th class="to_warehouse_location_name">
                      To Location
                    </th>
                    <th class="status">
                      Status
                    </th>
                    <th>Batch</th>
                    <th class="expired_date">
                      Expired
                    </th>
                    <th>Description</th>
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
import { INTERNAL_STATUS, JOB_STATUS } from '@/utils/constants'

export default {
  data () {
    return {
      internal    : [],
      datatable   : [],
      etd         : '',
      eta         : '',
      orderDate   : '',
      shipmentDate: '',
      createdDate : '',
      updatedDate : '',
      status      : [],
    }
  },
  async mounted () {
    const app = this
    try {
      await this.$store.dispatch('internal/getInternalDetail', { idInternal: atob(this.$route.params.id) })
      this.internal    = this.$store.getters['internal/getInternalDetail'].result
      this.etd         = moment(this.internal.etd).format('DD/MM/Y HH:mm')
      this.eta         = moment(this.internal.eta).format('DD/MM/Y HH:mm')
      this.orderDate   = moment(this.internal.order_date).format('DD/MM/Y HH:mm')
      this.createdDate = moment(this.internal.created_at).format('DD/MM/Y HH:mm:ss')
      if (this.internal.shipment_date !== '' && this.internal.shipment_date !== '0000-00-00 00:00:00')
        this.shipmentDate = moment(this.internal.shipment_date).format('DD/MM/Y HH:mm')
      if (this.internal.updated_at !== '' && this.internal.updated_at !== null)
        this.updatedDate      = moment(this.internal.updated_at).format('DD/MM/Y HH:mm:ss')
      for (const statusIndex in JOB_STATUS) {
        if (this.internal.status === JOB_STATUS[statusIndex].id)
          this.status = JOB_STATUS[statusIndex]
      }
    } catch (error) {

    }
    // datatable
    this.datatable = $('#product_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      data      : app.internal.products,
      columns   : [
        { data: 'product_sku' },
        { data: 'unique_code' },
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'qty' },
        { data: 'from_warehouse_location_name' },
        { data: 'to_warehouse_location_name' },
        { data: 'status' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'description' },
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
          targets: 'from_warehouse_location_name',
          render : function (data, type, full, meta) {
            return `${data} - Level ${full.from_warehouse_location_level}`
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
            for (const statusIndex in INTERNAL_STATUS) {
              if (data === INTERNAL_STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${INTERNAL_STATUS[statusIndex].class} kt-badge--inline">${INTERNAL_STATUS[statusIndex].text}</span>`
            }
            return data
          },
        },
      ],
    })
  },
}
</script>
