<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="warehouse_form"
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
                Add Warehouse
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/warehouse"
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
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter warehouse name"
                >
              </div>
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>
                <input
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
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Enter phone"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Capacity <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="capacity"
                  placeholder="Enter warehouse capacity"
                >
              </div>
              <div class="col-lg-6">
                <label>PIC <span style="color:red">*</span></label>
                <input
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
                  class="form-control"
                  rows="3"
                  name="address"
                />
              </div>
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
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
                  <option
                    v-for="country in $store.state.region.countries"
                    :key="country.id"
                    :value="country.id"
                  >
                    {{ country.name }}
                  </option>
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
                  <option
                    v-for="state in states"
                    :key="state.id"
                    :value="state.id"
                  >
                    {{ state.name }}
                  </option>
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
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id"
                  >
                    {{ city.name }}
                  </option>
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
                  <option
                    v-for="district in districts"
                    :key="district.id"
                    :value="district.id"
                  >
                    {{ district.name }}
                  </option>
                </select>
                <span class="form-text text-muted">Please select a city </span>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Postcode <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="zip_code"
                  placeholder="Enter postcode"
                >
              </div>
              <div class="col-lg-6">
                <label for="location">Location <span style="color:red">*</span></label>
                <div class="switch-button">
                  <input
                    id="location"
                    name="location"
                    data-switch="true"
                    type="checkbox"
                    checked="checked"
                    data-on-text="Yes"
                    data-off-text="No"
                    data-on-color="brand"
                    data-off-color="danger"
                  >
                  <span class="form-text text-muted" />
                </div>
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
  head: { script: [{ src: '/js/warehouse/add.js', body: true }] },
  data () {
    return {
      states   : [],
      cities   : [],
      districts: [],
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('region/getCountries')
  },
  mounted () {
    const app = this
    $('[data-switch=true]').bootstrapSwitch()
    $('[data-switch=true]').on('switchChange.bootstrapSwitch', function () {
      validator.element($(this)) // validate element
    })

    $('#country').select2({ placeholder: 'Select a country', allowClear: true })
    $('#country').on('change', function () {
      validator.element($(this))
      if ($('#country').val()) {
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

    $('#state').select2({
      placeholder: 'Select a state', allowClear: true, disabled: true,
    })
    $('#state').on('change', function () {
      validator.element($(this))
      if ($('#state').val()) {
        $('#city').prop('disabled', false)
        app.getCitiesByState()
      } else {
        $('#city').val(null).trigger('change')
        $('#district').val(null).trigger('change')
        $('#city').prop('disabled', true)
        $('#district').prop('disabled', true)
      }
    })

    $('#city').select2({
      placeholder: 'Select a city', allowClear: true, disabled: true,
    })
    $('#city').on('change', function () {
      validator.element($(this))
      if ($('#city').val()) {
        $('#district').prop('disabled', false)
        app.getDistrictsByCity()
      } else {
        $('#district').val(null).trigger('change')
        $('#district').prop('disabled', true)
      }
    })

    $('#district').select2({
      placeholder: 'Select a district', allowClear: true, disabled: true,
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
        capacity   : { required: true },
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
        location: { required: true },
      },

      // display error alert on form submit
      invalidHandler: function (event, validator) {
        const alert = $('#kt_form_1_msg')
        alert.removeClass('kt--hide').show()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()

        event.preventDefault()
      },

      submitHandler: function (form) {
        // form[0].submit(); // submit the form
        return false
      },
    })
  },
  methods: {
    async getStatesByCountryModel () {
      await this.$store.dispatch('region/getStatesByCountry', { countryId: $('#country').val() })
      this.states = this.$store.getters['region/getStatesByCountry']
    },
    async getStatesByCountry () {
      await this.getStatesByCountryModel()
      $('#country').select2({ placeholder: 'Select a country', allowClear: true })
      $('#state').select2({ placeholder: 'Select a state', allowClear: true })
      $('#city').select2({
        placeholder: 'Select a city', allowClear: true, disabled: true,
      })
      $('#district').select2({
        placeholder: 'Select a district', allowClear: true, disabled: true,
      })
    },
    async getCitiesByStateModel () {
      await this.$store.dispatch('region/getCitiesByState', { stateId: $('#state').val() })
      this.cities = this.$store.getters['region/getCitiesByState']
    },
    async getCitiesByState () {
      await this.getCitiesByStateModel()
      $('#country').select2({ placeholder: 'Select a country', allowClear: true })
      $('#state').select2({ placeholder: 'Select a state', allowClear: true })
      $('#city').select2({ placeholder: 'Select a city', allowClear: true })
      $('#district').select2({
        placeholder: 'Select a district', allowClear: true, disabled: true,
      })
    },
    async getDistrictsByCityModel () {
      await this.$store.dispatch('region/getDistrictsByCity', { cityId: $('#city').val() })
      this.districts = this.$store.getters['region/getDistrictsByCity']
    },
    async getDistrictsByCity () {
      await this.getDistrictsByCityModel()
      $('#country').select2({ placeholder: 'Select a country', allowClear: true })
      $('#state').select2({ placeholder: 'Select a state', allowClear: true })
      $('#city').select2({ placeholder: 'Select a city', allowClear: true })
      $('#district').select2({ placeholder: 'Select a district', allowClear: true })
    },
  },
}
</script>
