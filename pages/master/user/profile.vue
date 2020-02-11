<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="user_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="updateUser()"
      >
      <div
        id="kt_page_portlet"
        class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
      >
        <div class="kt-portlet__head kt-portlet__head--lg">
          <div class="kt-portlet__head-label">
            <span class="kt-portlet__head-icon">
              <i class="kt-font-brand flaticon2-user" />
            </span>
            <h3 class="kt-portlet__head-title">
              User Profile
            </h3>
          </div>
           <div class="kt-portlet__head-toolbar">
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
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                placeholder="Input Password"
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Full Name</label>
              <input
                type="text"
                name="full_name"
                class="form-control"
                v-model="user.full_name"
                placeholder="Input Full Name"
              >
            </div>
            <div class="col-lg-6">
              <label>Email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                v-model="user.email"
                placeholder="Input Email Valid"
                disabled
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                class="form-control"
                v-model="user.phone"
                placeholder="Input Phone Number"
                disabled
              >
            </div>
            <div class="col-lg-6">
              <label>Address</label>
              <textarea
                v-model="user.address"
                name="address"
                class="form-control"
                rows="3"
              />
            </div>
            <input type="hidden" v-model="user.company_id">
            <input type="hidden" v-model="user.warehouse_id">
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
        data() {
        return {
            No : 1,
            user: {
              password    : null,
              full_name   : null,
              phone       : null,
              email       : null,
              user_type   : 2,
              address     : null,
              country_id  : null,
              state_id    : null,
              city_id     : null,
              district_id : null,
              company_id  : 0,
              warehouse_id: 0,
            },
            states        : [],
            cities        : [],
            districts     : [],
            stateOption   : null,
            cityOption    : null,
            districtOption: null,
            }
        },
       async mounted () {
        const app           = this
        try {
        await this.$store.dispatch('user/userProfile')
        const userDetail  = this.$store.getters['user/getUserProfile'].result
          this.user.full_name  = userDetail.full_name
          this.user.phone    = userDetail.phone
          this.user.email    = userDetail.email
          this.user.address  = userDetail.address
          this.user.company_id  = userDetail.company_id
          this.user.country_id = userDetail.country_id
          this.user.state_id = userDetail.state_id
          this.user.city_id = userDetail.city_id
          this.user.district_id = userDetail.district_id
        } catch (error) {}
        const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')

        await this.$store.dispatch('region/getCountries')
        this.countries = this.$store.getters['region/getCountries']
        $('#country').select2({
        placeholder: 'Select a country',
        allowClear : true,
        data       : this.countries,
        })
        $('#country').val(this.user.country_id).trigger('change')
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
        await app.getStatesByCountry(this.user.country_id)
        $('#state').val(this.user.state_id).trigger('change')
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
        await app.getCitiesByState(this.user.state_id)
        $('#city').val(this.user.city_id).trigger('change')
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
        await app.getDistrictsByCity(this.user.city_id)
        $('#district').val(this.user.district_id).trigger('change')
        $('#district').on('change', function () {
        validator.element($(this))
        })
        const validator = $('#user_form').validate({
        // define validation rules
        rules: {
            full_name   : { required: true },
            address    : { required: true },
            country_id : { required: true },
            state_id   : { required: true },
            city_id    : { required: true },
            district_id: { required: true },
        // eslint-disable-next-line object-curly-newline
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
         async getStatesByCountry (id) {
            this.states = []
            await this.$store.dispatch('region/getStatesByCountry', { countryId: $('#country').val() })
            this.states = this.$store.getters['region/getStatesByCountry']
            this.stateOption.data('select2').dataAdapter.updateOptions(this.states)
            },
            async getCitiesByState (id) {
            this.cities = []
            await this.$store.dispatch('region/getCitiesByState', { stateId: $('#state').val() })
            this.cities = this.$store.getters['region/getCitiesByState']
            this.cityOption.data('select2').dataAdapter.updateOptions(this.cities)
            },
            async getDistrictsByCity (id) {
            this.districts = []
            await this.$store.dispatch('region/getDistrictsByCity', { cityId: $('#city').val() })
            this.districts = this.$store.getters['region/getDistrictsByCity']
            this.districtOption.data('select2').dataAdapter.updateOptions(this.districts)
            },
           async updateUser () {
            if ($('#user_form').valid()) {
              this.user.country_id  = parseInt($('#country').val())
              this.user.state_id    = parseInt($('#state').val())
              this.user.city_id     = parseInt($('#city').val())
              this.user.district_id = parseInt($('#district').val())
              this.$delete(this.user, 'email')
              this.$delete(this.user, 'phone')
              try {
                  this.$nuxt.$loading.start()
                  await this.$store.dispatch('user/editProfile', { data: this.user })
                  const data      = this.$store.getters['user/getEditProfile']
                  const parameter = {
                    alertClass: 'alert-success',
                    message   : `User ${data.result.full_name} has been edited`,
                  }
                  this.$nuxt.$emit('alertShow', parameter)
                  this.$nuxt.$loading.finish()
                  // eslint-disable-next-line no-undef
                  KTUtil.scrollTop()
                  setTimeout(function () { window.location.href = '/dashboard' }, 3000)
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
            }
       },
    }
</script>