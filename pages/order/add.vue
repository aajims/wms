<template>
    <div class="row">
    <div class="col-lg-12">
        <form
        id="order_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="addOrder()"
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
              Add Order
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/order"
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
                v-model="order.order_no"
                type="text"
                class="form-control"
                name="order_no"
                placeholder="Enter order number"
              >
            </div>
            <div class="col-lg-4">
              <label>Company <span style="color:red">*</span></label>
              <select
                  id="company"
                  class="form-control kt-select2"
                  name="company"
                >
                  <option />
                </select>
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
                    class="form-control"
                    readonly
                    placeholder="Select order Date"
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
                v-if="order.transport_type === 'truck'"
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
                v-if="order.transport_type === 'air-freight'"
                class="col-lg-4"
              >
                <label>Flight</label>
                <input
                  v-model="order.flight"
                  type="text"
                  class="form-control"
                  name="flight"
                  placeholder="Enter flight"
                >
              </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
              <label for="country">From Country <span style="color:red">*</span></label>
                <select
                  id="country_from"
                  class="form-control kt-select2"
                  name="country_from"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
            </div>
            <div class="col-lg-4">
              <label for="state">From State <span style="color:red">*</span></label>
                <select
                  id="state_from"
                  class="form-control kt-select2"
                  name="state_from"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a state </span>
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
              <label for="country">To Country <span style="color:red">*</span></label>
                <select
                  id="country_to"
                  class="form-control kt-select2"
                  name="country_to"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
            </div>
            <div class="col-lg-4">
              <label for="state">To State <span style="color:red">*</span></label>
                <select
                  id="state_to"
                  class="form-control kt-select2"
                  name="state_to"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a state </span>
            </div>
            <div class="col-lg-4">
              <label>To Warehouse <span style="color:red">*</span></label>
              <select
                  id="warehouse_to"
                  class="form-control kt-select2"
                  name="warehouse_to"
                >
                  <option />
              </select>
            </div>
          </div>
          <div class="form-group row">
              <div class="col-lg-6">
                <label>Custom Permit</label>
                <input
                    v-model="order.custom_permit"
                    type="text"
                    class="form-control"
                    placeholder="Enter Custom Permit"
                >
              </div>
              <div class="col-lg-6">
               <label>Cargo Insurance</label>
                <input
                    v-model="order.cargo_insurance"
                    type="text"
                    class="form-control"
                    placeholder="Enter Cargo Insurance"
                >
            </div>
          </div>
          <div class="form-group row">
              <div class="col-lg-6">
              <label for="description">Description</label>
              <textarea
                id="description"
                v-model="order.description"
                class="form-control"
                rows="3"
                placeholder="Enter Description"
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
        </div>
        <div class="kt-portlet__body">
            <!--begin: Datatable -->
            <table
                id="order_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product ID</th>
                    <th>Packing ID</th>
                    <th>From Warehouse</th>
                    <th>To Warehouse</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Net Weight</th>
                    <th>Gross Weight</th>
                    <th>Expired</th>
                    <th>created</th>
                    <th>Status</th>
                </tr>
                </thead>
            </table>
            <!--end: Datatable -->
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
        data() {
            return {
                rowIndex : null,
                countries: [],
                order  : {
                    order_no : null,
                    company_id  : null,
                    type    : null,
                    etd    : null,
                    eta    : null,
                    order_date    : null,
                    tranport_type    : null,
                    tranport_number    : null,
                    flight    : null,
                    from    : null,
                    form_country_id    : null,
                    from_warehouse_id    : null,
                    to    : null,
                    to_country_id    : null,
                    to_warehouse_id    : null,
                    custom_permit    : null,
                    cargo_insurance    : null,
                    description    : null,
                },
                order_detail_request : {
                    product_id  : null,
                    product_packing_id  : null,
                    from_warehouse_location_id  : null,
                    to_warehouse_location_id  : null,
                    batch  : null,
                    qty  : null,
                    nett_weight_type  : null,
                    nett_weight  : null,
                    gross_weight_type  : null,
                    gross_weight  : null,
                    dimension_type  : null,
                    length  : null,
                    width  : null,
                    height  : null,
                    attachment  : null,
                    description  : null
                },
                createdDate: '',
                updatedDate: ''  
            }
        },
        async mounted () {
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
                    }
                    }),
                }
                },
            },
            })
            $('#warehouse_from').on('change', function () {
               validator.element($(this))
            })

            $('#warehouse_to').select2({
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
                    }
                    }),
                }
                },
            },
            })
            $('#warehouse_to').on('change', function () {
            validator.element($(this))
            })

            $('#company').select2({
                placeholder       : 'Select company',
                minimumInputLength: 1,
                width             : '100%',
                allowClear        : true,
                ajax              : {
                    type          : 'GET',
                    url           : '/api/company/list',
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
                $('#company').on('change', function () {
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

            const validator = $('#order_form').validate({
            // define validation rules
            rules: {
                name                   : { required: true },
                warehouse_id           : { required: true },
                weight_max             : { required: true, digits: true },
                weight_type            : { required: true },
            },
            invalidHandler: function (event, validator) {
                // eslint-disable-next-line no-undef
                KTUtil.scrollTop()
                event.preventDefault()
            },
            submitHandler: function (form) {
                return false
            },
            })
            const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')

            await this.$store.dispatch('region/getCountries')
            this.countries = this.$store.getters['region/getCountries']
            const app      = this
            $('#country_from').select2({
            placeholder: 'Select a country',
            allowClear : true,
            data       : this.countries,
            })
            $('#country_from').on('change', function () {
            validator.element($(this))
            if ($('#country_from').val()) {
                $('#state').val(null).trigger('change')
                $('#state').prop('disabled', false)
                app.getStatesByCountry()
            } else {
                $('#state').val(null).trigger('change')
                $('#city').val(null).trigger('change')
                $('#district').val(null).trigger('change')
                $('#state').prop('disabled', true)
                $('#city').prop('disabled', true)
                $('#district').prop('disabled', true)
            }
            })
            this.stateOption = $('#state_from').select2({
                placeholder: 'Select a state',
                allowClear : true,
                disabled   : true,
                dataAdapter: customAdapter,
                data       : this.states,
                })
                $('#state_from').on('change', function () {
                validator.element($(this))
                if ($('#state_from').val()) {
                    $('#city').val(null).trigger('change')
                    $('#city').prop('disabled', false)
                    app.getCitiesByState()
                } else {
                    $('#city').val(null).trigger('change')
                    $('#district').val(null).trigger('change')
                    $('#city').prop('disabled', true)
                    $('#district').prop('disabled', true)
                }
                })
                $('#country_to').select2({
                    placeholder: 'Select a country',
                    allowClear : true,
                    data       : this.countries,
                    })
                $('#country_to').on('change', function () {
                validator.element($(this))
                if ($('#country_to').val()) {
                    $('#state').val(null).trigger('change')
                    $('#state').prop('disabled', false)
                    app.getStatesByCountry()
                } else {
                    $('#state').val(null).trigger('change')
                    $('#city').val(null).trigger('change')
                    $('#district').val(null).trigger('change')
                    $('#state').prop('disabled', true)
                    $('#city').prop('disabled', true)
                    $('#district').prop('disabled', true)
                }
                })
                this.stateOption = $('#state_to').select2({
                    placeholder: 'Select a state',
                    allowClear : true,
                    disabled   : true,
                    dataAdapter: customAdapter,
                    data       : this.states,
                    })
                $('#state_to').on('change', function () {
                validator.element($(this))
                if ($('#state_to').val()) {
                    $('#city').val(null).trigger('change')
                    $('#city').prop('disabled', false)
                    app.getCitiesByState()
                } else {
                    $('#city').val(null).trigger('change')
                    $('#district').val(null).trigger('change')
                    $('#city').prop('disabled', true)
                    $('#district').prop('disabled', true)
                }
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
        },
    }
</script>
