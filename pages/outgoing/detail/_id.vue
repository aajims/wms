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
                <div class="col-lg-6">
                <label>Company Name <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.company_name"
                        type="text"
                        class="form-control"
                        name="transport"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>Order No <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="outgoing.order_no"
                        class="form-control"
                        name="order"
                        readonly
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>ETD <span style="color:red">*</span></label>
                    <input
                        id="etd"
                        v-model="etd"
                        class="form-control"
                        name="etd"
                        readonly
                    />
                </div>
                <div class="col-lg-6">
                <label>ETA <span style="color:red">*</span></label>
                    <input
                        id="eta"
                        v-model="eta"
                        class="form-control"
                        name="eta"
                        readonly
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>Tranport Type <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.transport_type"
                        type="text"
                        class="form-control"
                        name="transport"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>Transport Number <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.transport_number"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label for="state">Shipment Date <span style="color:red">*</span></label>
                    <input
                        v-model="shipment_date"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label for="country">From Country <span style="color:red">*</span></label>
                   <input
                        v-model="outgoing.from_country_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>From Warehouse <span style="color:red">*</span></label>
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
                <div class="col-lg-6">
                <label for="country">To Country <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.to_country_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>To  <span style="color:red">*</span></label>
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
                <div class="col-lg-6">
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
                <label>Order Date <span style="color:red">*</span></label>
                    <input
                        id="order_date"
                        v-model="order_date"
                        class="form-control"
                        name="order_date"
                        readonly
                    />
                </div>
                <div class="col-lg-6">
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
                id="outgoing_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>Product </th>
                    <th>Packing </th>
                    <th>From Warehouse</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Expired</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in product" :key="index">
                        <td>{{ row.product_name }}</td>
                        <td>{{ row.product_packing_name }}</td>
                        <td>{{ row.from_warehouse_location_name }}</td>
                        <td>{{ row.batch }}</td>
                        <td>{{ row.qty }}</td>
                       
                        <td>{{ row.expired_date }}</td>
                        <td>{{ row.description }}</td>
                    </tr>
                </tbody>
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
      order_date : '',
      updatedDate: '',
    }
  },
  async mounted () {
    await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: atob(this.$route.params.id) })
    this.idOutgoingEncoded = btoa(this.outgoing.id_outgoing)
    this.outgoing    = this.$store.getters['outgoing/getOutgoingDetail'].result
    this.product    = this.$store.getters['outgoing/getOutgoingDetail'].result.products
    this.expired = moment(this.expired_date).format('DD/MM/Y HH:mm')
    this.updatedDate = moment(this.outgoing.updated_at).format('DD/MM/Y HH:mm:ss')
    this.etd = moment(this.outgoing.etd).format('DD/MM/Y HH:mm')
    this.eta = moment(this.outgoing.eta).format('DD/MM/Y HH:mm')
    this.shipment_date = moment(this.outgoing.shipment_date).format('DD/MM/Y HH:mm')
    this.order_date = moment(this.outgoing.order_date).format('DD/MM/Y HH:mm')
  },
}
</script>