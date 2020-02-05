<template>
    <div class="row">
        <div class="col-lg-12">
            <form
            id="outgoing_form"
            ref="form"
            class="kt-form kt-form--label-right"
        >
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
                Detail Outgoing
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
                <label>Job No </label>
                    <input
                        v-model="outgoing.job_no"
                        type="text"
                        class="form-control"
                        name="job"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>Unique Code </label>
                    <input
                        v-model="outgoing.unique_code"
                        type="text"
                        class="form-control"
                        name="code"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label>Order No </label>
                    <input
                        id="order"
                        v-model="outgoing.order_no"
                        class="form-control"
                        name="order"
                        readonly
                    />
                </div>
                <div class="col-lg-4">
                <label>Company Name </label>
                    <input
                        v-model="outgoing.company_name"
                        type="text"
                        class="form-control"
                        name="company"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>From Warehouse </label>
                    <input
                        v-model="outgoing.from_warehouse_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label>ETD </label>
                    <input
                        id="etd"
                        v-model="etd"
                        class="form-control"
                        name="etd"
                        readonly
                    />
                </div>
                <div class="col-lg-4">
                <label>ETA </label>
                    <input
                        id="eta"
                        v-model="eta"
                        class="form-control"
                        name="eta"
                        readonly
                    />
                </div>
                <div class="col-lg-4">
                <label for="state">Shipment Date </label>
                    <input
                        v-model="shipment_date"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label>Order Date </label>
                    <input
                        id="order_date"
                        v-model="order_date"
                        class="form-control"
                        name="order_date"
                        readonly
                    />
                </div>
                <div class="col-lg-4">
                <label>Created Date </label>
                    <input
                        id="created_date"
                        v-model="created_date"
                        class="form-control"
                        name="created_date"
                        readonly
                    />
                </div>
                <div class="col-lg-4">
                <label>Created By </label>
                    <input
                        id="order_date"
                        v-model="outgoing.created_by_name"
                        class="form-control"
                        name="order_date"
                        readonly
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    v-model="outgoing.description"
                    class="form-control"
                    rows="3"
                    placeholder="Enter Description"
                    readonly
                />
                </div>
                <div class="col-lg-4">
                <label>Updated Date </label>
                    <input
                        id="updated_date"
                        v-model="updatedDate"
                        class="form-control"
                        name="updated_date"
                        readonly
                    />
                </div>
                <div class="col-lg-4">
                <label>Update By </label>
                    <input
                        id="order_date"
                        v-model="outgoing.updated_by_name"
                        class="form-control"
                        name="update"
                        readonly
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label for="country">From Country </label>
                   <input
                        v-model="outgoing.from_country_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                    <label>Custom Permit</label>
                    <input
                        v-model="outgoing.custom_permit"
                        type="text"
                        name="custom"
                        class="form-control"
                        placeholder="Enter Custom Permit"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>Cargo Insurance</label>
                    <input
                        v-model="outgoing.cargo_insurance"
                        type="text"
                        name="cargo"
                        class="form-control"
                        placeholder="Enter Cargo Insurance"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label for="country">To Country </label>
                    <input
                        v-model="outgoing.to_country_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>To  </label>
                    <input
                        v-model="outgoing.to"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>Tranport Type </label>
                    <input
                        v-model="outgoing.transport_type"
                        type="text"
                        class="form-control"
                        name="transport"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>Transport Number </label>
                    <input
                        v-model="outgoing.transport_number"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg" />
              <div class="form-group row">
                <div class="col-lg-3">
                    <label>Detail Product </label>
                </div>
            </div>
            <div class="form-group row">
            <div class="col-lg-12">
                <!--begin: Datatable -->
                <table
                id="product_table"
                class="table table-hover table-checkable nowrap"
            >
                <thead>
                <tr>
                    <th>SKU Number </th>
                    <th>Product </th>
                    <th>Packing </th>
                    <th>Location</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th class="expired_date">Expired</th>
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
            </form>
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

export default {
  data () {
    return {
      idOutgoingEncoded  : null,
      outgoing   : [],
      product : [],
      etd   : '',
      eta   : '',
      shipment_date : '',
      created_date : '',
      order_date : '',
      updatedDate: '',
    }
  },
  async mounted () {
      const app = this
    await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: atob(this.$route.params.id) })
    this.idOutgoingEncoded = btoa(this.outgoing.id_outgoing)
    this.outgoing    = this.$store.getters['outgoing/getOutgoingDetail'].result
    this.product    = this.$store.getters['outgoing/getOutgoingDetail'].result.products
    this.etd = moment(this.outgoing.etd).format('DD/MM/Y HH:mm')
    this.eta = moment(this.outgoing.eta).format('DD/MM/Y HH:mm')
    this.shipment_date = moment(this.outgoing.shipment_date).format('DD/MM/Y HH:mm')
    this.order_date = moment(this.outgoing.order_date).format('DD/MM/Y HH:mm')
    this.created_date = moment(this.outgoing.created_at).format('DD/MM/Y HH:mm')
    this.updatedDate = moment(this.outgoing.updated_at).format('DD/MM/Y HH:mm')

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
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'qty' },
        { data: 'from_warehouse_location_name' },
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
          targets: 'expired_date',
          render : function (data, type, full, meta) {
            if (data !== '0000-00-00 00:00:00')
              return moment(data).format('DD/MM/Y')
            else
              return ''
          },
        },

      ]
    })
  },
}
</script>