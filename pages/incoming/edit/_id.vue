<style scoped>
.margin-top-20 {
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
                <i class="kt-font-brand flaticon-edit-1" />
              </span>
              <h3 class="kt-portlet__head-title">
                Edit Incoming Stock
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/incoming"
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
                <label>Job No.</label>
                <input
                  :value="incoming.job_no"
                  type="text"
                  class="form-control"
                  disabled
                >
              </div>
              <div class="col-lg-4">
                <label>Unique Code</label>
                <input
                  :value="incoming.unique_code"
                  type="text"
                  class="form-control"
                  disabled
                >
              </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
            <div class="form-group row">
              <div class="col-lg-4 margin-top-20">
                <label>Order No. <span style="color:red">*</span></label>
                <input
                  v-model="incoming.order_no"
                  type="text"
                  class="form-control"
                  name="order_no"
                  placeholder="Enter order number"
                >
              </div>
              <div class="col-lg-4 margin-top-20">
                <label>Company</label>
                <input
                  :value="companyName"
                  type="text"
                  class="form-control"
                  disabled
                >
              </div>
              <div class="col-lg-4 margin-top-20">
                <label>To Warehouse</label>
                <input
                  :value="warehouseName"
                  type="text"
                  class="form-control"
                  disabled
                >
              </div>
              <div class="col-lg-4 margin-top-20">
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
              <div class="col-lg-4 margin-top-20">
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
              <div class="col-lg-4 margin-top-20">
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
              <div class="col-lg-4 margin-top-20">
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
              <div class="col-lg-4 margin-top-20">
                <div class="kt-form__label">
                  <label>Country</label>
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
              <div class="col-lg-4 margin-top-20">
                <label>From</label>
                <textarea
                  id="from"
                  v-model="incoming.from"
                  name="from"
                  class="form-control"
                  rows="3"
                />
              </div>
              <div class="col-lg-4 margin-top-20">
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
                class="col-lg-4 margin-top-20"
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
                class="col-lg-4 margin-top-20"
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
              <div class="col-lg-4 margin-top-20">
                <label>Custom Permit</label>
                <input
                  v-model="incoming.custom_permit"
                  type="text"
                  class="form-control"
                  name="custom_permit"
                  placeholder="Enter custom permit"
                >
              </div>
              <div class="col-lg-4 margin-top-20">
                <label>Cargo Insurance</label>
                <input
                  v-model="incoming.cargo_insurance"
                  type="text"
                  class="form-control"
                  name="cargo_insurance"
                  placeholder="Enter cargo insurance"
                >
              </div>
              <div class="col-lg-4 margin-top-20">
                <label for="description">Description</label>
                <textarea
                  v-model="incoming.description"
                  class="form-control"
                  rows="4"
                />
              </div>
            </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-xs" />
            <div
              v-if="parentId === 0"
              class="form-group row"
            >
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
                      <th class="location_name">
                        Location
                      </th>
                      <th>Batch</th>
                      <th class="expired_date">
                        Expired
                      </th>
                      <th>Description</th>
                      <th class="status">
                        Status
                      </th>
                      <th class="created_at">
                        Created
                      </th>
                      <th class="updated_at">
                        Updated
                      </th>
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
import { TRANSPORT_TYPE, INCOMING_STATUS, STATUS_OPEN, STATUS_BLOCK, STATUS_STORED } from '@/utils/constants'

export default {
  data () {
    return {
      rowIndex : null,
      countries: [],
      incoming : {
        company_id      : 0,
        order_no        : '',
        job_no          : '',
        unique_code     : '',
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
      companyName         : '',
      warehouseName       : '',
      rowId               : 0,
      locationIdBefore    : '',
      statusProduct       : STATUS_OPEN,
      createdAt           : '',
      updateAt            : '',
      createdByName       : '',
      updatedByName       : '',
      modalHasOpen        : false,
      isRestore           : false,
      formChanged         : false,
      parentId            : 0,
      fromLocationId      : 0,
      uniqueCode          : 0,
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
    try {
      await this.$store.dispatch('incoming/getIncomingDetail', { idIncoming: atob(this.$route.params.id) })
      const incomingDetail           = this.$store.getters['incoming/getIncomingDetail'].result

      this.incoming.id                = incomingDetail.id
      this.incoming.parent_id         = incomingDetail.parent_id
      this.incoming.order_no          = incomingDetail.order_no
      this.incoming.job_no            = incomingDetail.job_no
      this.incoming.unique_code       = incomingDetail.unique_code
      this.incoming.transport_number  = incomingDetail.transport_number
      this.incoming.flight            = incomingDetail.flight
      this.incoming.from              = incomingDetail.from
      this.incoming.custom_permit     = incomingDetail.custom_permit
      this.incoming.cargo_insurance   = incomingDetail.cargo_insurance
      this.incoming.description       = incomingDetail.description
      this.incoming.transport_type    = incomingDetail.transport_type
      this.incoming.company_id        = incomingDetail.company_id
      this.incoming.to_warehouse_id   = incomingDetail.to_warehouse_id
      this.incoming.to_country_id     = incomingDetail.to_country_id
      this.incoming.from_warehouse_id = incomingDetail.from_warehouse_id
      this.incoming.from_country_id   = incomingDetail.from_country_id
      this.incoming.status            = incomingDetail.status

      this.companyName   = incomingDetail.company_name
      this.warehouseName = incomingDetail.to_warehouse_name
      this.parentId      = incomingDetail.parent_id

      // set products
      incomingDetail.products.forEach((value) => {
        const products     = {
          id                            : value.id,
          product_id                    : value.product_id,
          unique_code                   : value.unique_code,
          product_packing_id            : value.product_packing_id,
          to_warehouse_location_id      : value.to_warehouse_location_id,
          from_warehouse_location_id    : value.from_warehouse_location_id,
          product_name                  : value.product_name,
          product_sku                   : value.product_sku,
          product_packing_name          : value.product_packing_name,
          to_warehouse_location_name    : value.to_warehouse_location_name,
          to_warehouse_location_level   : value.to_warehouse_location_level,
          to_warehouse_location_usage   : value.to_warehouse_location_usage,
          to_warehouse_location_capacity: value.to_warehouse_location_capacity,
          expired_date                  : value.expired_date,
          qty                           : value.qty,
          batch                         : value.batch,
          description                   : value.description,
          status                        : value.status,
          created_at                    : value.created_at,
          updated_at                    : value.updated_at,
          created_by_name               : value.created_by_name,
          updated_by_name               : value.updated_by_name,
        }
        this.incoming.products.push(products)
      })

      if (incomingDetail.etd !== '' && incomingDetail.etd !== '0000-00-00 00:00:00')
        $('#etd').val(moment(incomingDetail.etd).format('DD/MM/YYYY HH:mm'))
      if (incomingDetail.eta !== '' && incomingDetail.eta !== '0000-00-00 00:00:00')
        $('#eta').val(moment(incomingDetail.eta).format('DD/MM/YYYY HH:mm'))
      if (incomingDetail.order_date !== '' && incomingDetail.order_date !== '0000-00-00 00:00:00')
        $('#order_date').val(moment(incomingDetail.order_date).format('DD/MM/YYYY HH:mm'))
      if (incomingDetail.shipment_date !== '' && incomingDetail.shipment_date !== '0000-00-00 00:00:00')
        $('#shipment_date').val(moment(incomingDetail.shipment_date).format('DD/MM/YYYY HH:mm'))

      // set usage existing
      const holder = {}
      this.incoming.products.forEach(function (value) {
        // eslint-disable-next-line no-prototype-builtins
        if (holder.hasOwnProperty(value.to_warehouse_location_id))
          holder[value.to_warehouse_location_id] = holder[value.to_warehouse_location_id] + 1
        else
          holder[value.to_warehouse_location_id] = 1
      })
      for (const property in holder)
        this.remainingLocation.push({ location_id: parseInt(property), usage: holder[property] })

      // disable input if parent id != 0
      if (this.parentId)
        $('#transport_type').prop('disabled', true)
    } catch (error) {

    }

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
    $('#from_country_id').val(this.incoming.from_country_id).trigger('change')

    $('#transport_type').select2({
      placeholder: 'Select a transport type',
      allowClear : true,
      data       : TRANSPORT_TYPE,
    })
    $('#transport_type').val(this.incoming.transport_type).trigger('change')
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
          if (data[key].to_warehouse_location_id === '' || data[key].to_warehouse_location_id === 0) {
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
            app.editIncoming(data)
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

    $('#to_warehouse_location_id').on('change', function () {
      validatorModal.element($(this))
      if (app.rowIndex !== null) {
        if (app.locationIdBefore === parseInt($(this).val()))
          app.addRemainingUsage(app.locationIdBefore)
        else
          app.deleteRemainingUsage(app.locationIdBefore)
      }
    })

    $('#product_modal').on('shown.bs.modal', function () {
      app.modalHasOpen = true
      $('#product_id').select2({
        placeholder       : 'Select product',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
          type: 'GET',
          url : function () {
            return `/api/product/select?id_company=${app.incoming.company_id}`
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
        if (this.productPackingOption !== null && app.parentId === 0)
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
            return `/api/location/select?id_warehouse=${app.incoming.to_warehouse_id}`
          },
          cache         : true,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                let usageRemaining = 0
                app.remainingLocation.forEach((value, key) => {
                  if (parseInt(value.location_id) === parseInt(object.id))
                    usageRemaining = value.usage
                })
                if (object.usage !== object.capacity && usageRemaining < object.capacity) {
                  return {
                    id            : object.id,
                    text          : `${object.name} - Level ${object.level} (${object.usage} / ${object.capacity})`,
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
          return data.text
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
      data      : this.incoming.products,
      columns   : [
        { data: 'product_sku' },
        { data: 'unique_code' },
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'qty' },
        { data: 'to_warehouse_location_name' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'description' },
        { data: 'status' },
        { data: 'created_at' },
        { data: 'updated_at' },
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
        $('.popoverButtonWarning').popover({
          title    : 'Empty Location',
          html     : true,
          trigger  : 'manual',
          placement: 'left',
          content  : function () {
            return 'Please select location.'
          },
        })
        $('.status-open').click(function () {
          const rowData = app.datatable.row($(this).data('index')).data()
          app.updateStatus(STATUS_OPEN, $(this).data('index'), rowData)
        })
        $('.status-block').click(function () {
          const rowData = app.datatable.row($(this).data('index')).data()
          app.updateStatus(STATUS_BLOCK, $(this).data('index'), rowData)
        })
        $('.status-store').click(function () {
          const rowData = app.datatable.row($(this).data('index')).data()
          app.updateStatus(STATUS_STORED, $(this).data('index'), rowData)
        })
      },
      columnDefs: [
        {
          targets  : 'location_name',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (full.to_warehouse_location_id === 0)
              return `<a href="javascript:;" class="popoverButtonWarning"><i style="color: red" class="fa flaticon-warning"></i></a>`
            else if (full.to_warehouse_location_id === '') {
              return `<span style="color: orange">${data} - Level ${full.to_warehouse_location_level}
                        <sup>
                          <a href="javascript:;" class="popoverButton">
                            <i style="color: red" class="fa flaticon2-information"></i>
                          </a>
                        </sup>
                      </span>`
            } else
              return `${data} - Level ${full.to_warehouse_location_level}`
          },
        },
        {
          targets  : 'expired_date',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (data !== '' && data !== '0000-00-00 00:00:00')
              return moment(data).format('DD/MM/Y')
            else
              return ''
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
          targets: 'updated_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.updated_by_name}`
            else
              return data
          },
        },
        {
          targets: 'actions',
          render : function (data, type, full, meta) {
            let additionalButton
            if (full.id === 0)
              additionalButton = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete"><i class="la la-trash"></i></a>`
            else {
              let openButton  = ''
              let blockButton = ''
              let storeButton = ''
              if (full.status !== STATUS_OPEN)
                openButton = `<a class="dropdown-item status-open" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-folder-open"></i> Open</a>`
              if (full.status !== STATUS_BLOCK)
                blockButton = `<a class="dropdown-item status-block" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-list"></i> Block</a>`
              if (full.status !== STATUS_STORED)
                storeButton = `<a class="dropdown-item status-store" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-list-alt"></i> Store</a>`
              additionalButton = `<span class="dropdown">
                                      <a href="javascript:void(0)" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
                                        <i class="la la-ellipsis-h"></i>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right" rolw="menu">
                                          ${openButton}${blockButton}${storeButton}
                                      </div>
                                  </span>`
            }
            return `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit"><i class="la la-edit"></i></a>
                    ${additionalButton}`
          },
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            for (const statusIndex in INCOMING_STATUS) {
              if (data === INCOMING_STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${INCOMING_STATUS[statusIndex].class} kt-badge--inline">${INCOMING_STATUS[statusIndex].text}</span>`
            }
            return data
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
    $('#product_table').on('mouseover', '.flaticon-warning', function () {
      $($(this).parents('.popoverButtonWarning')).popover('show')
    })
    $('#product_table').on('mouseleave', '.flaticon-warning', function () {
      $($(this).parents('.popoverButtonWarning')).popover('hide')
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
      app.rowId            = rowData.id
      app.statusProduct    = rowData.status
      app.createdAt        = rowData.created_at
      app.updateAt         = rowData.updated_at
      app.createdByName    = rowData.created_by_name
      app.updatedByName    = rowData.updated_by_name
      app.locationIdBefore = rowData.to_warehouse_location_id
      app.fromLocationId   = rowData.from_warehouse_location_id
      app.uniqueCode       = rowData.unique_code

      app.usage         = rowData.to_warehouse_location_usage
      app.capacity      = rowData.to_warehouse_location_capacity
      app.locationName  = rowData.to_warehouse_location_name
      app.locationLevel = rowData.to_warehouse_location_level

      if (app.modalHasOpen === true) {
        $('#product_id').val(rowData.product_id).trigger('change')
        $('#to_warehouse_location_id').val(rowData.to_warehouse_location_id).trigger('change')
      } else {
        const newOptionProduct  = new Option(rowData.product_name, rowData.product_id, true, true)
        newOptionProduct.setAttribute('data-product-sku', rowData.product_sku)
        $('#product_id').append(newOptionProduct).trigger('change')

        if (rowData.to_warehouse_location_id !== 0) {
          const locationName      = `${rowData.to_warehouse_location_name} - Level ${rowData.to_warehouse_location_level} 
                                  (${rowData.to_warehouse_location_usage} / ${rowData.to_warehouse_location_capacity})`
          const newOptionLocation = new Option(locationName, rowData.to_warehouse_location_id, true, true)
          newOptionLocation.setAttribute('data-location-name', rowData.to_warehouse_location_name)
          newOptionLocation.setAttribute('data-location-level', rowData.to_warehouse_location_level)
          newOptionLocation.setAttribute('data-usage', rowData.to_warehouse_location_usage)
          newOptionLocation.setAttribute('data-capacity', rowData.to_warehouse_location_capacity)
          $('#to_warehouse_location_id').append(newOptionLocation).trigger('change')
        }
      }

      $('#description_modal').val(rowData.description)
      $('#qty').val(rowData.qty)
      if (app.productPackingOption === null)
        $('#qty_max').val(rowData.to_warehouse_location_capacity)
      if (app.parentId !== 0)
        $('#qty_max').val(rowData.qty)
      if (rowData.expired_date !== '')
        $('#expired_date').val(moment(rowData.expired_date).format('DD/MM/Y'))
      $('#batch').val(rowData.batch)
      $('#product_modal').modal('show')
      app.rowIndex = app.datatable.row($(this).parents('tr')).index()
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
      $('#product_modal').modal('show')
    },
    async setPackingValue (productId) {
      if (productId) {
        await this.getProductPacking(productId)
        $('#product_packing_id').prop('disabled', false)
        if (this.productPackingId !== null) {
          $('#product_packing_id').val(this.productPackingId).trigger('change')
          if (this.parentId !== 0) {
            $('#product_id').prop('disabled', true)
            $('#product_packing_id').prop('disabled', true)
            $('#qty').prop('disabled', true)
            $('#batch').prop('disabled', true)
            $('#expired_date').attr('disabled', 'disabled')
          }
        }
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

      if (this.productPackingOption === null) {
        const customAdapter       = $.fn.select2.amd.require('select2/data/customAdapter')
        this.productPackingOption = $('#product_packing_id').select2({
          placeholder      : 'Select a product packing',
          allowClear       : true,
          dataAdapter      : customAdapter,
          data             : this.productPackingSelect,
          templateSelection: function (data, container) {
            $(data.element).attr('data-packing-name', data.packing_name)
            $(data.element).attr('data-qty-max', data.qty_max)
            return data.text
          },
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
          usage = usage + value.usage
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
          id                            : this.rowId,
          product_id                    : parseInt($('#product_id').val()),
          product_packing_id            : parseInt($('#product_packing_id').val()),
          to_warehouse_location_id      : locationId,
          from_warehouse_location_id    : this.fromLocationId,
          unique_code                   : this.uniqueCode,
          product_name                  : $('#product_id option:selected').text(),
          product_sku                   : $('#product_id').find(':selected').data('product-sku'),
          product_packing_name          : $('#product_packing_id').find(':selected').data('packing-name'),
          to_warehouse_location_name    : $('#to_warehouse_location_id').find(':selected').data('location-name'),
          to_warehouse_location_level   : $('#to_warehouse_location_id').find(':selected').data('location-level'),
          to_warehouse_location_usage   : $('#to_warehouse_location_id').find(':selected').data('usage'),
          to_warehouse_location_capacity: capacity,
          expired_date                  : $('#expired_date').val() !== '' ? moment($('#expired_date').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss') : '',
          qty                           : qtyPerRow,
          batch                         : $('#batch').val(),
          description                   : $('#description_modal').val(),
          status                        : this.statusProduct,
          created_at                    : this.createdAt,
          updated_at                    : this.updateAt,
          created_by_name               : this.createdByName,
          updated_by_name               : this.updatedByName,
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
      $('#expired_date').val('')
      $('#batch').val('')
      this.productPackingId = null
      this.statusProduct    = STATUS_OPEN
      this.createdAt        = ''
      this.updateAt         = ''
      this.createdByName    = ''
      this.updatedByName    = ''
      this.rowId            = 0
      this.locationIdBefore = ''
      this.fromLocationId   = 0
      this.uniqueCode       = ''

      this.usage         = 0
      this.capacity      = 0
      this.locationName  = ''
      this.locationLevel = ''
    },
    setDataPost (data) {
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
      this.incoming.products        = data
    },
    async editIncoming (data) {
      if ($('#incoming_form').valid()) {
        await this.setDataPost(data)
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('incoming/editIncoming', { idIncoming: atob(this.$route.params.id), data: this.incoming })
          const data      = this.$store.getters['incoming/getEditIncoming']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Job incoming ${data.result.job_no} has been edited`,
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
    addRemainingUsage (locationId) {
      this.remainingLocation.forEach((value, key) => {
        if (parseInt(value.location_id) === locationId)
          this.remainingLocation[key].usage = this.remainingLocation[key].usage + 1
      })
    },
    async updateStatus (statusId, rowIndex, data) {
      this.formChanged = true
      data.status      = statusId
      setTimeout(() => this.datatable.row(rowIndex).data(data).draw(), 100)
    },
  },
}
</script>
