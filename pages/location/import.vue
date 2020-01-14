<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="location_form"
        ref="form"
        class="kt-form"
        @submit.prevent="importLocation()"
      >
        <div
          id="kt_page_portlet"
          class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
        >
          <div class="kt-portlet__head kt-portlet__head--lg">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="kt-font-brand la la-cloud-download" />
              </span>
              <h3 class="kt-portlet__head-title">
                Import Location
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/location"
                class="btn btn-clean kt-margin-r-10"
              >
                <i class="la la-arrow-left" />
                <span class="kt-hidden-mobile">Back</span>
              </a>
              <a
                href="/files/location-example.csv"
                class="btn btn-success kt-margin-r-10"
              >
                <i class="la la-download" />
                <span class="kt-hidden-mobile">Download Template</span>
              </a>
              <button
                type="submit"
                class="btn btn-brand"
              >
                <i class="la la-cloud-download" />
                <span class="kt-hidden-mobile">Import</span>
              </button>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Warehouse <span style="color:red">*</span></label>
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
                <label>File Browser <span style="color:red">*</span></label>
                <div />
                <div class="custom-file">
                  <input
                    id="input_file"
                    ref="file"
                    type="file"
                    class="custom-file-input"
                    name="input_file"
                  >
                  <label
                    class="custom-file-label"
                    for="input_file"
                  >Choose file</label>
                </div>
                <span class="form-text text-muted" />
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
      location: {
        warehouse_id: null,
        file        : null,
      },
    }
  },
  mounted () {
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

    $('#input_file').on('change', function () {
      validator.element($(this))
    })

    const validator = $('#location_form').validate({
      // define validation rules
      rules: {
        warehouse_id: { required: true },
        input_file  : { required: true, accept: 'text/csv' },
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
    async importLocation () {
      if ($('#location_form').valid()) {
        this.location.warehouse_id = parseInt($('#warehouse').val())
        this.location.file         = this.$refs.file.files[0]
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('location/importLocation', { data: this.location })
          const data      = this.$store.getters['location/getImportLocation']
          const parameter = {
            alertClass: 'alert-success',
            message   : data.general_response.response_message,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/location' }, 3000)
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
