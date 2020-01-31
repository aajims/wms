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
                Edit Job Outgoing
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
                <button
                    type="submit"
                    class="btn btn-brand"
                     >
                    <i class="la la-check" />
                    <span class="kt-hidden-mobile">Update</span>
                </button>
            </div>
            </div>
            <div class="kt-portlet__body">
            <div class="form-group row">
              <div class="col-lg-4">
                <label>Order No <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="outgoing.order_no"
                        class="form-control"
                        name="order"
                    />
                    <input type="hidden" v-model="outgoing.type">
                </div>
                <div class="col-lg-4">
                  <label>Company Name <span style="color:red">*</span></label>
                    <select
                        id="company_id"
                        class="form-control kt-select2"
                        name="company_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                  <label>From Warehouse <span style="color:red">*</span></label>
                    <select
                        id="warehouse_from"
                        class="form-control kt-select2"
                        name="warehouse_from"
                        >
                        <option />
                    </select>
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
                    <label>Shipment Date <span style="color:red">*</span></label>
                  </div>
                  <div class="kt-form__control">
                    <div class="input-group date">
                      <input
                        id="shipment_date"
                        name="shipment_date"
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
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label>Order Date <span style="color:red">*</span></label>
                <div class="input-group date">
                    <input type="text" class="form-control" name="order_date" readonly placeholder="Select date" id="order_date" />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-calendar-check-o"></i>
                      </span>
                    </div>
                  </div>
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
                />
               </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Tranport Type <span style="color:red">*</span></label>
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
              <div class="col-lg-6">
                <label>Transport Number <span style="color:red">*</span></label>
                  <input
                      v-model="outgoing.transport_number"
                      type="text"
                      class="form-control"
                      name="number"
                  >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">From Country <span style="color:red">*</span></label>
                  <select
                      id="country_from"
                      class="form-control kt-select2"
                      name="country_from"
                      >
                      <option />
                  </select>
              </div>
              <div class="col-lg-6">
                <label>From</label>
                <input
                    v-model="outgoing.from"
                    type="text"
                    name="from"
                    class="form-control"
                    placeholder="Enter Address "
                >
              </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label for="country">To Country <span style="color:red">*</span></label>
                    <select
                        id="country_to"
                        class="form-control kt-select2"
                        name="country_to"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-6">
                <label>To  <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.to"
                        type="text"
                        class="form-control"
                        name="to"
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
                    >
                </div>
            </div>
            
          <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg" />
            <div class="form-group row">
              <div class="col-lg-3">
                <label>Add Product </label>
                <a
                  href="javascript:;"
                  class="btn btn-bold btn-sm btn-label-brand"
                  style="margin-left: 10px"
                  @click="openModal()"
                >
                  <i class="la la-plus" /> Add
                </a>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-12">
              <table
                id="product_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>SKU Product </th>
                    <th>Packing </th>
                    <th>From Warehouse</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Expired</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
              </table>
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
              <h5
                id="exampleModalLabel"
                class="modal-title"
              >
              Edit Product
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
                <div class="col-lg-4">
                  <label>Product  <span style="color:red">*</span></label>
                   <select
                        id="product_id"
                        class="form-control kt-select2"
                        name="product_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                  <label>Packing  <span style="color:red">*</span></label>
                  <select
                        id="product_packing_id"
                        class="form-control kt-select2"
                        name="product_packing_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                  <label>Warehouse  <span style="color:red">*</span></label>
                      <select
                          id="to_warehouse_location_id"
                          class="form-control kt-select2"
                          name="to_warehouse_location_id"
                          >
                          <option />
                      </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-3">
                  <label>Batch  <span style="color:red">*</span></label>
                    <input
                      type="text"
                      name="batch"
                      id="batch"
                      class="form-control"
                      placeholder="Enter Batch"
                    >
                </div>
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
                  <label>Qty  <span style="color:red">*</span></label>
                      <input
                      type="text"
                      id="qty"
                      name="qty"
                      class="form-control"
                      placeholder="Enter Qty"
                  >
                </div>
                <div class="col-lg-3">
                  <label>Expired Date<span style="color:red">*</span></label>
                    <div class="input-group date">
                      <input type="text" name="expired_date" class="form-control" readonly placeholder="Select date" id="expired_date" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="la la-calendar-check-o"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>Description<span style="color:red">*</span></label>
                    <input
                      type="text"
                      name="description_modal"
                      id="description_modal"
                      class="form-control"
                      placeholder="Enter Description"
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
import moment from 'moment'
import { TRANSPORT_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      rowIndex     : null,
      emptyLocation: false,
      countries    : [],
       outgoing  : {
            company_id  : null,
            type        : 2,
            order_date    : null,
            etd    : null,
            eta    : null,
            shipment_date    : null,
            order_no        : null,
            transport_type    : null,
            transport_number    : null,
            flight           : null,
            from            : null,
            from_country_id    : null,
            from_warehouse_id    : null,
            to              : null,
            to_country_id    : null,
            to_warehouse_id    : null,
            custom_permit    : null,
            cargo_insurance    : null,
            description    : null,
            products      : []
        },
      productDetail : null,
      productPackingSelect: [],
      productPackingOption: null,
      productPackingId    : null,
      remainingLocation   : [],
      outgoingNo          : '',
      company_name        : '',
      warehouse_name      : '',
      rowId               : '',
    }
  },
  async mounted () {
    const app           = this
    const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')
    try {
      await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: atob(this.$route.params.id) })
        const outgoingDetail    = this.$store.getters['outgoing/getOutgoingDetail'].result
        this.outgoing.company_id     = outgoingDetail.company_id
        this.outgoing.order_date     = outgoingDetail.order_date
        this.outgoing.order_no        = outgoingDetail.order_no
        this.outgoing.transport_type     = outgoingDetail.transport_type
        this.outgoing.transport_number     = outgoingDetail.transport_number
        this.outgoing.from_warehouse_id     = outgoingDetail.from_warehouse_id
        this.outgoing.from_country_id     = outgoingDetail.from_country_id
        this.outgoing.to_country_id     = outgoingDetail.to_country_id
        this.outgoing.custom_permit           = outgoingDetail.custom_permit
        this.outgoing.cargo_insurance          = outgoingDetail.cargo_insurance
        this.outgoing.from              = outgoingDetail.from
        this.outgoing.to               = outgoingDetail.to
        this.outgoing.description           = outgoingDetail.description
        this.company_name     = outgoingDetail.company_name
        this.warehouse_name     = outgoingDetail.from_warehouse_name
        this.outgoing.products  = outgoingDetail.products
        
      if (outgoingDetail.etd !== '')
        $('#etd').val(moment(outgoingDetail.etd).format('DD/MM/YYYY HH:mm'))
      if (outgoingDetail.eta !== '')
        $('#eta').val(moment(outgoingDetail.eta).format('DD/MM/YYYY HH:mm'))
      if (outgoingDetail.order_date !== '')
        $('#order_date').val(moment(outgoingDetail.order_date).format('DD/MM/YYYY HH:mm'))
      if (outgoingDetail.shipment_date !== '')
        $('#shipment_date').val(moment(outgoingDetail.shipment_date).format('DD/MM/YYYY HH:mm'))

      // set usage existing
      const holder = {}
      this.outgoing.products.forEach(function (value) {
        // eslint-disable-next-line no-prototype-builtins
        if (holder.hasOwnProperty(value.to_location_id))
          holder[value.to_location_id] = holder[value.to_location_id] + 1
        else
          holder[value.to_location_id] = 1
      })
      for (const property in holder)
        this.remainingLocation.push({ location_id: parseInt(property), usage: holder[property] })
    } catch (error) {

    }

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
    const newOptionCompany = new Option(this.company_name, this.outgoing.company_id, true, true)
    $('#company_id').append(newOptionCompany).trigger('change')
    $('#company_id').on('change', function () {
      validator.element($(this))
    })

    $('#warehouse_from').select2({
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
                id  : object.id,
                text: object.name,
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
    const newOptionWarehouse = new Option(this.warehouse_name, this.outgoing.from_warehouse_id, true, true)
    $('#warehouse_from').append(newOptionWarehouse).trigger('change')
    $('#warehouse_from').on('change', function () {
      validator.element($(this))
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
    $('#country_from').select2({
      placeholder: 'Select a country',
      allowClear : true,
      data       : this.countries,
    })
    $('#country_from').val(this.outgoing.from_country_id).trigger('change')

    $('#country_to').select2({
      placeholder: 'Select a country',
      allowClear : true,
      data       : this.countries,
    })
    $('#country_to').val(this.outgoing.to_country_id).trigger('change')

    $('#transport_type').select2({
      placeholder: 'Select a transport type',
      allowClear : true,
      data       : TRANSPORT_TYPE,
    })
    $('#transport_type').val(this.outgoing.transport_type).trigger('change')
    $('#transport_type').on('change', function () {
      app.outgoing.transport_type = $(this).val()
    })

    const validator = $('#outgoing_form').validate({
      // define validation rules
      rules: {
        order_no       : { required: true },
        company_id     : { required: true },
        warehouse_from : { required: true },
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
            text              : 'Please add outgoing product type',
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
        app.editOutgoing(data)
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
            return `/api/location/select?id_warehouse=${$('#warehouse_from').val()}`
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
      data      : this.outgoing.products,
      columns   : [
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'from_warehouse_location_name' },
        { data: 'batch' },
        { data: 'qty' },
        { data: 'expired_date' },
        { data: 'description' },
        { data: 'actions', responsivePriority: -1 },
      ],
      drawCallback: function () {
        $('.popoverButton').popover({
          title    : 'Insufficient Capacity',
          html     : true,
          trigger  : 'manual',
          placement: 'left',
          content  : function () {
            return 'The location is <span class="kt-badge kt-badge--danger kt-badge--inline">FULL</span> Please select another location.'
          },
        })
      },
      columnDefs: [
        {
          targets  : 3,
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (full.to_warehouse_location_id === '') {
              return `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md popoverButton">
                        <i style="color: red" class="fa flaticon-warning"></i>
                      </a>`
            } else
              return data
          },
        },
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
    // add popover
    $('#product_table').on('mouseover', '.flaticon-warning', function () {
      $($(this).parents('.popoverButton')).popover('show')
    })
    $('#product_table').on('mouseleave', '.flaticon-warning', function () {
      $($(this).parents('.popoverButton')).popover('hide')
    })

    // delete datatable row
    $('#product_table').on('click', '.la-trash', function () {
      const rowData = app.datatable.row($(this).parents('tr')).data()
      app.remainingLocation.forEach((value, key) => {
        if (parseInt(value.location_id) === rowData.from_warehouse_location_id)
          app.remainingLocation[key].usage = app.remainingLocation[key].usage - 1
      })
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // edit datatable row
    $('#product_table').on('click', '.la-edit', function () {
      app.rowIndex         = app.datatable.row($(this).parents('tr')).index()
      const rowData        = app.datatable.row($(this).parents('tr')).data()
      app.productPackingId = rowData.product_packing_id
      app.rowId            = rowData.id
      if (rowData.from_warehouse_location_id === '')
        app.emptyLocation = true

      const newOptionProduct  = new Option(rowData.product_name, rowData.product_id, true, true)
      $('#product_id').append(newOptionProduct).trigger('change')
      $('#description_modal').val(rowData.description)
      $('#qty').val(rowData.qty)

      const newOptionLocation = new Option(rowData.from_warehouse_location_name, rowData.from_warehouse_location_id, true, true)
      $('#to_warehouse_location_id').append(newOptionLocation).trigger('change')
      if (rowData.expired_date !== '')
        $('#expired_date').val(moment(rowData.expired_date).format('DD/MM/Y'))
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
      if ($('#company_id').val() === '' || $('#warehouse_from').val() === '') {
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
      let locationId    = parseInt($('#to_warehouse_location_id').val())
      let locationName  = $('#to_warehouse_location_id').find(':selected').data('location-name')
      const capacityMax = $('#to_warehouse_location_id').find(':selected').data('capacity-max')
      let usage         = $('#to_warehouse_location_id').find(':selected').data('usage')
      let product       = {}
      let qtyPerRow     = qtyMax
      const location    = locationId

      // add existing usage
      this.remainingLocation.forEach((value) => {
        if (parseInt(value.location_id) === location)
          usage = usage + value.usage
      })

      for (let i = 0; i < totalRow; i++) {
        if (i !== 0 && i === (totalRow - 1) && (qty % qtyMax) !== 0)
          qtyPerRow = qty % qtyMax
        else if (totalRow === 1)
          qtyPerRow = qty

        // location full
        if (
          this.rowIndex === null
            || (this.rowIndex !== null && i !== 0 && usage !== 0)
            || (this.rowIndex !== null && this.emptyLocation === true)
        )
          usage = usage + 1
        if (usage > capacityMax) {
          locationId   = ''
          locationName = ''
        }

        product = {
          id                      : this.rowId,
          product_id              : parseInt($('#product_id').val()),
          product_packing_id      : parseInt($('#product_packing_id').val()),
          to_warehouse_location_id: locationId,
          product_name            : $('#product_id option:selected').text(),
          product_packing_name    : $('#product_packing_id').find(':selected').data('packing-name'),
          from_warehouse_location_name        : locationName,
          expired_date            : $('#expired_date').val() !== '' ? moment($('#expired_date').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss') : '',
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

      // add new usage to existing usage
      if (usage > capacityMax)
        usage = capacityMax
      let found = false
      this.remainingLocation.forEach((value, key) => {
        if (parseInt(value.location_id) === location) {
          found                             = true
          this.remainingLocation[key].usage = usage
        }
      })
      if (found === false)
        this.remainingLocation.push({ location_id: location, usage: usage })
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
      this.emptyLocation    = false
      this.rowId            = ''
    },
    setDataPost (data) {
      this.outgoing.company_id = parseInt($('#company_id').val())
      if ($('#etd').val() !== '')
        this.outgoing.etd = moment($('#etd').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#eta').val() !== '')
        this.outgoing.eta = moment($('#eta').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#order_date').val() !== '')
        this.outgoing.order_date = moment($('#order_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#shipment_date').val() !== '')
        this.outgoing.shipment_date = moment($('#shipment_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      this.outgoing.transport_type = $('#transport_type').val()
      if ($('#country_from').val() !== '')
      this.outgoing.from_country_id = parseInt($('#country_from').val())
      this.outgoing.to_country_id   = parseInt($('#country_to').val())
      this.outgoing.from_warehouse_id = parseInt($('#warehouse_from').val())
      this.outgoing.products        = data
      console.log(this.outgoing)
    },
    async editOutgoing (data) {
      if ($('#outgoing_form').valid()) {
        await this.setDataPost(data)
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('outgoing/editOutgoing', { idOutgoing: atob(this.$route.params.id), data: this.outgoing })
          const data      = this.$store.getters['outgoing/getAddSuccess']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Job outgoing has been Update`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/outgoing' }, 3000)
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