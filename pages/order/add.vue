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
            <div class="col-lg-6">
              <label>Company Name <span style="color:red">*</span></label>
              <select
                  id="company"
                  class="form-control kt-select2"
                  name="company"
                >
                  <option />
                </select>
            </div>
            <div class="col-lg-6">
              <label>Type <span style="color:red">*</span></label>
              <input
                id="description"
                v-model="order.type"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>ETD <span style="color:red">*</span></label>
              <input
                v-model="order.etd"
                type="text"
                class="form-control"
              >
            </div>
            <div class="col-lg-6">
              <label>ETA <span style="color:red">*</span></label>
              <input
                v-model="order.eta"
                type="text"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Tranport Type <span style="color:red">*</span></label>
              <input
                v-model="order.transport_type"
                type="text"
                class="form-control"
              >
            </div>
            <div class="col-lg-6">
              <label>Transport Number <span style="color:red">*</span></label>
              <input
                v-model="order.tranport_number"
                type="text"
                class="form-control"
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
                <tbody>
                    <tr v-for="row in datatable" :key="row.id">
                        <td>{{ row.order_id }}</td>
                        <td>{{ row.product_id }}</td>
                        <td>{{ row.product_packing_id }}</td>
                        <td>{{ row.from_warehouse_location_name }}</td>
                        <td>{{ row.to_warehouse_location_name }}</td>
                        <td>{{ row.batch }}</td>
                        <td>{{ row.qty }}</td>
                        <td>{{ row.nett_weight }} /{{ row.nett_weight_type }}</td>
                        <td>{{ row.gross_weight }} /{{ row.gross_weight_type }}</td>
                        <td>{{ expired }}</td>
                        <td>{{ row.created_by_name }}</td>
                        <td v-if="row.status===1">Active</td>
                        <td v-else>Inactive</td>
                    </tr>
                </tbody>
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
  </div>
</template>

<script>
    export default {
        data() {
            return {
                states   : [],
                cities   : [],
                districts: [],
                order  : {
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
            $('#warehouse_to').on('change', function () {
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
        // await this.$store.dispatch('order/getOrderDetail', { idOrder: this.$route.params.id })
        // this.order    = this.$store.getters['order/getOrderDetail'].result
        
        }
    }
</script>
