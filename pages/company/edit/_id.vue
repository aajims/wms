<template>
    <div class="row">
    <div class="col-lg-12">
      <form
        id="company_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="editCompany()"
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
                Edit Company
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/company"
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
                <label>Name <span style="color:red">*</span></label>
                <input
                  v-model="company.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter company name"
                >
              </div>
              <div class="col-lg-6">
                <label>Website <span style="color:red">*</span></label>
                <input
                  v-model="company.website"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter company web"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Email <span style="color:red">*</span></label>
                <input
                  v-model="company.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  v-model="company.phone"
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Enter phone"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="address">Address <span style="color:red">*</span></label>
                <textarea
                  id="address"
                  v-model="company.address"
                  class="form-control"
                  rows="3"
                  name="address"
                />
              </div>
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  v-model="company.description"
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
                  v-model="company.zip_code"
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
        data() {
            return {
                states   : [],
                cities   : [],
                districts: [],
                company  : {
                    name       : null,
                    website    : null,
                    phone      : null,
                    email      : null,
                    address    : null,
                    country_id : null,
                    state_id   : null,
                    city_id    : null,
                    district_id: null,
                    zip_code   : null,
                    description: null
                }
            }
        },
        async mounted() {
          await this.$store.dispatch('company/getCompanyDetail', { idCompany: this.$route.params.id })
          const companyDetail                   = this.$store.getters['company/getCompanyDetail'].result
          this.company.name                     = companyDetail.name
          this.company.website                  = companyDetail.website
          this.company.phone                    = companyDetail.phone
          this.company.email                    = companyDetail.email
          this.company.address                  = companyDetail.address
          this.company.country_id               = companyDetail.country_id
          this.company.state_id                 = companyDetail.state_id
          this.company.city_id                  = companyDetail.city_id
          this.company.district_id              = companyDetail.district_id
          this.company.zip_code                 = companyDetail.zip_code
          this.company.description              = companyDetail.description

            const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')
            const app           = this
            await this.$store.dispatch('region/getCountries')
            this.countries = this.$store.getters['region/getCountries']
            $('#country').select2({
              placeholder: 'Select a country',
              allowClear : true,
              data       : this.countries,
            })
            $('#country').val(this.company.country_id).trigger('change')
            $('#country').on('change', function () {
              validator.element($(this))
              if ($('#country').val()) {
                $('#state').val(null).trigger('change')
                $('#state').prop('disabled', false)
                app.getStatesByCountry($('#country').val())
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
              dataAdapter: customAdapter,
              data       : this.states,
            })
            await app.getStatesByCountry(this.company.country_id)
            $('#state').val(this.company.state_id).trigger('change')
            $('#state').on('change', function () {
              validator.element($(this))
              if ($('#state').val()) {
                $('#city').val(null).trigger('change')
                $('#city').prop('disabled', false)
                app.getCitiesByState($('#state').val())
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
              dataAdapter: customAdapter,
              data       : this.cities,
            })
            await app.getCitiesByState(this.company.state_id)
            $('#city').val(this.company.city_id).trigger('change')
            $('#city').on('change', function () {
              validator.element($(this))
              if ($('#city').val()) {
                $('#district').val(null).trigger('change')
                $('#district').prop('disabled', false)
                app.getDistrictsByCity($('#city').val())
              } else {
                $('#district').val(null).trigger('change')
                $('#district').prop('disabled', true)
              }
            })

            this.districtOption = $('#district').select2({
              placeholder: 'Select a district',
              allowClear : true,
              dataAdapter: customAdapter,
              data       : this.states,
            })
            await app.getDistrictsByCity(this.company.city_id)
            $('#district').val(this.company.district_id).trigger('change')
            $('#district').on('change', function () {
              validator.element($(this))
            })
            const validator = $('#company_form').validate({
            // define validation rules
            rules: {
                name : { required: true },
                email: {
                required : true,
                email    : true,
                minlength: 10,
                },
                phone: {
                required: true,
                digits  : true,
                },
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
            async getDistrictsByCity (id) {
              this.districts = []
              await this.$store.dispatch('region/getDistrictsByCity', { cityId: id })
              this.districts = this.$store.getters['region/getDistrictsByCity']
              this.districtOption.data('select2').dataAdapter.updateOptions(this.districts)
            },
            async editCompany () {
            if ($('#company_form').valid()) {
              this.company.country_id  = parseInt($('#country').val())
              this.company.state_id    = parseInt($('#state').val())
              this.company.city_id     = parseInt($('#city').val())
              this.company.district_id = parseInt($('#district').val())
              this.company.status      = 1
              try {
                  this.$nuxt.$loading.start()
                  await this.$store.dispatch('company/editCompany', { idCompany: this.$route.params.id, data: this.company })
                  const data      = this.$store.getters['company/getEditCompany']
                  const parameter = {
                    alertClass: 'alert-success',
                    message   : `company ${data.result.name} has been edited`,
                  }
                  this.$nuxt.$emit('alertShow', parameter)
                  this.$nuxt.$loading.finish()
                  // eslint-disable-next-line no-undef
                  KTUtil.scrollTop()
                  setTimeout(function () { window.location.href = '/company' }, 3000)
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