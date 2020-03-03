<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="packing_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="editPacking()"
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
                Edit Packing ({{ company_name }})
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                :href="`/company/packing/list/${idCompanyEncoded}`"
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
                  v-model="packing.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter packing name"
                >
              </div>
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>
                <input
                  v-model="packing.code"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter packing code"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Dimension Type <span style="color:red">*</span></label>
                <select
                  id="dimension_type"
                  class="form-control kt-select2"
                  name="dimension_type"
                >
                  <option />
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label>Length <span style="color:red">*</span></label>
                <input
                  v-model="packing.length"
                  type="text"
                  class="form-control"
                  name="length"
                  placeholder="Enter packing length"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Width <span style="color:red">*</span></label>
                <input
                  v-model="packing.width"
                  type="text"
                  class="form-control"
                  name="width"
                  placeholder="Enter packing width"
                >
              </div>
              <div class="col-lg-6">
                <label>Height <span style="color:red">*</span></label>
                <input
                  v-model="packing.height"
                  type="text"
                  class="form-control"
                  name="height"
                  placeholder="Enter packing height"
                >
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
                <label>Weight <span style="color:red">*</span></label>
                <input
                  v-model="packing.weight"
                  type="text"
                  class="form-control"
                  name="weight"
                  placeholder="Enter packing weight"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  v-model="packing.description"
                  class="form-control"
                  rows="3"
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
      company_name: null,
      packing     : {
        name          : null,
        code          : null,
        dimension_type: null,
        length        : null,
        width         : null,
        height        : null,
        weight_type   : null,
        weight        : null,
        company_id    : null,
        description   : null,
        status        : null,
      },
      idCompanyEncoded: null,
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('packing/getPackingDetail', { idPacking: atob(this.$route.params.id) })
      this.packingDetail          = this.$store.getters['packing/getPackingDetail'].result
      this.idCompanyEncoded       = btoa(this.packingDetail.company_id)
      this.packing.name           = this.packingDetail.name
      this.packing.code           = this.packingDetail.code
      this.packing.dimension_type = this.packingDetail.dimension_type
      this.packing.length         = this.packingDetail.length
      this.packing.width          = this.packingDetail.width
      this.packing.height         = this.packingDetail.height
      this.packing.weight_type    = this.packingDetail.weight_type
      this.packing.weight         = this.packingDetail.weight
      this.packing.company_id     = this.packingDetail.company_id
      this.packing.description    = this.packingDetail.description
      this.packing.status         = this.packingDetail.status
      this.company_name           = this.packingDetail.company_name
    } catch (error) {

    }

    $('#dimension_type').select2({
      data: DIMENSION_TYPE, placeholder: 'Select a dimension type', allowClear: true,
    })
    $('#dimension_type').val(this.packing.dimension_type).trigger('change')
    $('#dimension_type').on('change', function () {
      validator.element($(this))
    })

    $('#weight_type').select2({
      data: WEIGHT_TYPE, placeholder: 'Select a weight type', allowClear: true,
    })
    $('#weight_type').val(this.packing.weight_type).trigger('change')
    $('#weight_type').on('change', function () {
      validator.element($(this))
    })

    const validator = $('#packing_form').validate({
      // define validation rules
      rules: {
        name  : { required: true },
        code  : { required: true },
        length: {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
        width: {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
        height: {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
        weight: {
          required      : true,
          number        : true,
          positiveNumber: true,
        },
        dimension_type: { required: true },
        weight_type   : { required: true },
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

    $.validator.addMethod('positiveNumber',
      function (value) {
        return Number(value) >= 0
      }, 'Enter a positive number.')
  },
  methods: {
    async editPacking () {
      const app = this
      if ($('#packing_form').valid()) {
        this.packing.length         = parseFloat(this.packing.length)
        this.packing.width          = parseFloat(this.packing.width)
        this.packing.height         = parseFloat(this.packing.height)
        this.packing.weight         = parseFloat(this.packing.weight)
        this.packing.weight_type    = $('#weight_type').val()
        this.packing.dimension_type = $('#dimension_type').val()
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('packing/editPacking', { idPacking: atob(this.$route.params.id), data: this.packing })
          const data      = this.$store.getters['packing/getEditPacking']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Packing ${data.result.name} has been edited`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = `/company/packing/list/${app.idCompanyEncoded}` }, 3000)
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
