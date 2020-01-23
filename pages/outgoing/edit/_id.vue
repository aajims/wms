<template>
    <div class="row">
        <div class="col-lg-12">
            <form
            id="outgoing_form"
            ref="form"
            class="kt-form kt-form--label-right"
            @submit.prevent="editOutgoing()"
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
                Edit Outgoing
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
                <div class="col-lg-6">
                <label>Company Name <span style="color:red">*</span></label>
                    <select
                        id="company"
                        class="form-control kt-select2"
                        name="company_id"
                        >
                        <option />
                    </select>
                    <input type="hidden" v-model="outgoing.type">
                </div>
                <div class="col-lg-6">
                <label>Order No <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="outgoing.order_no"
                        class="form-control"
                        name="order"
                        
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>ETD <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="etd"
                        class="form-control"
                        name="order"
                        
                    />
                </div>
                <div class="col-lg-6">
                <label>ETA <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="eta"
                        class="form-control"
                        name="order"
                        
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>Tranport Type <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.transport_type"
                        type="text"
                        class="form-control"
                        name="transport"
                        
                    >
                </div>
                <div class="col-lg-6">
                <label>Transport Number <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.tranport_number"
                        type="text"
                        class="form-control"
                        name="number"
                        
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label for="country">From Country <span style="color:red">*</span></label>
                   <select
                        id="country_from"
                        class="form-control kt-select2"
                        name="country_from_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                <label for="state">From State <span style="color:red">*</span></label>
                    <select
                        id="state_from"
                        class="form-control kt-select2"
                        name="state_from_id"
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
                <label for="country">To Country <span style="color:red">*</span></label>
                    <select
                        id="country_to"
                        class="form-control kt-select2"
                        name="country_to_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                <label for="state">To State <span style="color:red">*</span></label>
                    <select
                        id="state_to"
                        class="form-control kt-select2"
                        name="state_to_id"
                        >
                        <option />
                    </select>
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
            <div class="form-group row">
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
          </div>
        </div>
            </form>
            <div class="kt-portlet">
              <div class="col-lg-12">
                <div class="kt-portlet__head kt-portlet__head--lg">
                  <div class="kt-portlet__head-label">
                      <span class="kt-portlet__head-icon">
                      <i class="kt-font-brand flaticon-clipboard" />
                      </span>
                      <h3 class="kt-portlet__head-title">
                          Edit Product Outgoing
                      </h3>
                  </div>
                  <div class="kt-portlet__head-toolbar">
                    <button
                        type="button"
                        class="btn btn-brand" data-toggle="modal" data-target="#modal2"
                        >
                        <i class="la la-plus" />
                        <span class="kt-hidden-mobile">Add Product</span>
                    </button>
                  </div>
                </div>
              </div>
              <table
                id="outgoing_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>Product </th>
                    <th>Packing </th>
                    <th>From Warehouse</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Net Weight</th>
                    <th>Gross Weight</th>
                    <th>Dimension</th>
                    <th>Expired</th>
                    <th>created</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in productDetail" :key="index">
                        <td>{{ row.product_name }}</td>
                        <td>{{ row.product_packing_name }}</td>
                        <td>{{ row.from_warehouse_location_name }}</td>
                        <td>{{ row.batch }}</td>
                        <td>{{ row.qty }}</td>
                        <td>{{ row.nett_weight }} /{{ row.nett_weight_type }}</td>
                        <td>{{ row.gross_weight }} /{{ row.gross_weight_type }}</td>
                        <td>{{ row.dimension_type }}</td>
                        <td>{{ expired }}</td>
                        <td>{{ row.created_by_name }}</td>
                        <td v-if="row.status===1">Active</td>
                        <td v-else>Inactive</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Detail Product</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <div class="modal-body">
                  <form 
                    <div class="form-group row">
                      <div class="col-lg-4">
                        <label>Product  <span style="color:red">*</span></label>
                            <input
                            v-model="product.product_id"
                            type="text"
                            class="form-control"
                            placeholder="Enter Batch"
                          >
                      </div>
                      <div class="col-lg-4">
                        <label>Packing  <span style="color:red">*</span></label>
                            <input
                            v-model="product.product_packing_id"
                            type="text"
                            class="form-control"
                            placeholder="Enter Batch"
                          >
                      </div>
                      <div class="col-lg-4">
                        <label>Warehouse  <span style="color:red">*</span></label>
                            <select
                                id="warehouse"
                                v-model="product.from_warehouse_location_id"
                                class="form-control kt-select2"
                                name="company"
                                >
                                <option />
                            </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label>Batch  <span style="color:red">*</span></label>
                          <input
                            v-model="product.batch"
                            type="text"
                            class="form-control"
                            placeholder="Enter Batch"
                          >
                      </div>
                      <div class="col-lg-3">
                        <label>Qty  <span style="color:red">*</span></label>
                            <input
                            v-model="product.qty"
                            type="text"
                            class="form-control"
                            placeholder="Enter Qty"
                        >
                      </div>
                      <div class="col-lg-3">
                        <label>Nett Weight <span style="color:red">*</span></label>
                            <input
                            v-model="product.nett_weight"
                            type="text"
                            class="form-control"
                            placeholder="Enter Nett Weight"
                        >
                      </div>
                      <div class="col-lg-3">
                        <label>Nett Weight Type<span style="color:red">*</span></label>
                            <select class="form-control" name="type" v-model="product.nett_weight_type">
                                <option value="kg">Kg</option>
                                <option value="meter">Meter</option>
                            </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label>Gross Weight <span style="color:red">*</span></label>
                            <input
                            v-model="product.gross_weight"
                            type="text"
                            class="form-control"
                            placeholder="Enter Nett Weight"
                          >
                      </div>
                      <div class="col-lg-3">
                        <label>Gross Weight Type<span style="color:red">*</span></label>
                            <select class="form-control" name="type" v-model="product.gross_weight_type">
                                <option value="kg">Kg</option>
                                <option value="meter">Meter</option>
                            </select>
                      </div>
                      <div class="col-lg-3">
                        <label>Dimension Type<span style="color:red">*</span></label>
                          <input
                            v-model="product.dimension_type"
                            type="text"
                            class="form-control"
                            placeholder="Enter Nett Weight"
                          >
                      </div>
                      <div class="col-lg-3">
                        <label>Length <span style="color:red">*</span></label>
                            <input
                              v-model="product.length"
                              type="text"
                              class="form-control"
                              placeholder="Enter Length"
                            >
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label> Weight<span style="color:red">*</span></label>
                            <input
                              v-model="product.weight"
                              type="text"
                              class="form-control"
                              placeholder="Enter Weight"
                            >
                      </div>
                      <div class="col-lg-3">
                        <label>Height<span style="color:red">*</span></label>
                          <input
                            v-model="product.height"
                            type="text"
                            class="form-control"
                            placeholder="Enter Height"
                          >
                      </div>
                      <div class="col-lg-3">
                        <label>Expired Date<span style="color:red">*</span></label>
                          <div class="input-group date">
                            <input type="text" class="form-control" readonly placeholder="Select date" id="date_exp" />
                            <div class="input-group-append">
                              <span class="input-group-text">
                                <i class="la la-calendar-check-o"></i>
                              </span>
                            </div>
                          </div>
                      </div>
                      <div class="col-lg-3">
                        <label>Description<span style="color:red">*</span></label>
                          <input
                            v-model="product.description"
                            type="text"
                            class="form-control"
                            placeholder="Enter Height"
                          >
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    <!-- </form> -->
                  </div>
              </div>
            </div>
          </div>
           
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

export default {
  data () {
    return {
       outgoing  : {
            company_id  : null,
            type    : null,
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
      product : {
        product_packing_id : null,
        from_warehouse_location_id : null,
        batch : null,
        qty : null,
        nett_weight : null,
        nett_weight_type : null,
        gross_weight : null,
        gross_weight_type : null,
        dimension_type : null,
        length : null,
        weight : null,
        height : null,
        description : null,
      },
      productDetail : null,
      expired : null,
      etd   : '',
      eta   : '',
      createdDate: '',
      updatedDate: '',
    }
  },
  async mounted () {
    await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: this.$route.params.id })
    const outgoingDetail    = this.$store.getters['outgoing/getOutgoingDetail'].result
    this.outgoing.company_id     = outgoingDetail.company_id
    this.outgoing.order_date     = outgoingDetail.order_date
    this.outgoing.transport_type     = outgoingDetail.transport_type
    this.outgoing.transport_number     = outgoingDetail.transport_number
    this.outgoing.form_country_id     = outgoingDetail.company_id
    this.outgoing.company_id     = outgoingDetail.form_country_id
    this.createdDate = moment(outgoingDetail.created_at).format('DD/MM/Y HH:mm:ss')
    this.updatedDate = moment(outgoingDetail.updated_at).format('DD/MM/Y HH:mm:ss')
    this.etd = moment(outgoingDetail.etd).format('DD/MM/Y')
    this.eta = moment(outgoingDetail.eta).format('DD/MM/Y')

    const product   = this.$store.getters['outgoing/getOutgoingDetail'].result.products
    this.productDetail = product
    this.expired = moment(product.expired_date).format('DD/MM/Y')

    $('#company').select2({
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
    const newOptionCompany = new Option(outgoingDetail.company_name, outgoingDetail.company_id, true, true)
    $('#company').append(newOptionCompany).trigger('change')
    $('#copany').on('change', function () {
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
              }
            }),
          }
        },
      },
    })
    const newOptionWarehouse = new Option(outgoingDetail.from_warehouse_name, outgoingDetail.from_warehouse_id, true, true)
    $('#warehouse_from').append(newOptionWarehouse).trigger('change')
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
    const newOptionWarehouseTo = new Option(outgoingDetail.to_warehouse_name, outgoingDetail.to_warehouse_id, true, true)
    $('#warehouse_to').append(newOptionWarehouseTo).trigger('change')
    $('#warehouse_to').on('change', function () {
      validator.element($(this))
    })

    const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')
    const app           = this
    await this.$store.dispatch('region/getCountries')
    this.countries = this.$store.getters['region/getCountries']
    $('#country_from').select2({
        placeholder: 'Select a country',
        allowClear : true,
        data       : this.countries,
    })
    $('#country_from').val(this.outgoing.country_id).trigger('change')
    $('#country_from').on('change', function () {
        validator.element($(this))
        if ($('#country_from').val()) {
        $('#state_from').val(null).trigger('change')
        $('#state_from').prop('disabled', false)
        app.getStatesByCountry($('#country_from').val())
        } else {
        $('#state_from').val(null).trigger('change')
        $('#city').val(null).trigger('change')
        $('#district').val(null).trigger('change')
        $('#state_from').prop('disabled', true)
        $('#city').prop('disabled', true)
        $('#district').prop('disabled', true)
        }
    })

    this.stateOption = $('#state_from').select2({
        placeholder: 'Select a state',
        allowClear : true,
        dataAdapter: customAdapter,
        data       : this.states,
    })
    await app.getStatesByCountry(this.outgoing.country_id)
    $('#state_from').val(this.outgoing.state_id).trigger('change')
    $('#state_from').on('change', function () {
        validator.element($(this))
        if ($('#state_from').val()) {
        $('#city').val(null).trigger('change')
        $('#city').prop('disabled', false)
        app.getCitiesByState($('#state_from').val())
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
    $('#country_to').val(this.outgoing.country_id).trigger('change')
    $('#country_to').on('change', function () {
        validator.element($(this))
        if ($('#country_to').val()) {
        $('#state_to').val(null).trigger('change')
        $('#state_to').prop('disabled', false)
        app.getStatesByCountryTo($('#country_to').val())
        } else {
        $('#state_to').val(null).trigger('change')
        $('#city').val(null).trigger('change')
        $('#district').val(null).trigger('change')
        $('#state_to').prop('disabled', true)
        $('#city').prop('disabled', true)
        $('#district').prop('disabled', true)
        }
    })

    this.stateOption = $('#state_to').select2({
        placeholder: 'Select a state',
        allowClear : true,
        dataAdapter: customAdapter,
        data       : this.states,
    })
    await app.getStatesByCountryTo(this.outgoing.country_id)
    $('#state_to').val(this.outgoing.state_id).trigger('change')
    $('#state_to').on('change', function () {
        validator.element($(this))
        if ($('#state_to').val()) {
        $('#city').val(null).trigger('change')
        $('#city').prop('disabled', false)
        app.getCitiesByState($('#state_to').val())
        } else {
        $('#city').val(null).trigger('change')
        $('#district').val(null).trigger('change')
        $('#city').prop('disabled', true)
        $('#district').prop('disabled', true)
        }
    })
  },
  methods: {
      async getStatesByCountry (id) {
        this.states = []
        await this.$store.dispatch('region/getStatesByCountry', { countryId: id })
        this.states = this.$store.getters['region/getStatesByCountry']
        this.stateOption.data('select2').dataAdapter.updateOptions(this.states)
    },
    async getCitiesByState (id) {
        this.cities = []
        await this.$store.dispatch('region/getCitiesByState', { stateId: id })
        this.cities = this.$store.getters['region/getCitiesByState']
        this.cityOption.data('select2').dataAdapter.updateOptions(this.cities)
    },
     async getStatesByCountryTo (id) {
        this.states = []
        await this.$store.dispatch('region/getStatesByCountry', { countryId: id })
        this.states = this.$store.getters['region/getStatesByCountry']
        this.stateOption.data('select2').dataAdapter.updateOptions(this.states)
    },
    async getCitiesByState (id) {
        this.cities = []
        await this.$store.dispatch('region/getCitiesByState', { stateId: id })
        this.cities = this.$store.getters['region/getCitiesByState']
        this.cityOption.data('select2').dataAdapter.updateOptions(this.cities)
    },
  },
}
</script>