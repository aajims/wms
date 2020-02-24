<template>
  <div
    id="kt_page_portlet"
    class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
  >
    <div class="kt-portlet__head kt-portlet__head--lg">
      <div class="kt-portlet__head-label">
        <span class="kt-portlet__head-icon">
          <i class="kt-font-brand flaticon2-open-box" />
        </span>
        <h3 class="kt-portlet__head-title">
          Product List ({{ location.warehouse_name }}, {{ location.name }})
        </h3>
      </div>
    </div>
    <div class="kt-portlet__body">
      <!--begin: Search Form -->
      <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
        <div class="row align-items-center">
          <div class="col-xl-10 order-2 order-xl-1">
            <div class="row align-items-center">
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Filter By:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_filter"
                      class="form-control bootstrap-select selectpicker"
                    >
                      <option value="name">
                        Name
                      </option>
                      <option value="sku">
                        SKU / Model
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__label">
                  <label>Search:</label>
                </div>
                <div class="kt-input-icon kt-input-icon--left">
                  <input
                    v-model="params.keyword"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    @keyup="getProduct()"
                  >
                  <span class="kt-input-icon__icon kt-input-icon__icon--left">
                    <span><i class="la la-search" /></span>
                  </span>
                </div>
              </div>
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Status:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_status"
                      class="form-control bootstrap-select selectpicker"
                    >
                      <option value="">
                        All
                      </option>
                      <option value="1">
                        Active
                      </option>
                      <option value="0">
                        Inactive
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>&nbsp;</label>
                  </div>
                  <div class="kt-form__control">
                    <a
                      href="javascript:void(0)"
                      class="btn btn-default"
                      @click="clearForm"
                    >
                      <i class="flaticon2-circular-arrow" /> Clear
                    </a>
                    <div class="kt-separator d-xl-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end: Search Form -->
    </div>

    <div class="kt-portlet__body">
      <!--begin: Datatable -->
      <table
        id="product_table"
        class="table table-hover table-checkable"
      >
        <thead>
          <tr>
            <th class="no-order">
              #
            </th>
            <th>SKU / Model</th>
            <th>Name</th>
            <th class="no-order">
              Category
            </th>
            <th class="status">
              Status
            </th>
            <th class="no-order">
              Last Stock
            </th>
            <th class="type">
              Type
            </th>
            <th>Created By</th>
            <th class="created_at">
              Created
            </th>
          </tr>
        </thead>
      </table>
    <!--end: Datatable -->
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
import { PRODUCT_TYPE, STATUS_TRUE } from '@/utils/constants'

export default {
  data () {
    return {
      idLocation: null,
      datatable : [],
      location  : [],
      params    : {
        keyword  : '',
        search_by: '',
        filter   : { warehouse_location_id: '' },
      },
      pageAccess: {},
      statusTrue: STATUS_TRUE,
    }
  },
  async mounted () {
    // get page access
    this.pageAccess = this.$store.getters['getAccessPage']

    const param = atob(this.$route.params.id)
    if (this.$route.params.id !== undefined)
      this.params.filter.warehouse_location_id = param

    try {
      await this.$store.dispatch('location/getLocationDetail', { idLocation: param })
      this.location   = this.$store.getters['location/getLocationDetail'].result
      this.idLocation = btoa(this.location.id)
    } catch (error) {
      this.location = { id: '', name: '' }
    }

    const app = this
    $('#kt_form_status').on('change', function () {
      if ($('#kt_form_status').val() !== '' && $('#kt_form_status').val() !== null)
        app.params.filter.status = $('#kt_form_status').val()
      else
        app.$delete(app.params.filter, 'status')
      app.getProduct()
    })

    // begin first table
    this.datatable = $('#product_table').DataTable({
      responsive: true,
      searching : false,
      processing: true,
      serverSide: true,
      ajax      : {
        url : '/api/product-location/list',
        type: 'POST',
        data: function (d) {
          d.params = app.params
        },
      },
      order  : [[8, 'desc']],
      columns: [
        { data: 'row_number' },
        { data: 'product_sku' },
        { data: 'product_name' },
        { data: 'product_category_name' },
        { data: 'status' },
        { data: 'last_stock' },
        { data: 'product_type' },
        { data: 'created_by_name' },
        { data: 'created_at' },
      ],
      columnDefs: [
        {
          targets  : 'no-order',
          orderable: false,
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
          targets  : 'type',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            let productType = ''
            for (const type in PRODUCT_TYPE) {
              if (PRODUCT_TYPE[type].id === full.product_type)
                productType = PRODUCT_TYPE[type].text
            }

            return productType
          },
        },
        {
          targets  : 'created_at',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            return moment(data).format('DD/MM/Y HH:mm:ss')
          },
        },
      ],
    })
  },
  methods: {
    async getProduct () {
      this.params.search_by = $('#kt_form_filter').val()
      this.datatable.ajax.reload()
    },
    async clearForm () {
      this.params = {
        keyword  : '',
        search_by: '',
        filter   : { warehouse_location_id: atob(this.$route.params.id) },
      }
      this.datatable.ajax.reload()
      $('#kt_form_filter').val('name')
      $('#kt_form_status').val('')
      $('.selectpicker').selectpicker('refresh')
    },
  },
}
</script>
