<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="location_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="editLocation()"
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
                Edit Location
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/master/location"
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
                  v-model="location.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter location name"
                >
              </div>
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>
                <input
                  v-model="location.code"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter code"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Capacity Dimension <span style="color:red">*</span></label>
                <select
                  id="capacity_dimension_type"
                  class="form-control kt-select2"
                  name="capacity_dimension_type"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label>Capacity<span style="color:red">*</span></label>
                <input
                  v-model="location.capacity"
                  type="text"
                  class="form-control"
                  name="capacity"
                  placeholder="Enter capacity"
                >
                <span class="form-text text-muted">CMB Calculator : <a
                  href="http://www.cbmcalculator.com/"
                  target="_blank"
                >Click Here!</a></span>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Level <span style="color:red">*</span></label>
                <input
                  v-model="location.level"
                  type="text"
                  class="form-control"
                  placeholder="Enter level"
                  name="level"
                >
              </div>
              <div class="col-lg-6">
                <label for="country">Warehouse <span style="color:red">*</span></label>
                <select
                  id="warehouse"
                  class="form-control kt-select2"
                  name="warehouse_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Weight Type <span style="color:red">*</span></label>
                <select
                  id="weight_type"
                  class="form-control kt-select"
                  name="weight_type"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label>Max Weight <span style="color:red">*</span></label>
                <input
                  v-model="location.weight_max"
                  type="text"
                  class="form-control"
                  name="weight_max"
                  placeholder="Enter max weight"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Blocked By</label>
                <select
                  id="blocked_by"
                  class="form-control kt-select2"
                  name="company_id"
                >
                  <option />
                </select>
              </div>
              <div class="col-lg-2">
                <label>&nbsp;</label>
                <div class="kt-checkbox-list">
                  <label class="kt-checkbox kt-checkbox--brand">
                    <input
                      v-model="location.bonded_location"
                      type="checkbox"
                    > Bonded Location
                    <span />
                  </label>
                </div>
              </div>
              <div class="col-lg-2">
                <label>&nbsp;</label>
                <div class="kt-checkbox-list">
                  <label class="kt-checkbox kt-checkbox--brand">
                    <input
                      v-model="location.stock_quarantine"
                      type="checkbox"
                    > Stock Quarantine
                    <span />
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  v-model="location.description"
                  class="form-control"
                  rows="3"
                  name="description"
                />
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
// eslint-disable-next-line node/no-deprecated-api
import { DIMENSION_TYPE, WEIGHT_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      location: {
        name                   : null,
        code                   : null,
        level                  : null,
        capacity_dimension_type: null,
        capacity               : null,
        weight_max             : null,
        weight_type            : null,
        bonded_location        : null,
        stock_quarantine       : null,
        warehouse_id           : null,
        company_id             : null,
        description            : null,
      },
    }
  },
  async mounted () {
    await this.$store.dispatch('location/getLocationDetail', { idLocation: atob(this.$route.params.id) })
    const locationDetail                  = this.$store.getters['location/getLocationDetail'].result
    this.location.name                    = locationDetail.name
    this.location.code                    = locationDetail.code
    this.location.level                   = locationDetail.level
    this.location.capacity_dimension_type = locationDetail.capacity_dimension_type
    this.location.capacity                = locationDetail.capacity
    this.location.weight_type             = locationDetail.weight_type
    this.location.weight_max              = locationDetail.weight_max
    this.location.bonded_location         = locationDetail.bonded_location
    this.location.stock_quarantine        = locationDetail.stock_quarantine
    this.location.warehouse_id            = locationDetail.warehouse_id
    this.location.company_id              = locationDetail.company_id
    this.location.description             = locationDetail.description

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
    const newOptionWarehouse = new Option(locationDetail.warehouse_name, locationDetail.warehouse_id, true, true)
    $('#warehouse').append(newOptionWarehouse).trigger('change')
    $('#warehouse').on('change', function () {
      validator.element($(this))
    })

    $('#capacity_dimension_type').select2({
      data: DIMENSION_TYPE, placeholder: 'Select a capacity dimension type', allowClear: true,
    })
    $('#capacity_dimension_type').val(this.location.capacity_dimension_type).trigger('change')
    $('#capacity_dimension_type').on('change', function () {
      validator.element($(this))
    })

    $('#weight_type').select2({
      data: WEIGHT_TYPE, placeholder: 'Select a weight type', allowClear: true,
    })
    $('#weight_type').val(this.location.weight_type).trigger('change')

    $('#blocked_by').select2({
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
    if (locationDetail.company_id !== 0) {
      const newOptionCompany = new Option(locationDetail.company_name, locationDetail.company_id, true, true)
      $('#blocked_by').append(newOptionCompany).trigger('change')
    }
    $('#blocked_by').on('change', function () {
      validator.element($(this))
    })

    const validator = $('#location_form').validate({
      // define validation rules
      rules: {
        name                   : { required: true },
        code                   : { required: true },
        level                  : { required: true },
        warehouse_id           : { required: true },
        capacity               : { required: true, digits: true },
        capacity_dimension_type: { required: true },
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
  },
  methods: {
    async editLocation () {
      if ($('#location_form').valid()) {
        this.location.capacity                = parseInt(this.location.capacity)
        this.location.weight_max              = parseInt(this.location.weight_max)
        this.location.warehouse_id            = parseInt($('#warehouse').val())
        this.location.company_id              = parseInt($('#blocked_by').val())
        this.location.weight_type             = $('#weight_type').val()
        this.location.capacity_dimension_type = $('#capacity_dimension_type').val()
        this.location.bonded_location         = this.location.bonded_location ? 1 : 0
        this.location.stock_quarantine        = this.location.stock_quarantine ? 1 : 0
        this.location.status                  = 1
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('location/editLocation', { idLocation: atob(this.$route.params.id), data: this.location })
          const data      = this.$store.getters['location/getEditLocation']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Location ${data.result.name} has been edited`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/master/location' }, 3000)
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
