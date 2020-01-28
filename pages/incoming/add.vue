<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="incoming_form"
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
                Add Incoming Stock
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                :href="`/incoming/`"
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
                  v-model="incoming.order_no"
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
                  <label>Order Date</label>
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
                </div>
              </div>
            </div>
            <div class="form-group row">
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
            </div>
            <div class="form-group row">
              <div class="col-lg-8">
                <label for="description">Description</label>
                <textarea
                  v-model="incoming.description"
                  class="form-control"
                  rows="3"
                />
              </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
            <div class="form-group row">
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>Country To <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="to_country_id"
                    class="form-control kt-select2"
                    name="to_country_id"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>Country From</label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="from_country_id"
                    class="form-control kt-select2"
                    name="from_country_id"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div class="col-lg-4">
                <label>Cargo Insurance</label>
                <input
                  v-model="incoming.cargo_insurance"
                  type="text"
                  class="form-control"
                  name="cargo_insurance"
                  placeholder="Enter cargo insurance"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>Warehouse To <span style="color:red">*</span></label>
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
                  <label>Warehouse From</label>
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
                <label>Custom Permit</label>
                <input
                  v-model="incoming.custom_permit"
                  type="text"
                  class="form-control"
                  name="custom_permit"
                  placeholder="Enter custom permit"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label>Address To <span style="color:red">*</span></label>
                <textarea
                  id="to"
                  v-model="incoming.to"
                  name="to"
                  class="form-control"
                  rows="3"
                />
              </div>
              <div class="col-lg-4">
                <label>Address From</label>
                <textarea
                  id="from"
                  v-model="incoming.from"
                  name="from"
                  class="form-control"
                  rows="3"
                />
              </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
            <div class="form-group row">
              <div class="col-lg-4">
                <div class="kt-form__label">
                  <label>Transport Type <span style="color:red">*</span></label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="transport_type"
                    class="form-control kt-select2"
                    name="transport_type"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div
                v-if="incoming.transport_type === 'truck'"
                class="col-lg-4"
              >
                <label>Transport Number</label>
                <input
                  v-model="incoming.transport_number"
                  type="text"
                  class="form-control"
                  name="transport_number"
                  placeholder="Enter transport number"
                >
              </div>
              <div
                v-if="incoming.transport_type === 'air-freight'"
                class="col-lg-4"
              >
                <label>Flight</label>
                <input
                  v-model="incoming.flight"
                  type="text"
                  class="form-control"
                  name="flight"
                  placeholder="Enter flight"
                >
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
              <div class="col-lg-10">
                <!--begin: Datatable -->
                <table
                  id="product_table"
                  class="table table-hover table-checkable"
                >
                  <thead>
                    <tr>
                      <th>SKU - Product</th>
                      <th>Packing</th>
                      <th>Qty</th>
                      <th>Location</th>
                      <th>Batch</th>
                      <th>Expired</th>
                      <th>Description</th>
                      <th>Actions</th>
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
                <div class="col-lg-3">
                  <label>Quantity Max</label>
                  <input
                    id="qty_max"
                    type="text"
                    class="form-control"
                    disabled="disabled"
                  >
                </div>
                <div class="col-lg-3">
                  <label>Quantity <span style="color:red">*</span></label>
                  <input
                    id="qty"
                    name="qty"
                    type="text"
                    class="form-control"
                  >
                </div>
                <div class="col-lg-6">
                  <div class="kt-form__label">
                    <label>Expired Date</label>
                  </div>
                  <div class="kt-form__control">
                    <div class="input-group date">
                      <input
                        id="expired_date"
                        type="text"
                        class="form-control"
                        readonly
                        placeholder="Select expired date"
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
                <div class="col-lg-6">
                  <label>Batch <span style="color:red">*</span></label>
                  <input
                    id="batch"
                    name="batch"
                    type="text"
                    class="form-control"
                  >
                </div>
                <div class="col-lg-6">
                  <label>Location <span style="color:red">*</span></label>
                  <select
                    id="to_warehouse_location_id"
                    name="to_warehouse_location_id"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
                </div>
              </div>
              <div class="form-group row">
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
import { TRANSPORT_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      display  : 'none',
      rowIndex : null,
      countries: [],
      incoming : {
        company_id       : 0,
        order_no         : '',
        type             : 1,
        etd              : '',
        eta              : '',
        order_date       : '',
        transport_type   : '',
        transport_number : '',
        flight           : '',
        from             : '',
        from_country_id  : 0,
        to_country_id    : 0,
        from_warehouse_id: 0,
        to_warehouse_id  : 0,
        custom_permit    : '',
        cargo_insurance  : '',
        description      : '',
        products         : [],
      },
      datatable           : [],
      productPackingSelect: [],
      productPackingOption: null,
      productPackingId    : null,
    }
  },
  async mounted () {
    const app           = this
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
    $('#company_id').on('change', function () {
      validator.element($(this))
    })

    $('#to_warehouse_id').select2({
      placeholder       : 'Select warehouse',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      disabled          : true,
      ajax              : {
        type: 'GET',
        url : function () {
          return `/api/warehouse/select?id_country=${$('#to_country_id').val()}`
        },
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
    $('#to_warehouse_id').on('change', function () {
      validator.element($(this))
    })
    $('#from_warehouse_id').select2({
      placeholder       : 'Select warehouse',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      disabled          : true,
      ajax              : {
        type: 'GET',
        url : function () {
          return `/api/warehouse/select?id_country=${$('#from_country_id').val()}`
        },
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

    await this.$store.dispatch('region/getCountries')
    this.countries = this.$store.getters['region/getCountries']
    $('#to_country_id').select2({
      placeholder: 'Select a country',
      allowClear : true,
      data       : this.countries,
    })
    $('#to_country_id').on('change', function () {
      validator.element($(this))
      if ($('#to_country_id').val())
        $('#to_warehouse_id').prop('disabled', false)
      else
        $('#to_warehouse_id').prop('disabled', true)
    })

    $('#from_country_id').select2({
      placeholder: 'Select a country',
      allowClear : true,
      data       : this.countries,
    })
    $('#from_country_id').on('change', function () {
      validator.element($(this))
      if ($('#from_country_id').val())
        $('#from_warehouse_id').prop('disabled', false)
      else
        $('#from_warehouse_id').prop('disabled', true)
    })

    $('#transport_type').select2({
      placeholder: 'Select a transport type',
      allowClear : true,
      data       : TRANSPORT_TYPE,
    })
    $('#transport_type').on('change', function () {
      app.incoming.transport_type = $(this).val()
    })

    const validator = $('#incoming_form').validate({
      // define validation rules
      rules: {
        order_no       : { required: true },
        company_id     : { required: true },
        to_country_id  : { required: true },
        to             : { required: true },
        to_warehouse_id: { required: true },
        eta            : { required: true },
        etd            : { required: true },
        transport_type : { required: true },
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
            text              : 'Please add incoming product type',
            type              : 'error',
            buttonsStyling    : false,
            confirmButtonClass: 'btn btn-danger',
          })
          return false
        }
        app.addIncoming(data)
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
          // url           : `/api/product/select?id_company=1`,
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

      app.productPackingOption = $('#product_packing_id').select2({
        placeholder      : 'Select a product packing',
        allowClear       : true,
        dataAdapter      : customAdapter,
        data             : app.productPackingSelect,
        templateSelection: function (data, container) {
          $(data.element).attr('data-packing-name', data.packing_name)
          $(data.element).attr('data-qty-max', data.qty_max)
          return data.text
        },
      })
      $('#product_packing_id').on('change', function () {
        validatorModal.element($(this))
        $('#qty_max').val($('#product_packing_id').find(':selected').data('qty-max'))
      })

      $('#expired_date').datetimepicker({
        todayHighlight: true,
        autoclose     : true,
        startView     : 2,
        minView       : 2,
        todayBtn      : 'linked',
        pickerPosition: 'bottom-left',
        format        : 'dd/mm/yyyy',
      })

      $('#to_warehouse_location_id').select2({
        placeholder       : 'Select location',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
          type: 'GET',
          url : function () {
            return `/api/location/select?id_warehouse=${$('#to_warehouse_id').val()}`
          },
          // url           : `/api/location/select?id_warehouse=2`,
          cache         : true,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                if (object.usage !== object.capacity_max) {
                  return {
                    id           : object.id,
                    text         : `${object.name} - Level ${object.level} (${object.usage} / ${object.capacity_max})`,
                    location_name: object.name,
                    usage        : object.usage,
                    capacity_max : object.capacity_max,
                  }
                }
              }),
            }
          },
        },
        templateSelection: function (data, container) {
          $(data.element).attr('data-location-name', data.location_name)
          $(data.element).attr('data-usage', data.usage)
          $(data.element).attr('data-capacity-max', data.capacity_max)
          return data.text
        },
      })
      $('#to_warehouse_location_id').on('change', function () {
        validatorModal.element($(this))
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
        { data: 'product_name' },
        { data: 'packing_name' },
        { data: 'qty' },
        { data: 'location_name' },
        { data: 'batch' },
        { data: 'expired' },
        { data: 'description' },
        { data: 'actions', responsivePriority: -1 },
      ],
      columnDefs: [
        {
          targets  : -3,
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (data !== '')
              return moment(data).format('DD/MM/Y')
            else
              return data
          },
        },
        {
          targets: -1,
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
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // edit datatable row
    $('#product_table').on('click', '.la-edit', function () {
      app.rowIndex         = app.datatable.row($(this).parents('tr')).index()
      const rowData        = app.datatable.row($(this).parents('tr')).data()
      app.productPackingId = rowData.product_packing_id
      $('#product_id').val(rowData.product_id).trigger('change')
      $('#description_modal').val(rowData.description)
      $('#qty').val(rowData.qty)
      $('#to_warehouse_location_id').val(rowData.to_warehouse_location_id).trigger('change')
      $('#expired_date').val(moment(rowData.expired).format('DD/MM/Y'))
      $('#batch').val(rowData.batch)
      $('#product_modal').modal('show')
    })

    // validator modal
    const validatorModal = $('#product_form').validate({
      rules: {
        product_id              : { required: true },
        product_packing_id      : { required: true },
        to_warehouse_location_id: { required: true },
        batch                   : { required: true },
        qty                     : { required: true, number: true },
      },
      invalidHandler: function (event, validator) {
        event.preventDefault()
      },
      submitHandler: function (form) {
        app.saveProduct()
        return false
      },
    })
  },
  methods: {
    openModal () {
      if ($('#company_id').val() === '' || $('#to_warehouse_id').val() === '') {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Warning!',
          text              : 'Please select company and warehouse',
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
            id          : value.id,
            text        : `${value.packing_type_name} / Qty Max: ${value.qty_max}`,
            packing_name: value.packing_type_name,
            qty_max     : value.qty_max,
          }
          this.productPackingSelect.push(dataTemporary)
        })
      }
      this.productPackingOption.data('select2').dataAdapter.updateOptions(this.productPackingSelect)
    },
    saveProduct () {
      const app      = this
      const qtyMax   = parseInt($('#qty_max').val())
      const qty      = parseInt($('#qty').val())
      const totalRow = Math.floor((qty + qtyMax - 1) / qtyMax)
      if (totalRow > 1) {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Are you sure?',
          text              : `Quantity is larger than maximum quantity. Product will be split to ${totalRow} rows`,
          type              : 'question',
          showCancelButton  : true,
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass : 'btn btn-default',
        }).then(function (result) {
          if (result.value)
            app.execSaveProduct(qtyMax, qty, totalRow)
        })
        return false
      }
      app.execSaveProduct(qtyMax, qty, totalRow)
    },
    async execSaveProduct (qtyMax, qty, totalRow) {
      let product   = {}
      let qtyPerRow = 0
      for (let i = 0; i < totalRow; i++) {
        if (i !== 0 && i === (totalRow - 1))
          qtyPerRow = qty % qtyMax
        else if (totalRow === 1)
          qtyPerRow = qty
        else
          qtyPerRow = qtyMax
        product = {
          product_id              : parseInt($('#product_id').val()),
          product_packing_id      : parseInt($('#product_packing_id').val()),
          to_warehouse_location_id: parseInt($('#to_warehouse_location_id').val()),
          product_name            : $('#product_id option:selected').text(),
          packing_name            : $('#product_packing_id').find(':selected').data('packing-name'),
          location_name           : $('#to_warehouse_location_id').find(':selected').data('location-name'),
          expired                 : moment($('#expired_date').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss'),
          qty                     : qtyPerRow,
          batch                   : $('#batch').val(),
          description             : $('#description_modal').val(),
        }
        if (this.rowIndex === null)
          this.datatable.row.add(product).draw()
        else {
          if (i === 0)
            this.datatable.row(this.rowIndex).data(product).draw()
          else
            this.datatable.row.add(product).draw()
        }
      }
      $('#product_modal').modal('hide')
    },
    clearForm () {
      $('#description_modal').val(null)
      $('#qty').val('')
      $('#product_id').val(null).trigger('change')
      $('#to_warehouse_location_id').val(null).trigger('change')
      $('#product_packing_id').val(null).trigger('change')
      $('#expired_date').val('')
      $('#batch').val('')
      this.productPackingId = null
      this.rowIndex         = null
    },
    setDataPost (data) {
      this.incoming.company_id = parseInt($('#company_id').val())
      if ($('#etd').val() !== '')
        this.incoming.etd = moment($('#etd').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#eta').val() !== '')
        this.incoming.eta = moment($('#eta').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#order_date').val() !== '')
        this.incoming.order_date = moment($('#order_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#shipment_date').val() !== '')
        this.incoming.shipment_date = moment($('#shipment_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      this.incoming.transport_type = $('#transport_type').val()
      if ($('#from_country_id').val() !== '')
        this.incoming.from_country_id = parseInt($('#from_country_id').val())
      if ($('#from_warehouse_id').val() !== '')
        this.incoming.from_warehouse_id = parseInt($('#from_warehouse_id').val())
      this.incoming.to_country_id   = parseInt($('#to_country_id').val())
      this.incoming.to_warehouse_id = parseInt($('#to_warehouse_id').val())
      this.incoming.products        = data
    },
    async addIncoming (data) {
      if ($('#incoming_form').valid()) {
        await this.setDataPost(data)
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('incoming/addIncoming', { data: this.incoming })
          const data      = this.$store.getters['incoming/getAddSuccess']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Incoming ${data.result.name} has been added`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/incoming' }, 3000)
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
