<style scoped>
.margin-top-20 {
  margin-top: 20px;
}
</style>
<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="internal_form"
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
                Edit Internal Transfer
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/transfer/internal/"
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
                  v-model="internal.job_no"
                  type="text"
                  class="form-control"
                  disabled
                >
              </div>
              <div class="col-lg-4">
                <label>Unique Code</label>
                <input
                  v-model="internal.unique_code"
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
                  v-model="internal.order_no"
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
                <label>Warehouse</label>
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
                <label for="description">Description</label>
                <textarea
                  v-model="internal.description"
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
                      <th>From Location</th>
                      <th class="to_location_name">
                        To Location
                      </th>
                      <th class="status">
                        Status
                      </th>
                      <th>Batch</th>
                      <th class="expired_date">
                        Expired
                      </th>
                      <th>Description</th>
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
                <div
                  class="col-lg-6"
                >
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
                <div
                  class="col-lg-6"
                >
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
                <div
                  class="col-lg-6"
                >
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
                <div
                  class="col-lg-6"
                >
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
                  <label>To Location <span style="color:red">*</span></label>
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
                  <label>Condition <span style="color:red">*</span></label>
                  <select
                    id="condition"
                    class="form-control kt-select2"
                    name="condition"
                  >
                    <option />
                  </select>
                  <span class="form-text text-muted" />
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
import { INTERNAL_STATUS, STATUS_CANCEL, STATUS_OPEN, STATUS_BLOCK, STATUS_STORED, PRODUCT_CONDITION, CONDITION_GOOD } from '@/utils/constants'

export default {
  data () {
    return {
      rowIndex: null,
      internal: {
        company_id       : 0,
        order_no         : '',
        type             : 3,
        etd              : '',
        eta              : '',
        order_date       : '',
        shipment_date    : '',
        transport_type   : '',
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
      rowId                : 0,
      companyName          : '',
      warehouseName        : '',
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
      isRestore            : false,
      formChanged          : false,
      qtyPacking           : 0,
      statusProduct        : STATUS_OPEN,
      createdAt            : '',
      updateAt             : '',
      createdByName        : '',
      updatedByName        : '',
      productId            : '',
      lastStockForEdit     : 0,
      remainingLocation    : [],
      locationIdBefore     : '',
    }
  },
  async mounted () {
    const app           = this
    // prevent refresh page
    document.querySelector('#internal_form').addEventListener('change', function () { app.formChanged = true })
    window.addEventListener('beforeunload', (event) => {
      if (app.formChanged)
        event.returnValue = 'You have unfinished changes!'
    })
    const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')
    try {
      await this.$store.dispatch('internal/getInternalDetail', { idInternal: atob(this.$route.params.id) })
      const internalDetail           = this.$store.getters['internal/getInternalDetail'].result

      this.internal.id                = internalDetail.id
      this.internal.order_no          = internalDetail.order_no
      this.internal.job_no            = internalDetail.job_no
      this.internal.unique_code       = internalDetail.unique_code
      this.internal.transport_number  = internalDetail.transport_number
      this.internal.flight            = internalDetail.flight
      this.internal.from              = internalDetail.from
      this.internal.custom_permit     = internalDetail.custom_permit
      this.internal.cargo_insurance   = internalDetail.cargo_insurance
      this.internal.description       = internalDetail.description
      this.internal.transport_type    = internalDetail.transport_type
      this.internal.from_country_id   = internalDetail.from_country_id
      this.internal.company_id        = internalDetail.company_id
      this.internal.to_warehouse_id   = internalDetail.to_warehouse_id
      this.internal.to_country_id     = internalDetail.to_country_id
      this.internal.from_warehouse_id = internalDetail.from_warehouse_id
      this.internal.from_country_id   = internalDetail.from_country_id
      this.internal.to_warehouse_name = internalDetail.to_warehouse_name
      this.internal.status            = internalDetail.status

      this.companyName   = internalDetail.company_name
      this.warehouseName = internalDetail.from_warehouse_name

      // set products
      internalDetail.products.forEach((value) => {
        const products     = {
          id                            : value.id,
          product_id                    : value.product_id,
          unique_code                   : value.unique_code,
          product_packing_id            : value.product_packing_id,
          from_warehouse_location_id    : value.from_warehouse_location_id,
          to_warehouse_location_id      : value.to_warehouse_location_id,
          product_name                  : value.product_name,
          product_sku                   : value.product_sku,
          product_packing_name          : value.product_packing_name,
          from_warehouse_location_name  : `${value.from_warehouse_location_name} - Level ${value.from_warehouse_location_level}`,
          from_warehouse_location_level : value.from_warehouse_location_level,
          to_warehouse_location_name    : value.to_warehouse_location_name,
          to_warehouse_location_level   : value.to_warehouse_location_level,
          to_warehouse_location_usage   : value.to_warehouse_location_usage,
          to_warehouse_location_capacity: value.to_warehouse_location_capacity,
          expired_date                  : value.expired_date,
          qty                           : value.qty,
          last_stock                    : value.last_stock,
          product_status                : value.product_status,
          batch                         : value.batch,
          description                   : value.description,
          status                        : value.status,
          created_at                    : value.created_at,
          updated_at                    : value.updated_at,
          created_by_name               : value.created_by_name,
          updated_by_name               : value.updated_by_name,
        }

        if (value.status === STATUS_CANCEL)
          products.is_cancel = true

        this.internal.products.push(products)

        if (value.status !== STATUS_CANCEL)
          this.existingUniqueCode[`${value.product_id}_${value.product_packing_id}_${value.from_warehouse_location_id}_${value.unique_code}`] = value.unique_code
      })

      if (internalDetail.etd !== '' && internalDetail.etd !== '0000-00-00 00:00:00')
        $('#etd').val(moment(internalDetail.etd).format('DD/MM/YYYY HH:mm'))
      if (internalDetail.eta !== '' && internalDetail.eta !== '0000-00-00 00:00:00')
        $('#eta').val(moment(internalDetail.eta).format('DD/MM/YYYY HH:mm'))
      if (internalDetail.order_date !== '' && internalDetail.order_date !== '0000-00-00 00:00:00')
        $('#order_date').val(moment(internalDetail.order_date).format('DD/MM/YYYY HH:mm'))
      if (internalDetail.shipment_date !== '' && internalDetail.shipment_date !== '0000-00-00 00:00:00')
        $('#shipment_date').val(moment(internalDetail.shipment_date).format('DD/MM/YYYY HH:mm'))

      // set usage existing
      const holder = {}
      this.internal.products.forEach(function (value) {
        // eslint-disable-next-line no-prototype-builtins
        if (holder.hasOwnProperty(value.to_warehouse_location_id))
          holder[value.to_warehouse_location_id] = holder[value.to_warehouse_location_id] + 1
        else
          holder[value.to_warehouse_location_id] = 1
      })
      for (const property in holder)
        this.remainingLocation.push({ location_id: parseInt(property), usage: holder[property] })
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

    const validator = $('#internal_form').validate({
      // define validation rules
      rules: {
        order_no         : { required: true },
        company_id       : { required: true },
        from_warehouse_id: { required: true },
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
            text              : 'Please add internal product type',
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
            app.editInternal(data)
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

    $('#to_warehouse_location_id').on('change', function () {
      validatorModal.element($(this))
      if (app.rowIndex !== null) {
        if (app.locationIdBefore === parseInt($(this).val()))
          app.addRemainingUsage(app.locationIdBefore)
        else
          app.deleteRemainingUsage(app.locationIdBefore)
      }
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
            return `/api/product/select?id_company=${app.internal.company_id}`
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
        if (app.rowId === 0)
          app.qtyPacking = $('#unique_code').find(':selected').data('qty')
        else
          app.qtyPacking = app.lastStockForEdit
        $('#qty_packing').val(app.qtyPacking)
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
            return `/api/location/select-by-product?id_warehouse=${app.internal.from_warehouse_id}&product_id=${$('#product_id').val()}&product_packing_id=${$('#product_packing_id').val()}`
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

      $('#to_warehouse_location_id').select2({
        placeholder       : 'Select location',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
          type: 'GET',
          url : function () {
            return `/api/location/select?id_warehouse=${app.internal.from_warehouse_id}`
          },
          cache         : false,
          processResults: function (data) {
            return {
              results: $.map(data.result, function (object) {
                let usageRemaining = 0
                app.remainingLocation.forEach((value, key) => {
                  if (parseInt(value.location_id) === parseInt(object.id))
                    usageRemaining = value.usage
                })
                let usagePrint     = 0
                if (usageRemaining === 0)
                  usagePrint = object.usage
                else
                  usagePrint = usageRemaining
                if (object.usage !== object.capacity && usageRemaining < object.capacity) {
                  return {
                    id            : object.id,
                    text          : `${object.name} - Level ${object.level} (${usagePrint} / ${object.capacity})`,
                    location_name : object.name,
                    location_level: object.level,
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

      $('#condition').select2({
        data                   : PRODUCT_CONDITION,
        placeholder            : 'Select a product condition',
        minimumResultsForSearch: -1,
      })
      if (app.rowIndex === null)
        $('#condition').val(CONDITION_GOOD).trigger('change')
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
      data      : this.internal.products,
      columns   : [
        { data: 'product_sku' },
        { data: 'unique_code' },
        { data: 'product_name' },
        { data: 'product_packing_name' },
        { data: 'qty' },
        { data: 'from_warehouse_location_name' },
        { data: 'to_warehouse_location_name' },
        { data: 'status' },
        { data: 'batch' },
        { data: 'expired_date' },
        { data: 'description' },
        { data: 'created_at' },
        { data: 'updated_at' },
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
        $('.status-cancel').click(function () {
          const rowData = app.datatable.row($(this).data('index')).data()
          app.updateStatus(STATUS_CANCEL, $(this).data('index'), rowData)
        })
      },
      columnDefs: [
        {
          targets: 'to_location_name',
          render : function (data, type, full, meta) {
            if (full.to_warehouse_location_id === '') {
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
            if (full.is_cancel !== undefined)
              return ''

            let additionalButton
            if (full.id === 0)
              additionalButton = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete"><i class="la la-trash"></i></a>`
            else {
              let openButton   = ''
              let blockButton  = ''
              let storeButton  = ''
              let cancelButton = ''
              if (full.status !== STATUS_OPEN)
                openButton = `<a class="dropdown-item status-open" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-folder-open"></i> Open</a>`
              if (full.status !== STATUS_BLOCK)
                blockButton = `<a class="dropdown-item status-block" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-list"></i> Block</a>`
              if (full.status !== STATUS_STORED)
                storeButton = `<a class="dropdown-item status-store" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-list-alt"></i> Store</a>`
              if (full.status !== STATUS_CANCEL)
                cancelButton     = `<a class="dropdown-item status-cancel" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-times-circle"></i> Cancel</a>`
              additionalButton = `<span class="dropdown">
                                      <a href="javascript:void(0)" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
                                        <i class="la la-ellipsis-h"></i>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right" rolw="menu">
                                          ${openButton}${blockButton}${storeButton}${cancelButton}
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
            for (const statusIndex in INTERNAL_STATUS) {
              if (data === INTERNAL_STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${INTERNAL_STATUS[statusIndex].class} kt-badge--inline">${INTERNAL_STATUS[statusIndex].text}</span>`
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

    // delete datatable row
    $('#product_table').on('click', '.la-trash', function () {
      const rowData = app.datatable.row($(this).parents('tr')).data()
      app.deleteRemainingUsage(rowData.to_warehouse_location_id)
      app.$delete(app.existingUniqueCode, `${rowData.product_id}_${rowData.product_packing_id}_${rowData.from_warehouse_location_id}_${rowData.unique_code}`)
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // edit datatable row
    $('#product_table').on('click', '.la-edit', function () {
      const rowData           = app.datatable.row($(this).parents('tr')).data()
      app.productPackingId    = rowData.product_packing_id
      app.rowId               = rowData.id
      app.statusProduct       = rowData.status
      app.createdAt           = rowData.created_at
      app.updateAt            = rowData.updated_at
      app.createdByName       = rowData.created_by_name
      app.updatedByName       = rowData.updated_by_name
      app.warehouseLocationId = rowData.from_warehouse_location_id
      app.uniqueCode          = rowData.unique_code
      app.uniqCodeBefore      = `${rowData.product_id}_${rowData.product_packing_id}_${rowData.from_warehouse_location_id}_${rowData.unique_code}`
      app.productId           = rowData.product_id
      app.locationIdBefore    = rowData.to_warehouse_location_id

      const newOptionProduct  = new Option(rowData.product_name, rowData.product_id, true, true)
      newOptionProduct.setAttribute('data-product-sku', rowData.product_sku)
      $('#product_id').append(newOptionProduct).trigger('change')

      const newOptionLocation = new Option(rowData.from_warehouse_location_name, rowData.from_warehouse_location_id, true, true)
      $('#from_warehouse_location_id').append(newOptionLocation).trigger('change')

      const toLocationName      = `${rowData.to_warehouse_location_name} - Level ${rowData.to_warehouse_location_level} 
                                  (${rowData.to_warehouse_location_usage} / ${rowData.to_warehouse_location_capacity})`
      const newOptionToLocation = new Option(toLocationName, rowData.to_warehouse_location_id, true, true)
      newOptionToLocation.setAttribute('data-location-name', rowData.to_warehouse_location_name)
      newOptionToLocation.setAttribute('data-location-level', rowData.to_warehouse_location_level)
      newOptionToLocation.setAttribute('data-usage', rowData.to_warehouse_location_usage)
      newOptionToLocation.setAttribute('data-capacity', rowData.to_warehouse_location_capacity)
      $('#to_warehouse_location_id').append(newOptionToLocation).trigger('change')

      if (app.rowId !== 0)
        app.setLastStock(rowData.product_id, rowData.product_packing_id, rowData.from_warehouse_location_id, rowData.unique_code, rowData.qty)

      $('#description_modal').val(rowData.description)
      $('#qty').val(rowData.qty)

      $('#product_modal').modal('show')

      setTimeout(() => $('#condition').val(rowData.product_status).trigger('change'), 400)
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
        condition                 : { required: true },
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
      $('#product_id').attr('disabled', false)
      $('#product_modal').modal('show')
    },
    async setPackingValue (productId) {
      if (productId) {
        await this.getProductPacking(productId)
        $('#product_packing_id').prop('disabled', false)
        if (this.productPackingId !== null) {
          $('#product_packing_id').val(this.productPackingId).trigger('change')
          if (this.rowId !== 0) {
            setTimeout(function () {
              $('#product_id').attr('disabled', true)
              $('#product_packing_id').attr('disabled', true)
              $('#from_warehouse_location_id').attr('disabled', true)
              $('#unique_code').attr('disabled', true)
            }, 100)
          } else
            $('#product_id').attr('disabled', false)
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
            id  : value.id,
            text: value.packing_type_name,
          }
          this.productPackingSelect.push(dataTemporary)
        })
      }

      if (this.productPackingOption === null) {
        const customAdapter       = $.fn.select2.amd.require('select2/data/customAdapter')
        this.productPackingOption = $('#product_packing_id').select2({
          placeholder: 'Select a product packing',
          allowClear : true,
          dataAdapter: customAdapter,
          data       : this.productPackingSelect,
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
          if (this.rowId !== 0) {
            setTimeout(function () {
              $('#product_id').attr('disabled', true)
              $('#product_packing_id').attr('disabled', true)
              $('#from_warehouse_location_id').attr('disabled', true)
              $('#unique_code').attr('disabled', true)
            }, 100)
          } else
            $('#product_id').attr('disabled', false)

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

      if (this.uniqueCodeOption === null) {
        const customAdapter   = $.fn.select2.amd.require('select2/data/customAdapter')
        this.uniqueCodeOption = $('#unique_code').select2({
          placeholder: 'Select a unique code',
          allowClear : true,
          dataAdapter: customAdapter,
          data       : this.uniqueCodeSelect,
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
      let uniqueCode          = $('#unique_code').val()
      let productId           = parseInt($('#product_id').val())
      let productPackingId    = parseInt($('#product_packing_id').val())
      let warehouseLocationId = parseInt($('#from_warehouse_location_id').val())
      let locationId          = parseInt($('#to_warehouse_location_id').val())
      const capacity          = $('#to_warehouse_location_id').find(':selected').data('capacity')
      let usage               = $('#to_warehouse_location_id').find(':selected').data('usage')
      const location          = locationId
      if (this.rowId !== 0) {
        uniqueCode          = this.uniqueCode
        productId           = this.productId
        productPackingId    = this.productPackingId
        warehouseLocationId = this.warehouseLocationId
      }

      // -1 usage location id before
      if (this.locationIdBefore !== '')
        this.deleteRemainingUsage(this.locationIdBefore)

      // add existing usage
      this.remainingLocation.forEach((value) => {
        if (parseInt(value.location_id) === location)
          usage = value.usage
      })

      usage = usage + 1
      if (usage > capacity)
        locationId   = ''

      const product = {
        id                            : this.rowId,
        product_id                    : productId,
        product_packing_id            : productPackingId,
        from_warehouse_location_id    : warehouseLocationId,
        to_warehouse_location_id      : locationId,
        unique_code                   : uniqueCode,
        product_name                  : $('#product_id option:selected').text(),
        product_sku                   : $('#product_id').find(':selected').data('product-sku'),
        product_packing_name          : $('#product_packing_id option:selected').text(),
        from_warehouse_location_name  : $('#from_warehouse_location_id option:selected').text(),
        to_warehouse_location_name    : $('#to_warehouse_location_id').find(':selected').data('location-name'),
        to_warehouse_location_level   : $('#to_warehouse_location_id').find(':selected').data('location-level'),
        to_warehouse_location_usage   : $('#to_warehouse_location_id').find(':selected').data('usage'),
        to_warehouse_location_capacity: capacity,
        expired_date                  : $('#unique_code').find(':selected').data('expired-date'),
        qty                           : parseInt($('#qty').val()),
        last_stock                    : this.qtyPacking - parseInt($('#qty').val()),
        batch                         : $('#unique_code').find(':selected').data('batch'),
        description                   : $('#description_modal').val(),
        status                        : this.statusProduct,
        created_at                    : this.createdAt,
        updated_at                    : this.updateAt,
        created_by_name               : this.createdByName,
        updated_by_name               : this.updatedByName,
        product_status                : parseInt($('#condition').val()),
      }
      if (this.rowIndex === null)
        this.datatable.row.add(product).draw().node()
      else
        this.datatable.row(this.rowIndex).data(product).draw()

      this.$delete(this.existingUniqueCode, this.uniqCodeBefore)
      this.existingUniqueCode[`${productId}_${productPackingId}_${warehouseLocationId}_${uniqueCode}`] = uniqueCode

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
      this.rowIndex            = null
      $('#description_modal').val(null)
      $('#qty').val('')
      $('#product_id').val(null).trigger('change')
      $('#qty_packing').val('')
      $('#to_warehouse_location_id').val(null).trigger('change')
      $('#condition').val(CONDITION_GOOD).trigger('change')
      this.productPackingId    = null
      this.warehouseLocationId = null
      this.uniqueCode          = null
      this.uniqCodeBefore      = null
      this.rowId               = 0
      this.lastStockForEdit    = 0
      this.statusProduct       = STATUS_OPEN
      this.createdAt           = ''
      this.updateAt            = ''
      this.createdByName       = ''
      this.updatedByName       = ''
      this.locationIdBefore    = ''
    },
    setDataPost (data) {
      if ($('#etd').val() !== '')
        this.internal.etd = moment($('#etd').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#eta').val() !== '')
        this.internal.eta = moment($('#eta').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#order_date').val() !== '')
        this.internal.order_date = moment($('#order_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#shipment_date').val() !== '')
        this.internal.shipment_date = moment($('#shipment_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')

      this.internal.products = data
    },
    async editInternal (data) {
      if ($('#internal_form').valid()) {
        await this.setDataPost(data)
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('internal/editInternal', { idInternal: atob(this.$route.params.id), data: this.internal })
          const data      = this.$store.getters['internal/getEditInternal']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Job internal transfer ${data.result.job_no} has been edited`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/transfer/internal' }, 3000)
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
    async updateStatus (statusId, rowIndex, data) {
      this.formChanged = true
      data.status      = statusId
      setTimeout(() => this.datatable.row(rowIndex).data(data).draw(), 100)
    },
    async getLastStock (productId, packingId, locationId, uniqueCode, qty) {
      await this.$store.dispatch('product/getUniqueCodeFirst', {
        productId : productId,
        packingId : packingId,
        locationId: locationId,
        uniqueCode: uniqueCode,
      })
      const data      = this.$store.getters['product/getUniqueCodeFirst'].result
      if (data.length > 0)
        this.lastStockForEdit = qty + data[0].last_stock
    },
    async setLastStock (productId, packingId, locationId, uniqueCode, qty) {
      await this.getLastStock(productId, packingId, locationId, uniqueCode, qty)
      this.qtyPacking = this.lastStockForEdit
      $('#qty_packing').val(this.qtyPacking)
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
  },
}
</script>
