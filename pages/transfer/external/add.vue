<style scoped>
.col-lg-4 {
  margin-top: 20px;
}
</style>
<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="external_form"
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
                <i class="kt-font-brand flaticon-add" />
              </span>
              <h3 class="kt-portlet__head-title">
                Add External Transfer
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/transfer/external/"
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
              <div class="col-lg-4">
                <label>Order No. <span style="color:red">*</span></label>
                <input
                  v-model="external.order_no"
                  type="text"
                  class="form-control"
                  name="order_no"
                  placeholder="Enter order number"
                >
              </div>
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>Company <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="company_id"
                    class="form-control kt-select2"
                    name="company_id"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>From Warehouse <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="from_warehouse_id"
                    class="form-control kt-select2"
                    name="from_warehouse_id"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>To Warehouse <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="to_warehouse_id"
                    class="form-control kt-select2"
                    name="to_warehouse_id"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>ETD <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <div class="input-group date">
                    <input
                      id="etd"
                      name="etd"
                      class="form-control"
                      readonly
                      placeholder="Select etd"
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
                  <label>ETA <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <div class="input-group date">
                    <input
                      id="eta"
                      name="eta"
                      class="form-control"
                      readonly
                      placeholder="Select eta"
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
                  <label>Order Date <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <div class="input-group date">
                    <input
                      id="order_date"
                      name="order_date"
                      type="text"
                      class="form-control"
                      readonly
                      placeholder="Select order date"
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
                      id="shipment_date"
                      name="shipment_date"
                      type="text"
                      class="form-control"
                      readonly
                      placeholder="Select shipment date"
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
                <label>Transport Number</label>
                <input
                  v-model="external.transport_number"
                  type="text"
                  class="form-control"
                  name="transport_number"
                  placeholder="Enter transport number"
                >
              </div>
              <div class="col-lg-4">
                <label for="description">Description</label>
                <textarea
                  v-model="external.description"
                  class="form-control"
                  rows="3"
                />
              </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
            <div class="form-group row">
              <div class="col-lg-3">
                <label>Products</label>
                <a
                  href="javascript:;"
                  class="btn btn-bold btn-sm btn-label-brand"
                  style="margin-left: 10px"
                  @click="openModal"
                >
                  <i class="la la-plus" /> Add
                </a>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-12">
                <!--begin: Datatable -->
                <table
                  id="product_table"
                  class="table table-hover table-checkable"
                >
                  <thead>
                    <tr>
                      <th>SKU Number</th>
                      <th>Product Location</th>
                      <th>Product</th>
                      <th>Packing</th>
                      <th>Quantity</th>
                      <th>Location</th>
                      <th>Batch</th>
                      <th class="expired_date">
                        Expired
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
      id="product_modal"
      class="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <form
        id="product_form"
        ref="form"
      >
        <div
          class="modal-dialog modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                Product
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
                  <label>Product <span style="color:red">*</span></label>
                  <select
                    id="product_id"
                    name="product_id"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
                <div class="col-lg-6">
                  <label>Packing <span style="color:red">*</span></label>
                  <select
                    id="product_packing_id"
                    name="product_packing_id"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted">Please select a product </span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>From Location <span style="color:red">*</span></label>
                  <select
                    id="from_warehouse_location_id"
                    name="from_warehouse_location_id"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted">Please select a packing </span>
                </div>
                <div class="col-lg-6">
                  <label>Product Location <span style="color:red">*</span></label>
                  <select
                    id="unique_code"
                    name="unique_code"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted">Please select a from location </span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-3">
                  <label>Product Qty (Packing)</label>
                  <input
                    id="qty_packing"
                    type="text"
                    class="form-control"
                    disabled="disabled"
                  >
                </div>
                <div class="col-lg-3">
                  <label>Product Qty (Transfer) <span style="color:red">*</span></label>
                  <input
                    id="qty"
                    name="qty"
                    type="text"
                    class="form-control"
                  >
                </div>
                <div class="col-lg-6">
                  <label for="description">Description</label>
                  <textarea
                    id="description_modal"
                    class="form-control"
                    rows="3"
                  />
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
import moment from 'moment'

export default {
  data () {
    return {
      rowIndex : null,
      countries: [],
      external : {
        company_id       : 0,
        order_no         : '',
        type             : 4,
        etd              : '',
        eta              : '',
        order_date       : '',
        shipment_date    : '',
        transport_type   : 'truck',
        transport_number : '',
        from             : 'n/a',
        to               : 'n/a',
        from_country_id  : 0,
        to_country_id    : 0,
        from_warehouse_id: 0,
        to_warehouse_id  : 0,
        description      : '',
        products         : [],
      },
      datatable            : [],
      productPackingSelect : [],
      uniqueCodeSelect     : [],
      productPackingOption : null,
      uniqueCodeOption     : null,
      productPackingId     : null,
      warehouseLocationId  : null,
      uniqueCode           : null,
      uniqCodeBefore       : null,
      existingUniqueCode   : [],
      fromWarehouseIdBefore: '',
      toCompanyIdBefore    : '',
      isRestore            : false,
      formChanged          : false,
      qtyPacking           : false,
    }
  },
  async mounted () {
    const app           = this
    // prevent refresh page
    document.querySelector('#external_form').addEventListener('change', function () { app.formChanged = true })
    window.addEventListener('beforeunload', (event) => {
      if (app.formChanged)
        event.returnValue = 'You have unfinished changes!'
    })
    const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')
    $('#company_id').select2({
      placeholder       : 'Select company',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      ajax              : {
        type          : 'GET',
        url           : '/api/company/select',
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
    $('#company_id').on('select2:select', function () {
      const data = app.datatable.rows().data().toArray()
      if (data.length === 0)
        app.toCompanyIdBefore = $(this).val()
    })
    $('#company_id').on('change', function () {
      validator.element($(this))
      const data = app.datatable.rows().data().toArray()
      if (data.length !== 0 && app.isRestore === false) {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Are you sure?',
          text              : 'If you change warehouse, all product will be deleted',
          type              : 'question',
          showCancelButton  : true,
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass : 'btn btn-default',
        }).then(function (result) {
          if (result.value) {
            app.existingUniqueCode    = []
            app.datatable.clear().draw()
          } else {
            app.isRestore = true
            $('#company_id').select2('val', app.toCompanyIdBefore)
            setTimeout(function () { app.isRestore = false }, 500)
          }
        })
        return false
      }
    })

    $('#to_warehouse_id').select2({
      placeholder       : 'Select warehouse',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      ajax              : {
        type          : 'GET',
        url           : '/api/warehouse/select',
        cache         : true,
        processResults: function (data) {
          return {
            results: $.map(data.result, function (object) {
              return {
                id        : object.id,
                text      : object.name,
                country_id: object.country_id,
              }
            }),
          }
        },
      },
      templateSelection: function (data, container) {
        $(data.element).attr('data-country-id', data.country_id)
        return data.text
      },
    })
    $('#to_warehouse_id').on('change', function () {
      validator.element($(this))
    })

    $('#from_warehouse_id').select2({
      placeholder       : 'Select warehouse',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      ajax              : {
        type          : 'GET',
        url           : '/api/warehouse/select',
        cache         : true,
        processResults: function (data) {
          return {
            results: $.map(data.result, function (object) {
              return {
                id        : object.id,
                text      : object.name,
                country_id: object.country_id,
              }
            }),
          }
        },
      },
      templateSelection: function (data, container) {
        $(data.element).attr('data-country-id', data.country_id)
        return data.text
      },
    })
    $('#from_warehouse_id').on('select2:select', function () {
      const data = app.datatable.rows().data().toArray()
      if (data.length === 0)
        app.fromWarehouseIdBefore = $(this).val()
    })
    $('#from_warehouse_id').on('change', function () {
      validator.element($(this))
      const data = app.datatable.rows().data().toArray()
      if (data.length !== 0 && app.isRestore === false) {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Are you sure?',
          text              : 'If you change warehouse, all product will be deleted',
          type              : 'question',
          showCancelButton  : true,
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass : 'btn btn-default',
        }).then(function (result) {
          if (result.value) {
            app.existingUniqueCode    = []
            app.datatable.clear().draw()
            app.fromWarehouseIdBefore = $('#from_warehouse_id').val()
          } else {
            app.isRestore = true
            $('#from_warehouse_id').select2('val', app.fromWarehouseIdBefore)
            setTimeout(function () { app.isRestore = false }, 500)
          }
        })
        return false
      }
    })

    $('#etd, #eta').datetimepicker({
      todayHighlight: true,
      autoclose     : true,
      pickerPosition: 'bottom-left',
      todayBtn      : 'linked',
      format        : 'dd/mm/yyyy hh:ii',
      minuteStep    : 1,
    }).on('changeDate', function (event) {
      validator.element($(this))
    })

    $('#shipment_date, #order_date').datetimepicker({
      todayHighlight: true,
      autoclose     : true,
      pickerPosition: 'bottom-left',
      todayBtn      : 'linked',
      format        : 'dd/mm/yyyy hh:ii',
      minuteStep    : 1,
    })

    const validator = $('#external_form').validate({
      // define validation rules
      rules: {
        order_no         : { required: true },
        company_id       : { required: true },
        from_warehouse_id: { required: true },
        to_warehouse_id  : { required: true },
        eta              : { required: true },
        etd              : { required: true },
        order_date       : { required: true },
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
            text              : 'Please add external product type',
            type              : 'error',
            buttonsStyling    : false,
            confirmButtonClass: 'btn btn-danger',
          })
          return false
        }

        // validate product location
        let valid = true
        for (const key in data) {
          if (data[key].to_warehouse_location_id === '') {
            valid = false
            break
          }
        }
        if (valid === false) {
          // eslint-disable-next-line no-undef
          swal.fire({
            title             : 'Error!',
            text              : 'Insufficient capacity. Please check product location',
            type              : 'error',
            buttonsStyling    : false,
            confirmButtonClass: 'btn btn-danger',
          })
          return false
        }

        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Are you sure?',
          text              : `All data will be saved`,
          type              : 'question',
          showCancelButton  : true,
          buttonsStyling    : false,
          confirmButtonText : 'Save',
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass : 'btn btn-default',
        }).then(function (result) {
          if (result.value) {
            app.addExternal(data)
            app.formChanged = false
          }
        })
        return false
      },
    })

    // form modal
    $('#product_modal').modal({
      backdrop: 'static',
      keyboard: false,
      show    : false,
    })

    $('#product_id').on('change', function () {
      validatorModal.element($(this))
      app.setPackingValue($('#product_id').val())
    })
    $('#product_packing_id').prop('disabled', true)
    $('#unique_code').prop('disabled', true)
    $('#from_warehouse_location_id').prop('disabled', true)
    $('#product_packing_id').on('change', function () {
      validatorModal.element($(this))
      app.setLocationValue($('#product_packing_id').val())
    })

    $('#from_warehouse_location_id').on('change', function () {
      validatorModal.element($(this))
      app.setUniqueValue($('#product_id').val(), $('#product_packing_id').val(), $('#from_warehouse_location_id').val())
    })
    $('#product_modal').on('shown.bs.modal', function () {
      $('#product_id').select2({
        placeholder       : 'Select product',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
          type: 'GET',
          url : function () {
            return `/api/product/select?id_company=${$('#company_id').val()}`
          },
          cache         : true,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                return {
                  id         : object.id,
                  text       : object.name,
                  product_sku: object.sku,
                }
              }),
            }
          },
        },
        templateSelection: function (data, container) {
          $(data.element).attr('data-product-sku', data.product_sku)
          return data.text
        },
      })

      app.productPackingOption = $('#product_packing_id').select2({
        placeholder: 'Select a product packing',
        allowClear : true,
        dataAdapter: customAdapter,
        data       : app.productPackingSelect,
      })

      app.uniqueCodeOption = $('#unique_code').select2({
        placeholder      : 'Select a unique code',
        allowClear       : true,
        dataAdapter      : customAdapter,
        data             : app.uniqueCodeSelect,
        templateSelection: function (data, container) {
          $(data.element).attr('data-qty', data.qty)
          $(data.element).attr('data-batch', data.batch)
          $(data.element).attr('data-expired-date', data.expired_date)
          return data.text
        },
      })
      $('#unique_code').on('change', function () {
        validatorModal.element($(this))
        $('#qty_packing').val($('#unique_code').find(':selected').data('qty'))
        app.qtyPacking = $('#unique_code').find(':selected').data('qty')
        if (app.rowIndex === null)
          $('#qty').val($('#unique_code').find(':selected').data('qty'))
      })

      $('#from_warehouse_location_id').select2({
        placeholder       : 'Select from location',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
          type: 'GET',
          url : function () {
            return `/api/location/select-by-product?id_warehouse=${$('#from_warehouse_id').val()}&product_id=${$('#product_id').val()}&product_packing_id=${$('#product_packing_id').val()}`
          },
          cache         : true,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                return {
                  id  : object.id,
                  text: `${object.name} - Level ${object.level}`,
                }
              }),
            }
          },
        },
      })
    })
    $('#product_modal').on('hidden.bs.modal', function () {
      app.clearForm()
    })

    // datatable
    this.datatable = $('#product_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      columns   : [
        { data: 'product_sku' },
        { data: 'unique_code' },
        { data: 'product_name' },
        { data: 'packing_name' },
        { data: 'qty' },
        { data: 'location_name' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'description' },
        { data: 'actions', responsivePriority: -1 },
      ],
      columnDefs: [
        {
          targets  : 'expired_date',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (data !== '')
              return moment(data).format('DD/MM/Y')
            else
              return data
          },
        },
        {
          targets: 'actions',
          render : function (data, type, full, meta) {
            return `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit">
                      <i class="la la-edit"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">
                      <i class="la la-trash"></i>
                    </a>`
          },
        },
      ],
    })

    // delete datatable row
    $('#product_table').on('click', '.la-trash', function () {
      const rowData = app.datatable.row($(this).parents('tr')).data()
      app.$delete(app.existingUniqueCode, `${rowData.product_id}_${rowData.product_packing_id}_${rowData.from_warehouse_location_id}_${rowData.unique_code}`)
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // edit datatable row
    $('#product_table').on('click', '.la-edit', function () {
      const rowData           = app.datatable.row($(this).parents('tr')).data()
      app.productPackingId    = rowData.product_packing_id
      app.warehouseLocationId = rowData.from_warehouse_location_id
      app.uniqueCode          = rowData.unique_code
      app.uniqCodeBefore      = `${rowData.product_id}_${rowData.product_packing_id}_${rowData.from_warehouse_location_id}_${rowData.unique_code}`
      $('#product_id').val(rowData.product_id).trigger('change')
      $('#description_modal').val(rowData.description)
      $('#qty').val(rowData.qty)
      $('#product_modal').modal('show')
      app.rowIndex            = app.datatable.row($(this).parents('tr')).index()
    })

    // validator modal
    const validatorModal = $('#product_form').validate({
      rules: {
        product_id                : { required: true },
        product_packing_id        : { required: true },
        to_warehouse_location_id  : { required: true },
        from_warehouse_location_id: { required: true },
        unique_code               : { required: true },
        qty                       : {
          required            : true,
          number              : true,
          positiveNumber      : true,
          largerThanQtyPacking: true,
        },
      },
      invalidHandler: function (event, validator) {
        event.preventDefault()
      },
      submitHandler: function (form) {
        app.saveProduct()
        app.formChanged = true
        return false
      },
    })
    $.validator.addMethod('positiveNumber',
      function (value) {
        return Number(value) >= 0
      }, 'Enter a positive number.')
    $.validator.addMethod('largerThanQtyPacking',
      function (value) {
        return Number(value) <= app.qtyPacking
      }, 'Value cannot be greater than product qty (packing).')
  },
  methods: {
    openModal () {
      if ($('#company_id').val() === '' || $('#from_warehouse_id').val() === '') {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Warning!',
          text              : 'Please select company and from warehouse',
          type              : 'warning',
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-warning',
        })
        return false
      }
      $('#product_modal').modal('show')
    },
    async setPackingValue (productId) {
      if (productId) {
        await this.getProductPacking(productId)
        $('#product_packing_id').prop('disabled', false)
        if (this.productPackingId !== null)
          $('#product_packing_id').val(this.productPackingId).trigger('change')
      } else {
        $('#product_packing_id').val(null).trigger('change')
        $('#product_packing_id').prop('disabled', true)
        this.productPackingId = null
      }
    },
    async getProductPacking (idProduct) {
      await this.$store.dispatch('product/getProductDetail', { idProduct: idProduct })
      const productDetail       = this.$store.getters['product/getProductDetail'].result
      let dataTemporary         = Object.assign({})
      this.productPackingSelect = [{ id: '', text: '' }]
      if (productDetail.products_packing !== null) {
        productDetail.products_packing.forEach((value) => {
          dataTemporary = {
            id  : value.id,
            text: value.packing_type_name,
          }
          this.productPackingSelect.push(dataTemporary)
        })
      }
      this.productPackingOption.data('select2').dataAdapter.updateOptions(this.productPackingSelect)
    },
    async setUniqueValue (productId, packingId, locationId) {
      if (productId && packingId && locationId) {
        await this.getUniqueCode(productId, packingId, locationId)
        $('#unique_code').prop('disabled', false)
        if (this.uniqueCode !== null) {
          $('#unique_code').val(this.uniqueCode).trigger('change')
          if (this.rowIndex !== null) {
            const rowData         = this.datatable.row(this.rowIndex).data()
            const newOptionUnique = new Option(rowData.unique_code, rowData.unique_code, true, true)
            newOptionUnique.setAttribute('data-qty', (rowData.qty + rowData.last_stock))
            newOptionUnique.setAttribute('data-batch', rowData.batch)
            newOptionUnique.setAttribute('data-expired-date', rowData.expired_date)
            $('#unique_code').append(newOptionUnique).trigger('change')
          }
        }
      } else {
        $('#unique_code').val(null).trigger('change')
        $('#unique_code').prop('disabled', true)
        this.uniqueCode = null
      }
    },
    async getUniqueCode (productId, packingId, locationId) {
      const app             = this
      await this.$store.dispatch('product/getUniqueCode', {
        productId: productId, packingId: packingId, locationId: locationId,
      })
      const data            = this.$store.getters['product/getUniqueCode'].result
      let dataTemporary     = Object.assign({})
      this.uniqueCodeSelect = [{ id: '', text: '' }]
      if (data !== null) {
        data.forEach((value) => {
          if (app.existingUniqueCode[`${value.product_id}_${value.product_packing_id}_${value.warehouse_location_id}_${value.unique_code}`] === undefined && value.last_stock !== 0) {
            dataTemporary = {
              id          : value.unique_code,
              text        : value.unique_code,
              qty         : value.last_stock,
              expired_date: value.expired_date,
              batch       : value.batch,
            }
            this.uniqueCodeSelect.push(dataTemporary)
          }
        })
      }
      this.uniqueCodeOption.data('select2').dataAdapter.updateOptions(this.uniqueCodeSelect)
    },
    setLocationValue (packingId) {
      if (packingId) {
        $('#from_warehouse_location_id').prop('disabled', false)
        if (this.warehouseLocationId !== null)
          $('#from_warehouse_location_id').val(this.warehouseLocationId).trigger('change')
      } else {
        $('#from_warehouse_location_id').prop('disabled', true)
        $('#from_warehouse_location_id').val(null).trigger('change')
        this.warehouseLocationId = null
      }
    },
    saveProduct () {
      const uniqueCode = $('#unique_code').val()

      const product = {
        product_id                : parseInt($('#product_id').val()),
        product_packing_id        : parseInt($('#product_packing_id').val()),
        from_warehouse_location_id: parseInt($('#from_warehouse_location_id').val()),
        to_warehouse_location_id  : 0,
        unique_code               : $('#unique_code').val(),
        product_name              : $('#product_id option:selected').text(),
        product_sku               : $('#product_id').find(':selected').data('product-sku'),
        packing_name              : $('#product_packing_id option:selected').text(),
        location_name             : $('#from_warehouse_location_id option:selected').text(),
        expired_date              : $('#unique_code').find(':selected').data('expired_date'),
        qty                       : parseInt($('#qty').val()),
        last_stock                : this.qtyPacking - parseInt($('#qty').val()),
        batch                     : $('#unique_code').find(':selected').data('batch').toString(),
        description               : $('#description_modal').val(),
      }
      if (this.rowIndex === null)
        this.datatable.row.add(product).draw().node()
      else
        this.datatable.row(this.rowIndex).data(product).draw()

      this.$delete(this.existingUniqueCode, this.uniqCodeBefore)
      this.existingUniqueCode[`${$('#product_id').val()}_${$('#product_packing_id').val()}_${$('#from_warehouse_location_id').val()}_${uniqueCode}`] = uniqueCode
      $('#product_modal').modal('hide')
    },
    clearForm () {
      this.rowIndex            = null
      $('#description_modal').val(null)
      $('#qty').val('')
      $('#product_id').val(null).trigger('change')
      this.productPackingId    = null
      this.warehouseLocationId = null
      this.uniqueCode          = null
      this.uniqCodeBefore      = null
    },
    setDataPost (data) {
      this.external.company_id = parseInt($('#company_id').val())
      if ($('#etd').val() !== '')
        this.external.etd = moment($('#etd').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#eta').val() !== '')
        this.external.eta = moment($('#eta').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#order_date').val() !== '')
        this.external.order_date = moment($('#order_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#shipment_date').val() !== '')
        this.external.shipment_date = moment($('#shipment_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      this.external.to_country_id     = parseInt($('#to_warehouse_id').find(':selected').data('country-id'))
      this.external.to_warehouse_id   = parseInt($('#to_warehouse_id').val())
      this.external.from_country_id   = parseInt($('#from_warehouse_id').find(':selected').data('country-id'))
      this.external.from_warehouse_id = parseInt($('#from_warehouse_id').val())
      this.external.products          = data
    },
    async addExternal (data) {
      if ($('#external_form').valid()) {
        await this.setDataPost(data)
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('external/addExternal', { data: this.external })
          const data      = this.$store.getters['external/getAddSuccess']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Job external transfer ${data.result.job_no} has been added`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/transfer/external' }, 3000)
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
