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
                href="/master/user"
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
                <label for="country">User Type <span style="color:red">*</span></label>
                <select
                  id="user_type"
                  class="form-control kt-select2"
                  name="user_type"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select User Type </span>
              </div>
              <div
                id="select-warehouse"
                class="col-lg-6"
                style="display: none"
              >
                <label for="country">Warehouse <span style="color:red">*</span></label>
                <select
                  id="warehouse"
                  class="form-control kt-select2"
                  name="warehouse_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select Warehouse </span>
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
          <div class="kt-portlet__body">
            <!--begin: Datatable -->
            <table
              id="user_table"
              class="table table-hover table-checkable nowrap"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>View</th>
                  <th>Add</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in dataPrivilage"
                  :key="index"
                >
                  <td>{{ No + index }}</td>
                  <td>{{ row.module_name }}</td>
                  <td>
                    <input
                      v-model="row.view"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.add"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.edit"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.delete"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.cancel"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    >
                  </td>
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
import { USER_TYPE, USER_STAFF } from '@/utils/constants'
export default {
  data () {
    return {
      No  : 1,
      user: {
        username    : null,
        password    : null,
        full_name   : null,
        phone       : null,
        email       : null,
        user_type   : 0,
        address     : null,
        country_id  : null,
        state_id    : null,
        city_id     : null,
        district_id : null,
        company_id  : 0,
        warehouse_id: 0,
        description : null,
        privilege   : [],
      },
      dataPrivilage: [
        {
          module_name: 'Dashboard',
          module_code: 'DBD',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'Warehouse',
          module_code: 'WHE',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'location',
          module_code: 'LOC',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'user',
          module_code: 'USR',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'product-category',
          module_code: 'PCG',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'company',
          module_code: 'CMP',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'packing',
          module_code: 'PCK',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'product',
          module_code: 'PDC',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'kitting',
          module_code: 'KT',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'order',
          module_code: 'ODR',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'job-incoming',
          module_code: 'JIN',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'job-outgoing',
          module_code: 'JOG',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'job-damage',
          module_code: 'JDM',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'job-transfer',
          module_code: 'JTF',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
        {
          module_name: 'report',
          module_code: 'RPT',
          view       : 0,
          add        : 0,
          edit       : 0,
          delete     : 0,
          cancel     : 0,
        },
      ],
      states        : [],
      cities        : [],
      districts     : [],
      stateOption   : null,
      cityOption    : null,
      districtOption: null,
    }
  },
  async mounted () {
    $('#user_type').select2({
      placeholder: 'Select a user type',
      allowClear : true,
      data       : USER_TYPE,
    })
    $('#user_type').val(this.user.user_type).trigger('change')
    $('#user_type').on('change', function () {
      app.user.user_type                                        = parseInt(this.value)
      const style                                               = parseInt(this.value) === USER_STAFF ? 'block' : 'none'
      document.querySelector('#select-warehouse').style.display = style

      // add rules to warehouse id
      if (parseInt(this.value) === USER_STAFF)
        $('#warehouse').rules('add', { required: true })
      else
        $('#warehouse').rules('remove')
    })

    $('#warehouse').select2({
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
    $('#warehouse').on('change', function () {
      validator.element($(this))
    })
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

    const validator = $('#user_form').validate({
      // define validation rules
      rules: {
        username: {
          required : true,
          minlength: 6,
        },
        password: {
          required : true,
          minlength: 6,
        },
        full_name: { required: true },
        phone    : {
          required : true,
          digits   : true,
          minlength: 10,
        },
        email: {
          required : true,
          email    : true,
          minlength: 10,
        },
        user_type  : { required: true },
        address    : { required: true },
        country_id : { required: true },
        state_id   : { required: true },
        city_id    : { required: true },
        district_id: { required: true },
        company_id : { required: true },
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
    async addUser () {
      if ($('#user_form').valid()) {
        // await this.setDataPrivilage(data)
        this.user.privilege   = this.dataPrivilage
        this.user.country_id  = parseInt($('#country').val())
        this.user.state_id    = parseInt($('#state').val())
        this.user.city_id     = parseInt($('#city').val())
        this.user.district_id = parseInt($('#district').val())
        this.user.user_type   = parseInt($('#user_type').val())
        if (this.user.user_type === USER_STAFF)
          this.user.warehouse_id = parseInt($('#warehouse').val())
        else
          this.user.warehouse_id = 0
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('user/addUser', { data: this.user })
          const data      = this.$store.getters['user/getAddSuccess']
          const parameter = {
            alertClass: 'alert-success',
            message   : `User ${data.result.full_name} has been added`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/master/user' }, 3000)
        } catch (error) {
          const parameter = {
            alertClass: 'alert-danger',
            message   : error.message,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
        }
      }
    },
  },
}
</script>
