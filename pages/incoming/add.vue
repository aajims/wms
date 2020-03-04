<style scoped>
.col-lg-4 {
  margin-top: 20px;
}
</style>
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
                  <label>From Country</label>
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
                <label>From</label>
                <textarea
                  id="from"
                  v-model="incoming.from"
                  name="from"
                  class="form-control"
                  rows="3"
                />
              </div>
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
              <div class="col-lg-4">
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
                      <th>Product</th>
                      <th>Packing</th>
                      <th>Quantity</th>
                      <th class="location_name">
                        Location
                      </th>
                      <th>Batch</th>
                      <th class="expired_date">
                        Expired
                      </th>
                      <th>UOM</th>
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
                <div class="col-lg-3">
                  <label>Qty Max (Packing)</label>
                  <input
                    id="qty_max"
                    type="text"
                    class="form-control"
                    disabled="disabled"
                  >
                </div>
                <div class="col-lg-3">
                  <label>Product Qty <span style="color:red">*</span></label>
                  <input
                    id="qty"
                    name="qty"
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
                <div class="col-lg-3">
                  <label>Capacity</label>
                  <input
                    id="capacity"
                    type="text"
                    class="form-control"
                    disabled="disabled"
                  >
                </div>
                <div class="col-lg-3">
                  <label>Batch <span style="color:red">*</span></label>
                  <input
                    id="batch"
                    name="batch"
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
      rowIndex : null,
      countries: [],
      incoming : {
        company_id      : 0,
        order_no        : '',
        type            : 1,
        etd             : '',
        eta             : '',
        order_date      : '',
        shipment_date   : '',
        transport_type  : '',
        transport_number: '',
        flight          : '',
        from            : '',
        to              : 'n/a',
        from_country_id : 0,
        to_country_id   : 0,
        to_warehouse_id : 0,
        custom_permit   : '',
        cargo_insurance : '',
        description     : '',
        products        : [],
      },
      datatable           : [],
      productPackingSelect: [],
      productPackingOption: null,
      productPackingId    : null,
      remainingLocation   : [],
      locationIdBefore    : '',
      locationIdFirst     : '',
      toWarehouseIdBefore : '',
      toCompanyIdBefore   : '',
      isRestore           : false,
      formChanged         : false,
      isSave              : false,
    }
  },
  async mounted () {
    const app           = this
    // prevent refresh page
    document.querySelector('#incoming_form').addEventListener('change', function () { app.formChanged = true })
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
            app.remainingLocation = []
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
    $('#to_warehouse_id').on('select2:select', function () {
      const data = app.datatable.rows().data().toArray()
      if (data.length === 0)
        app.toWarehouseIdBefore = $(this).val()
    })
    $('#to_warehouse_id').on('change', function () {
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
            app.remainingLocation   = []
            app.datatable.clear().draw()
            app.toWarehouseIdBefore = $('#to_warehouse_id').val()
          } else {
            app.isRestore = true
            $('#to_warehouse_id').select2('val', app.toWarehouseIdBefore)
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

    await this.$store.dispatch('region/getCountries')
    this.countries = this.$store.getters['region/getCountries']
    $('#from_country_id').select2({
      placeholder: 'Select a country',
      allowClear : true,
      data       : this.countries,
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
        to_warehouse_id: { required: true },
        eta            : { required: true },
        etd            : { required: true },
        order_date     : { required: true },
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
            app.addIncoming(data)
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
    $('#to_warehouse_location_id').on('change', function () {
      validatorModal.element($(this))
      if ($(this).val() !== '') {
        setTimeout(function () {
          const capacity =  $('#to_warehouse_location_id').find(':selected').data('capacity')
          let usage      = $('#to_warehouse_location_id').find(':selected').data('usage')
          if (app.locationIdBefore !== '')
            app.deleteRemainingUsage(app.locationIdBefore)
          app.locationIdBefore = parseInt($('#to_warehouse_location_id').val())
          app.addRemainingUsage(app.locationIdBefore, usage + 1)
          app.remainingLocation.forEach((value, key) => {
            if (parseInt(value.location_id) === parseInt(app.locationIdBefore))
              usage = value.usage
          })
          $('#capacity').val(`${usage} / ${capacity}`)
        }, 100)
      }
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
          cache         : true,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                return {
                  id         : object.id,
                  text       : `${object.sku} / ${object.name}`,
                  name       : object.name,
                  product_sku: object.sku,
                }
              }),
            }
          },
        },
        templateSelection: function (data, container) {
          $(data.element).attr('data-product-name', data.name)
          $(data.element).attr('data-product-sku', data.product_sku)
          const textArray = data.text.split('/')
          if (textArray[1] === undefined)
            return data.text
          return textArray[1]
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
          $(data.element).attr('data-uom', data.uom)
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
          cache         : true,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                let usageRemaining = object.usage
                app.remainingLocation.forEach((value, key) => {
                  if (parseInt(value.location_id) === parseInt(object.id))
                    usageRemaining = value.usage
                })
                if (object.usage !== object.capacity && usageRemaining < object.capacity) {
                  return {
                    id            : object.id,
                    text          : `${object.name} - Level ${object.level} | (${usageRemaining} / ${object.capacity})`,
                    location_name : `${object.name}`,
                    location_level: `${object.level}`,
                    usage         : object.usage,
                    capacity      : object.capacity,
                  }
                }
              }),
            }
          },
        },
        templateSelection: function (data, container) {
          $(data.element).attr('data-location-name', data.location_name)
          $(data.element).attr('data-location-level', data.location_level)
          $(data.element).attr('data-usage', data.usage)
          $(data.element).attr('data-capacity', data.capacity)
          const textArray = data.text.split('|')
          if (textArray[1] === undefined)
            return data.text
          return textArray[0]
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
        { data: 'product_name' },
        { data: 'packing_name' },
        { data: 'qty' },
        { data: 'location_name' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'product_packing_uom' },
        { data: 'description' },
        { data: 'actions', responsivePriority: -1 },
      ],
      drawCallback: function () {
        $('.popoverButton').popover({
          title    : 'Insufficient Capacity',
          html     : true,
          trigger  : 'manual',
          placement: 'right',
          content  : function () {
            return 'The location is <span class="kt-badge kt-badge--danger kt-badge--inline">FULL</span> Please select another location.'
          },
        })
      },
      columnDefs: [
        {
          targets: 'location_name',
          render : function (data, type, full, meta) {
            if (full.to_warehouse_location_id === '') {
              return `<span style="color: orange">${data}
                        <sup>
                          <a href="javascript:;" class="popoverButton">
                            <i style="color: red" class="fa flaticon2-information"></i>
                          </a>
                        </sup>
                      </span>`
            } else
              return data
          },
        },
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

    // add popover
    $('#product_table').on('mouseover', '.flaticon2-information', function () {
      $($(this).parents('.popoverButton')).popover('show')
    })
    $('#product_table').on('mouseleave', '.flaticon2-information', function () {
      $($(this).parents('.popoverButton')).popover('hide')
    })

    // delete datatable row
    $('#product_table').on('click', '.la-trash', function () {
      const rowData = app.datatable.row($(this).parents('tr')).data()
      app.deleteRemainingUsage(rowData.to_warehouse_location_id)
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // edit datatable row
    $('#product_table').on('click', '.la-edit', function () {
      const rowData        = app.datatable.row($(this).parents('tr')).data()
      app.productPackingId = rowData.product_packing_id
      app.locationIdBefore = rowData.to_warehouse_location_id
      app.locationIdFirst  = rowData.to_warehouse_location_id
      $('#product_id').val(rowData.product_id).trigger('change')
      $('#description_modal').val(rowData.description)
      $('#qty').val(rowData.qty)
      $('#to_warehouse_location_id').val(rowData.to_warehouse_location_id).trigger('change')
      if (rowData.expired_date !== '')
        $('#expired_date').val(moment(rowData.expired_date).format('DD/MM/Y'))
      $('#batch').val(rowData.batch)

      let usageRemaining = rowData.to_warehouse_location_usage
      app.remainingLocation.forEach((value, key) => {
        if (parseInt(value.location_id) === parseInt(rowData.to_warehouse_location_id))
          usageRemaining = value.usage
      })
      $('#capacity').val(`${usageRemaining} / ${rowData.to_warehouse_location_capacity}`)

      $('#product_modal').modal('show')
      app.rowIndex  = app.datatable.row($(this).parents('tr')).index()
    })

    // validator modal
    const validatorModal = $('#product_form').validate({
      rules: {
        product_id              : { required: true },
        product_packing_id      : { required: true },
        to_warehouse_location_id: { required: true },
        batch                   : { required: true },
        qty                     : {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
      },
      invalidHandler: function (event, validator) {
        event.preventDefault()
      },
      submitHandler: function (form) {
        app.isSave      = true
        app.saveProduct()
        app.formChanged = true
        return false
      },
    })
    $.validator.addMethod('positiveNumber',
      function (value) {
        return Number(value) >= 0
      }, 'Enter a positive number.')
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
            text        : value.packing_type_name,
            packing_name: value.packing_type_name,
            qty_max     : value.qty_max,
            uom         : value.uom,
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
      let locationId = parseInt($('#to_warehouse_location_id').val())
      const capacity = $('#to_warehouse_location_id').find(':selected').data('capacity')
      let usage      = $('#to_warehouse_location_id').find(':selected').data('usage')
      let product    = {}
      let qtyPerRow  = qtyMax
      const location = locationId

      // -1 usage location id before
      if (this.locationIdBefore !== '')
        this.deleteRemainingUsage(this.locationIdBefore)

      // add existing usage
      this.remainingLocation.forEach((value) => {
        if (parseInt(value.location_id) === location)
          usage = value.usage
      })

      for (let i = 0; i < totalRow; i++) {
        if (i !== 0 && i === (totalRow - 1) && (qty % qtyMax) !== 0)
          qtyPerRow = qty % qtyMax
        else if (totalRow === 1)
          qtyPerRow = qty

        usage = usage + 1
        if (usage > capacity)
          locationId   = ''

        product = {
          product_id              : parseInt($('#product_id').val()),
          product_packing_id      : parseInt($('#product_packing_id').val()),
          to_warehouse_location_id: locationId,
          product_name            : $('#product_id').find(':selected').data('product-name'),
          product_sku             : $('#product_id').find(':selected').data('product-sku'),
          packing_name            : $('#product_packing_id').find(':selected').data('packing-name'),
          location_name           : $('#to_warehouse_location_id').find(':selected').data('location-name'),
          expired_date            : $('#expired_date').val() !== '' ? moment($('#expired_date').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss') : '',
          qty                     : qtyPerRow,
          batch                   : $('#batch').val(),
          description             : $('#description_modal').val(),
          product_packing_uom     : $('#product_packing_id').find(':selected').data('uom'),
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
      if (usage > capacity)
        usage = capacity
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
      this.rowIndex         = null
      $('#description_modal').val(null)
      $('#qty').val('')
      $('#product_id').val(null).trigger('change')
      $('#to_warehouse_location_id').val(null).trigger('change')
      $('#product_packing_id').val(null).trigger('change')
      $('#expired_date').val('')
      $('#batch').val('')
      $('#capacity').val('')
      if (this.isSave === false) {
        this.deleteRemainingUsage(this.locationIdBefore)
        this.addRemainingUsage(this.locationIdFirst, 0)
      }
      this.productPackingId = null
      this.locationIdBefore = ''
      this.isSave           = false
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
      this.incoming.to_country_id   = parseInt($('#to_warehouse_id').find(':selected').data('country-id'))
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
            message   : `Job incoming ${data.result.job_no} has been added`,
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
    deleteRemainingUsage (locationId) {
      this.remainingLocation.forEach((value, key) => {
        if (parseInt(value.location_id) === locationId)
          this.remainingLocation[key].usage = this.remainingLocation[key].usage - 1
      })
    },
    addRemainingUsage (locationId, usage) {
      let found = false
      this.remainingLocation.forEach((value, key) => {
        if (parseInt(value.location_id) === locationId)
          found = true
      })
      if (found === false)
        this.remainingLocation.push({ location_id: locationId, usage: usage })
      else {
        this.remainingLocation.forEach((value, key) => {
          if (parseInt(value.location_id) === locationId)
            this.remainingLocation[key].usage = this.remainingLocation[key].usage + 1
        })
      }
    },
  },
}
</script>
