<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="product_form"
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
                <i class="kt-font-brand flaticon-edit-1" />
              </span>
              <h3 class="kt-portlet__head-title">
                Edit Product ({{ company_name }})
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
              <button
                type="submit"
                class="btn btn-brand"
              >
                <i class="la la-check" />
                <span class="kt-hidden-mobile">Save</span>
              </button>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Name <span style="color:red">*</span></label>
                <input
                  v-model="product.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter product name"
                >
              </div>
              <div class="col-lg-6">
                <label>SKU / Model <span style="color:red">*</span></label>
                <input
                  v-model="product.sku"
                  type="text"
                  class="form-control"
                  name="sku"
                  placeholder="Enter SKU / model"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Category <span style="color:red">*</span></label>
                <select
                  id="category"
                  class="form-control kt-select2"
                  name="category"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label>Type <span style="color:red">*</span></label>
                <select
                  id="type"
                  class="form-control kt-select2"
                  name="type"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Minimum Stock Alert (Item Quantity) <span style="color:red">*</span></label>
                <input
                  v-model="product.minimum_stock_alert"
                  type="text"
                  class="form-control"
                  name="minimum_stock_alert"
                  placeholder="Enter minimum stock alert (item quantity)"
                >
              </div>
              <div class="col-lg-6">
                <label>HS Code</label>
                <input
                  v-model="product.code"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter HS code"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Dimension Type <span style="color:red">*</span></label>
                <select
                  id="dimension_type"
                  class="form-control kt-select2"
                  name="dimension_type"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label>Length <span style="color:red">*</span></label>
                <input
                  v-model="product.length"
                  type="text"
                  class="form-control"
                  name="length"
                  placeholder="Enter product length"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Width <span style="color:red">*</span></label>
                <input
                  v-model="product.width"
                  type="text"
                  class="form-control"
                  name="width"
                  placeholder="Enter product width"
                >
              </div>
              <div class="col-lg-6">
                <label>Height <span style="color:red">*</span></label>
                <input
                  v-model="product.height"
                  type="text"
                  class="form-control"
                  name="height"
                  placeholder="Enter product height"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Weight Type <span style="color:red">*</span></label>
                <select
                  id="weight_type"
                  class="form-control kt-select"
                  name="weight_type"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label>Weight <span style="color:red">*</span></label>
                <input
                  v-model="product.weight"
                  type="text"
                  class="form-control"
                  name="weight"
                  placeholder="Enter product weight"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  v-model="product.description"
                  class="form-control"
                  rows="3"
                />
              </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg" />
            <div class="form-group row">
              <div class="col-lg-3">
                <label>Product Packing Type</label>
                <a
                  href="javascript:;"
                  class="btn btn-bold btn-sm btn-label-brand"
                  style="margin-left: 10px"
                  data-toggle="modal"
                  data-target="#packing_modal"
                  data-backdrop="static"
                  data-keyboard="false"
                >
                  <i class="la la-plus" /> Add
                </a>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-12">
                <!--begin: Datatable -->
                <table
                  id="packing_table"
                  class="table table-hover table-checkable"
                >
                  <thead>
                    <tr>
                      <th>Packing Type</th>
                      <th class="number">
                        Qty Max
                      </th>
                      <!-- <th class="nett-weight">
                        Nett Weight
                      </th>
                      <th class="gross-weight">
                        Gross Weight
                      </th>
                      <th class="dimension">
                        Dimension
                      </th> -->
                      <th>UOM</th>
                      <th class="status">
                        Status
                      </th>
                      <th>Description</th>
                      <th class="actions">
                        Actions
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
    <!--begin::Modal-->
    <div
      id="packing_modal"
      class="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <form
        id="packing_form"
        ref="form"
      >
        <div
          class="modal-dialog modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                Product Packing Type
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>Packing Type <span style="color:red">*</span></label>
                  <select
                    id="packing_type"
                    name="packing_type"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
                <div class="col-lg-6">
                  <label>Quantity Max <span style="color:red">*</span></label>
                  <input
                    id="qty_max"
                    value="1"
                    name="qty_max"
                    class="form-control"
                  >
                  <span class="form-text text-muted" />
                </div>
              </div>
              <!-- <div class="form-group row">
                <div class="col-lg-6">
                  <label>Nett Weight Type <span style="color:red">*</span></label>
                  <select
                    id="nett_weight_type"
                    name="nett_weight_type"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
                <div class="col-lg-6">
                  <label>Nett Weight <span style="color:red">*</span></label>
                  <input
                    id="nett_weight"
                    value="1"
                    name="nett_weight"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>Gross Weight Type <span style="color:red">*</span></label>
                  <select
                    id="gross_weight_type"
                    name="gross_weight_type"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
                <div class="col-lg-6">
                  <label>Gross Weight <span style="color:red">*</span></label>
                  <input
                    id="gross_weight"
                    value="1"
                    name="gross_weight"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>Dimension Type <span style="color:red">*</span></label>
                  <select
                    id="dimension_type_modal"
                    name="dimension_type_modal"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
                <div class="col-lg-6">
                  <label>Length <span style="color:red">*</span></label>
                  <input
                    id="length_modal"
                    value="1"
                    name="length_modal"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>Width <span style="color:red">*</span></label>
                  <input
                    id="width_modal"
                    value="1"
                    name="width_modal"
                    class="form-control"
                  >
                </div>
                <div class="col-lg-6">
                  <label>Height <span style="color:red">*</span></label>
                  <input
                    id="height_modal"
                    value="1"
                    name="height_modal"
                    class="form-control"
                  >
                </div>
              </div> -->
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>UOM <span style="color:red">*</span></label>
                  <select
                    id="uom"
                    name="uom"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
                <div class="col-lg-6">
                  <label>Description</label>
                  <textarea
                    id="description"
                    class="form-control"
                    rows="3"
                  />
                  <input
                    id="row_index"
                    type="hidden"
                    value=""
                  >
                  <input
                    id="row_id"
                    type="hidden"
                    value="1"
                  >
                  <input
                    id="packing_status"
                    type="hidden"
                    value=""
                  >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--end::Modal-->
  </div>
</template>

<script>
import { PRODUCT_TYPE, WEIGHT_TYPE, STATUS, DIMENSION_TYPE, UOM } from '@/utils/constants'

export default {
  data () {
    return {
      category: [],
      packing : [],
      product : {
        name               : null,
        sku                : null,
        code               : null,
        product_category_id: null,
        type               : null,
        minimum_stock_alert: null,
        product_status     : null,
        company_id         : null,
        description        : null,
        products_packing   : [],
        status             : null,
      },
      idCompanyEncoded     : null,
      packingSelect        : null,
      datatable            : [],
      product_category_name: null,
      company_name         : null,
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('product/getProductDetail', { idProduct: atob(this.$route.params.id) })
      const productDetail              = this.$store.getters['product/getProductDetail'].result

      this.product.name                = productDetail.name
      this.product.sku                 = productDetail.sku
      this.product.code                = productDetail.code
      this.product.type                = productDetail.type
      this.product_category_name       = productDetail.product_category_name
      this.product.product_category_id = productDetail.product_category_id
      this.product.minimum_stock_alert = productDetail.minimum_stock_alert
      this.product.product_status      = productDetail.product_status
      this.product.company_id          = productDetail.company_id
      this.product.description         = productDetail.description
      this.product.status              = productDetail.status
      this.product.dimension_type      = productDetail.dimension_type
      this.product.length              = productDetail.length
      this.product.width               = productDetail.width
      this.product.height              = productDetail.height
      this.product.weight_type         = productDetail.weight_type
      this.product.weight              = productDetail.weight

      await this.$store.dispatch('packing/getPacking', { idCompany: productDetail.company_id })
      this.packingSelect    = this.$store.getters['packing/getPacking']
      // set product packing
      productDetail.products_packing.forEach((value) => {
        const productsPacking     = {
          id               : value.id,
          packing_type_id  : value.packing_type_id,
          packing_type_name: value.packing_type_name,
          qty_max          : value.qty_max,
          nett_weight_type : value.nett_weight_type,
          nett_weight      : value.nett_weight,
          gross_weight_type: value.gross_weight_type,
          gross_weight     : value.gross_weight,
          dimension_type   : value.dimension_type,
          length           : value.length,
          width            : value.width,
          height           : value.height,
          uom              : value.uom,
          description      : value.description,
          status           : value.status,
        }
        this.product.products_packing.push(productsPacking)
      })
      this.company_name     = productDetail.company_name
      this.idCompanyEncoded = btoa(this.product.company_id)
    } catch (error) {

    }

    $('#category').select2({
      placeholder       : 'Select a product category',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      ajax              : {
        type          : 'GET',
        url           : '/api/category/select',
        cache         : true,
        processResults: function (data) {
          return {
            results: $.map(data.result, function (object) {
              return {
                id  : object.id,
                text: object.name,
              }
            }),
          }
        },
      },
    })
    const newOptionCategory = new Option(this.product_category_name, this.product.product_category_id, true, true)
    $('#category').append(newOptionCategory).trigger('change')
    $('#category').on('change', function () {
      validator.element($(this))
    })

    $('#type').select2({
      data: PRODUCT_TYPE, placeholder: 'Select a product type', allowClear: true,
    })
    $('#type').val(this.product.type).trigger('change')
    $('#type').on('change', function () {
      validator.element($(this))
    })

    $('#dimension_type').select2({
      data: DIMENSION_TYPE, placeholder: 'Select a dimension type', allowClear: true,
    })
    $('#dimension_type').val(this.product.dimension_type).trigger('change')
    $('#dimension_type').on('change', function () {
      validator.element($(this))
    })

    $('#weight_type').select2({
      data: WEIGHT_TYPE, placeholder: 'Select a weight type', allowClear: true,
    })
    $('#weight_type').val(this.product.weight_type).trigger('change')
    $('#weight_type').on('change', function () {
      validator.element($(this))
    })

    const validator = $('#product_form').validate({
      // define validation rules
      rules: {
        name               : { required: true },
        sku                : { required: true },
        category           : { required: true },
        type               : { required: true },
        minimum_stock_alert: {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
        length: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        width: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        height: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        weight: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        dimension_type: { required: true },
        weight_type   : { required: true },
      },
      invalidHandler: function (event, validator) {
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
        event.preventDefault()
      },
      submitHandler: function (form) {
        const data = app.datatable.rows().data().toArray()
        if (data.length === 0) {
          // eslint-disable-next-line no-undef
          swal.fire({
            title             : 'Error!',
            text              : 'Please add product packing type',
            type              : 'error',
            buttonsStyling    : false,
            confirmButtonClass: 'btn btn-danger',
          })
          return false
        }
        app.editProduct(data)
      },
    })
    $.validator.addMethod('positiveNumber',
      function (value) {
        return Number(value) >= 0
      }, 'Enter a positive number.')
    $.validator.addMethod('greaterThanZero',
      function (value) {
        return Number(value) > 0
      }, 'Enter value greater than 0.')

    // form modal
    /* $('#gross_weight_type').select2({ data: WEIGHT_TYPE })
    $('#nett_weight_type').select2({ data: WEIGHT_TYPE })
    $('#dimension_type_modal').select2({ data: DIMENSION_TYPE }) */
    $('#uom').select2({ data: UOM })
    $('#packing_type').select2({ data: this.packingSelect })
    const app = this
    $('#packing_modal').on('shown.bs.modal', function () {
      /* $('#gross_weight_type').select2({
        data: WEIGHT_TYPE, placeholder: 'Select a gross weight type', allowClear: true,
      })
      $('#gross_weight_type').on('change', function () {
        validatorModal.element($(this))
      })
      $('#nett_weight_type').select2({
        data: WEIGHT_TYPE, placeholder: 'Select a nett weight type', allowClear: true,
      })
      $('#nett_weight_type').on('change', function () {
        validatorModal.element($(this))
      }) */
      $('#packing_type').select2({
        placeholder: 'Select a packing type',
        allowClear : true,
        data       : app.packingSelect,
      })
      $('#packing_type').on('change', function () {
        validatorModal.element($(this))
      })
      /* $('#dimension_type_modal').select2({
        data: DIMENSION_TYPE, placeholder: 'Select a dimension type', allowClear: true,
      })
      $('#dimension_type_modal').on('change', function () {
        validator.element($(this))
      }) */
      $('#uom').select2({
        data: UOM, placeholder: 'Select a uom', allowClear: true,
      })
      $('#uom').on('change', function () {
        validator.element($(this))
      })
    })
    $('#packing_modal').on('hidden.bs.modal', function () {
      app.clearForm()
    })

    // datatable
    this.datatable = $('#packing_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      data      : app.product.products_packing,
      rowId     : 'id',
      columns   : [
        { data: 'packing_type_name' },
        { data: 'qty_max' },
        /* { data: 'nett_weight' },
        { data: 'gross_weight' },
        { data: 'dimension' }, */
        { data: 'uom' },
        { data: 'status' },
        { data: 'description' },
        { data: 'actions', responsivePriority: -1 },
      ],
      columnDefs: [
        {
          targets  : 'number',
          className: 'dt-right',
        },
        /* {
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
        }, */
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (typeof STATUS[data] === 'undefined')
              return data

            return `<span class="kt-badge kt-badge--${STATUS[data].class} kt-badge--inline">${STATUS[data].text}</span>`
          },
        },
        {
          targets: 'actions',
          render : function (data, type, full, meta) {
            const iconAdditional  = full.id === '' ? 'la la-trash' : 'la la-power-off'
            const titleAdditional = full.id === '' ? 'Delete' : 'Update Status'
            return `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit">
                      <i class="la la-edit"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="${titleAdditional}">
                      <i class="${iconAdditional}"></i>
                    </a>`
          },
        },
      ],
    })

    // delete datatable row
    $('#packing_table').on('click', '.la-trash', function () {
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // change status datatable row
    $('#packing_table').on('click', '.la-power-off', function () {
      const rowIndex = app.datatable.row($(this).parents('tr')).index()
      const rowData  = app.datatable.row($(this).parents('tr')).data()
      app.updateStatus(rowIndex, rowData)
    })

    // edit datatable row
    $('#packing_table').on('click', '.la-edit', function () {
      const rowIndex = app.datatable.row($(this).parents('tr')).index()
      const rowId    = app.datatable.row($(this).parents('tr')).id()
      const rowData  = app.datatable.row($(this).parents('tr')).data()
      $('#row_id').val(rowId)
      $('#row_index').val(rowIndex)
      $('#packing_status').val(rowData.status)
      $('#description').val(rowData.description)
      $('#qty_max').val(rowData.qty_max)
      /* $('#nett_weight').val(rowData.nett_weight)
      $('#gross_weight').val(rowData.gross_weight)
      $('#length_modal').val(rowData.length)
      $('#width_modal').val(rowData.width)
      $('#height_modal').val(rowData.height) */
      $('#packing_type').val(rowData.packing_type_id).trigger('change')
      /* $('#nett_weight_type').val(rowData.nett_weight_type).trigger('change')
      $('#gross_weight_type').val(rowData.gross_weight_type).trigger('change')
      $('#dimension_type_modal').val(rowData.dimension_type).trigger('change') */
      $('#uom').val(rowData.uom).trigger('change')
      $('#packing_modal').modal('show')
    })

    // validator modal
    const validatorModal = $('#packing_form').validate({
      rules: {
        packing_type: { required: true },
        /* nett_weight_type    : { required: true },
        gross_weight_type   : { required: true },
        dimension_type_modal: { required: true }, */
        uom         : { required: true },
        qty_max     : {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
        /* nett_weight: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        gross_weight: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        length_modal: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        width_modal: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        },
        height_modal: {
          required       : true,
          number         : true,
          greaterThanZero: true,
        }, */
      },
      invalidHandler: function (event, validator) {
        event.preventDefault()
      },
      submitHandler: function (form) {
        app.savePacking()
        return false
      },
    })
  },
  methods: {
    savePacking () {
      const packingSave = {
        id               : parseInt($('#row_id').val().trim()),
        packing_type_id  : parseInt($('#packing_type').val()),
        packing_type_name: $('#packing_type option:selected').text(),
        qty_max          : parseInt($('#qty_max').val()),
        /* nett_weight_type : $('#nett_weight_type').val(),
        nett_weight      : parseFloat($('#nett_weight').val()),
        gross_weight_type: $('#gross_weight_type').val(),
        gross_weight     : parseFloat($('#gross_weight').val()),
        dimension_type   : $('#dimension_type_modal').val(), */
        uom              : $('#uom').val(),
        /* length           : parseFloat($('#length_modal').val()),
        width            : parseFloat($('#width_modal').val()),
        height           : parseFloat($('#height_modal').val()), */
        description      : $('#description').val(),
        status           : $('#packing_status').val() === '' ? 1 : parseInt($('#packing_status').val()),
      }
      if ($('#row_index').val().trim() === '')
        this.datatable.row.add(packingSave).draw()
      else
        this.datatable.row($('#row_index').val().trim()).data(packingSave).draw()
      $('#packing_modal').modal('hide')
    },
    updateStatus (index, data) {
      data.status = data.status === 1 ? 0 : 1
      this.datatable.row(index).data(data).draw()
    },
    clearForm () {
      $('#packing_type').val(null).trigger('change')
      /* $('#nett_weight_type').val(null).trigger('change')
      $('#gross_weight_type').val(null).trigger('change')
      $('#dimension_type_modal').val(null).trigger('change') */
      $('#uom').val(null).trigger('change')
      $('#qty_max').val(0)
      /* $('#nett_weight').val(0)
      $('#gross_weight').val(0)
      $('#length_modal').val(1)
      $('#width_modal').val(1)
      $('#height_modal').val(1) */
      $('#description').val(null)
      $('#row_index').val('')
      $('#row_id').val(0)
      $('#packing_status').val('')
    },
    async editProduct (data) {
      const app = this
      if ($('#product_form').valid()) {
        this.product.minimum_stock_alert = parseInt(this.product.minimum_stock_alert)
        this.product.product_category_id = parseInt($('#category').val())
        this.product.type                = parseInt($('#type').val())
        this.product.length              = parseFloat(this.product.length)
        this.product.width               = parseFloat(this.product.width)
        this.product.height              = parseFloat(this.product.height)
        this.product.weight              = parseFloat(this.product.weight)
        this.product.dimension_type      = $('#dimension_type').val()
        this.product.weight_type         = $('#weight_type').val()
        this.product.products_packing    = data
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('product/editProduct', { idProduct: atob(this.$route.params.id), data: this.product })
          const data      = this.$store.getters['product/getEditProduct']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Product ${data.result.name} has been edited`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = `/company/product/list/${app.idCompanyEncoded}` }, 3000)
        } catch (error) {
          const parameter = {
            alertClass: 'alert-danger',
            message   : error.message,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
        }
      }
    },
  },
}
</script>
