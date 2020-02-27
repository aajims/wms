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
              Product Detail ({{ product.company_name }})
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              :href="`/company/product/list/${idCompanyEncoded}`"
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
              <label>Name</label>
              <input
                :value="product.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>SKU / Model</label>
              <input
                :value="product.sku"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Category</label>
              <input
                :value="product.product_category_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Type</label>
              <input
                :value="type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Minimum Stock Alert (Item Quantity)</label>
              <input
                :value="product.minimum_stock_alert"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>HS Code</label>
              <input
                :value="product.code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Dimension Type</label>
              <input
                :value="product.dimension_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Length</label>
              <input
                :value="product.length"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Width</label>
              <input
                :value="product.width"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Height</label>
              <input
                :value="product.height"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Weight Type</label>
              <input
                :value="product.weight_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Weight</label>
              <input
                :value="product.weight"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Created By</label>
              <input
                :value="product.created_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Created Date</label>
              <input
                :value="createdDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Updated By</label>
              <input
                :value="product.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Updated Date</label>
              <input
                :value="updatedDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="description">Description</label>
              <textarea
                :value="product.description"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label>Status</label><br>
              <span
                :class="`btn btn-${status.class}`"
              > {{ status.text }} </span>
            </div>
          </div>
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg" />
          <div class="form-group row">
            <div class="col-lg-12">
              <!--begin: Datatable -->
              <table
                id="packing_table"
                class="table table-hover table-checkable nowrap"
              >
                <thead>
                  <tr>
                    <th>Packing Type</th>
                    <th class="number">
                      Qty Max
                    </th>
                    <th class="nett-weight">
                      Nett Weight
                    </th>
                    <th class="gross-weight">
                      Gross Weight
                    </th>
                    <th class="dimension">
                      Dimension
                    </th>
                    <th>UOM</th>
                    <th class="status">
                      Status
                    </th>
                    <th>Description</th>
                    <th>Created By</th>
                    <th class="date">
                      Created
                    </th>
                    <th>Updated By</th>
                    <th class="date">
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
import { PRODUCT_TYPE, STATUS } from '@/utils/constants'
import moment from 'moment'

export default {
  data () {
    return {
      product         : [],
      createdDate     : '',
      updatedDate     : '',
      idCompanyEncoded: null,
      datatable       : [],
      type            : '',
      status          : [],
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('product/getProductDetail', { idProduct: atob(this.$route.params.id) })
      this.product          = this.$store.getters['product/getProductDetail'].result
      this.idCompanyEncoded = btoa(this.product.company_id)
      this.type             = PRODUCT_TYPE[this.product.type - 1].text
      this.status           = STATUS[this.product.status]
      this.createdDate      = moment(this.product.created_at).format('DD/MM/Y HH:mm:ss')
      if (this.updatedDate !== '' && this.updatedDate !== null)
        this.updatedDate      = moment(this.product.updated_at).format('DD/MM/Y HH:mm:ss')
    } catch (error) {

    }

    // datatable
    const app      = this
    this.datatable = $('#packing_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      data      : app.product.products_packing,
      columns   : [
        { data: 'packing_type_name' },
        { data: 'qty_max' },
        { data: 'nett_weight' },
        { data: 'gross_weight' },
        { data: 'dimension' },
        { data: 'uom' },
        { data: 'status' },
        { data: 'description' },
        { data: 'created_by_name' },
        { data: 'created_at' },
        { data: 'updated_by_name' },
        { data: 'updated_at' },
      ],
      columnDefs: [
        {
          targets  : 'number',
          className: 'dt-right',
        },
        {
          targets  : 'nett-weight',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            return `${full.nett_weight} ${full.nett_weight_type}`
          },
        },
        {
          targets  : 'gross-weight',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            return `${full.gross_weight} ${full.gross_weight_type}`
          },
        },
        {
          targets  : 'dimension',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            return `${full.length} x ${full.width} x ${full.height} ${full.dimension_type}`
          },
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            const status = {
              0: { title: 'Inactive', class: ' kt-badge--danger' },
              1: { title: 'Active', class: ' kt-badge--success' },
            }
            if (typeof status[data] === 'undefined')
              return data

            return `<span class="kt-badge ${status[data].class} kt-badge--inline">${status[data].title}</span>`
          },
        },
        {
          targets  : 'date',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (data === '')
              return data
            return moment(data).format('DD/MM/Y HH:mm:ss')
          },
        },
      ],
    })
  },
}
</script>
