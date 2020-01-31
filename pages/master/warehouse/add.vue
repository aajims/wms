<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="warehouse_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="addWarehouse()"
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
                Add Warehouse
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/master/warehouse"
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
                  v-model="warehouse.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter warehouse name"
                >
              </div>
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>
                <input
                  v-model="warehouse.code"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter warehouse code"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Email <span style="color:red">*</span></label>
                <input
                  v-model="warehouse.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  v-model="warehouse.phone"
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Enter phone"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Capacity</label>
                <input
                  v-model="warehouse.capacity"
                  type="text"
                  class="form-control"
                  name="capacity"
                  placeholder="Enter warehouse capacity"
                >
              </div>
              <div class="col-lg-6">
                <label>PIC <span style="color:red">*</span></label>
                <input
                  v-model="warehouse.pic"
                  type="text"
                  class="form-control"
                  name="pic"
                  placeholder="Enter warehouse pic"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="address">Address <span style="color:red">*</span></label>
                <textarea
                  id="address"
                  v-model="warehouse.address"
                  class="form-control"
                  rows="3"
                  name="address"
                />
              </div>
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  v-model="warehouse.description"
                  class="form-control"
                  rows="3"
                  name="description"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Country <span style="color:red">*</span></label>
                <select
                  id="country"
                  class="form-control kt-select2"
                  name="country_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label for="state">State <span style="color:red">*</span></label>
                <select
                  id="state"
                  class="form-control kt-select2"
                  name="state_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="city">City <span style="color:red">*</span></label>
                <select
                  id="city"
                  class="form-control kt-select2"
                  name="city_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a state </span>
              </div>
              <div class="col-lg-6">
                <label for="district">District <span style="color:red">*</span></label>
                <select
                  id="district"
                  class="form-control kt-select2"
                  name="district_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a city </span>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Postcode <span style="color:red">*</span></label>
                <input
                  v-model="warehouse.zip_code"
                  type="text"
                  class="form-control"
                  name="zip_code"
                  placeholder="Enter postcode"
                >
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      countries: [],
      states   : [],
      cities   : [],
      districts: [],
      warehouse: {
        name       : null,
        code       : null,
        capacity   : null,
        phone      : null,
        email      : null,
        pic        : null,
        address    : null,
        country_id : null,
        state_id   : null,
        city_id    : null,
        district_id: null,
        zip_code   : null,
        description: null,
      },
      stateOption   : null,
      cityOption    : null,
      districtOption: null,
    }
  },
  async mounted () {
    const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')

    await this.$store.dispatch('region/getCountries')
    this.countries = this.$store.getters['region/getCountries']
    const app      = this
    $('#country').select2({
      placeholder: 'Select a country',
      allowClear : true,
      data       : this.countries,
    })
    $('#country').on('change', function () {
      validator.element($(this))
      if ($('#country').val()) {
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

    this.stateOption = $('#state').select2({
      placeholder: 'Select a state',
      allowClear : true,
      disabled   : true,
      dataAdapter: customAdapter,
      data       : this.states,
    })
    $('#state').on('change', function () {
      validator.element($(this))
      if ($('#state').val()) {
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

    this.cityOption = $('#city').select2({
      placeholder: 'Select a city',
      allowClear : true,
      disabled   : true,
      dataAdapter: customAdapter,
      data       : this.cities,
    })
    $('#city').on('change', function () {
      validator.element($(this))
      if ($('#city').val()) {
        $('#district').val(null).trigger('change')
        $('#district').prop('disabled', false)
        app.getDistrictsByCity()
      } else {
        $('#district').val(null).trigger('change')
        $('#district').prop('disabled', true)
      }
    })

    this.districtOption = $('#district').select2({
      placeholder: 'Select a district',
      allowClear : true,
      disabled   : true,
      dataAdapter: customAdapter,
      data       : this.states,
    })
    $('#district').on('change', function () {
      validator.element($(this))
    })

    const validator = $('#warehouse_form').validate({
      // define validation rules
      rules: {
        name : { required: true },
        code : { required: true },
        email: {
          required : true,
          email    : true,
          minlength: 10,
        },
        phone: {
          required: true,
          digits  : true,
        },
        pic        : { required: true },
        address    : { required: true },
        country_id : { required: true },
        state_id   : { required: true },
        city_id    : { required: true },
        district_id: { required: true },
        zip_code   : {
          required: true,
          digits  : true,
        },
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
  },
  methods: {
    async getStatesByCountry () {
      this.states = []
      await this.$store.dispatch('region/getStatesByCountry', { countryId: $('#country').val() })
      this.states = this.$store.getters['region/getStatesByCountry']
      this.stateOption.data('select2').dataAdapter.updateOptions(this.states)
    },
    async getCitiesByState () {
      this.cities = []
      await this.$store.dispatch('region/getCitiesByState', { stateId: $('#state').val() })
      this.cities = this.$store.getters['region/getCitiesByState']
      this.cityOption.data('select2').dataAdapter.updateOptions(this.cities)
    },
    async getDistrictsByCity () {
      this.districts = []
      await this.$store.dispatch('region/getDistrictsByCity', { cityId: $('#city').val() })
      this.districts = this.$store.getters['region/getDistrictsByCity']
      this.districtOption.data('select2').dataAdapter.updateOptions(this.districts)
    },
    async addWarehouse () {
      if ($('#warehouse_form').valid()) {
        this.warehouse.country_id  = parseInt($('#country').val())
        this.warehouse.state_id    = parseInt($('#state').val())
        this.warehouse.city_id     = parseInt($('#city').val())
        this.warehouse.district_id = parseInt($('#district').val())
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('warehouse/addWarehouse', { data: this.warehouse })
          const data      = this.$store.getters['warehouse/getAddSuccess']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Warehouse ${data.result.name} has been added`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/master/warehouse' }, 3000)
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
