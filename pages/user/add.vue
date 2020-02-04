<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="user_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="addUser()"
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
                Add User
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/user"
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
                <label>Username <span style="color:red">*</span></label>
                <input
                  v-model="user.username"
                  type="text"
                  class="form-control"
                  name="username"
                  placeholder="Enter Username"
                >
              </div>
              <div class="col-lg-6">
                <label>Password <span style="color:red">*</span></label>
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Enter Password"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Full Name <span style="color:red">*</span></label>
                <input
                  v-model="user.full_name"
                  type="text"
                  class="form-control"
                  name="full_name"
                  placeholder="Enter Full Name"
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  v-model="user.phone"
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Enter Phone"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Email <span style="color:red">*</span></label>
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  name="email"
                  placeholder="Enter Email Valid"
                >
              </div>
              <div class="col-lg-6">
                <label>Address <span style="color:red">*</span></label>
                <textarea
                  v-model="user.address"
                  type="text"
                  rows="3"
                  class="form-control"
                  name="address"
                  placeholder="Enter Address"
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
                <span class="form-text text-muted">Please select a country </span>
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
                <span class="form-text text-muted">Please select a state </span>
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
                <span class="form-text text-muted">Please select a city </span>
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
                <span class="form-text text-muted">Please select a district </span>
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
      user: {
        username        : null,
        password        : null,
        full_name       : null,
        phone           : null,
        email           : null,
        user_type       : 3,
        address         : null,
        country_id      : null,
        state_id        : null,
        city_id         : null,
        district_id     : null,
        company_id       : null,
        warehouse_id     : null,
        description     : null,
      },
      states   : [],
      cities   : [],
      districts: [],
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

    $('#user_form').validate({
      // define validation rules
      rules: {
        username    : { required: true },
        password    : { required: true },
        full_name   : { required: true },
        phone: {
          required: true,
          digits  : true,
        },
        email: {
        required : true,
        email    : true,
        minlength: 10,
        },
        address    : { required: true },
        country_id : { required: true },
        state_id   : { required: true },
        city_id    : { required: true },
        district_id: { required: true },
        company_id:  { required: true },
        warehouse_id: { required: true },
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
    async addUser () {
      try {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('user/addUser', { data: this.user })
        const data      = this.$store.getters['user/getAddSuccess']
        const parameter = {
          alertClass: 'alert-success',
          message   : `User ${data.result.name} has been added`,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
        setTimeout(function () { window.location.href = '/user' }, 3000)
      } catch (error) {
        const parameter = {
          alertClass: 'alert-danger',
          message   : error.message,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>
