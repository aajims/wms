<template>
  <div class="row">
    <div class="col-lg-12">
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
              Packing Detail
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
          </div>
        </div>
        <div class="kt-portlet__body">
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Name</label>
              <input
                v-model="packing.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Code</label>
              <input
                v-model="packing.code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Dimension Type</label>
              <input
                v-model="packing.dimension_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Length</label>
              <input
                v-model="packing.length"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Width</label>
              <input
                v-model="packing.width"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Height</label>
              <input
                v-model="packing.height"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Weight Type</label>
              <input
                v-model="packing.weight_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Weight</label>
              <input
                v-model="packing.weight"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-12">
              <label for="address">Description</label>
              <textarea
                v-model="packing.description"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="city">Company</label>
              <input
                v-model="packing.company_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Status</label><br>
              <span
                v-if="packing.status === 1"
                class="btn btn-success"
              > Active </span>
              <span
                v-else
                class="btn btn-danger"
              > Inactive </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Created By</label>
              <input
                v-model="packing.created_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Created Date</label>
              <input
                v-model="createdDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Updated By</label>
              <input
                v-model="packing.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Updated Date</label>
              <input
                v-model="updatedDate"
                type="text"
                class="form-control"
                readonly
              >
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
      packing         : [],
      createdDate     : '',
      updatedDate     : '',
      idCompanyEncoded: null,
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('packing/getPackingDetail', { idPacking: atob(this.$route.params.id) })
      this.packing          = this.$store.getters['packing/getPackingDetail'].result
      this.idCompanyEncoded = btoa(this.packing.company_id)
      this.createdDate      = moment(this.packing.created_at).format('DD/MM/Y HH:mm:ss')
      this.updatedDate      = moment(this.packing.updated_at).format('DD/MM/Y HH:mm:ss')
    } catch (error) {

    }
  },
}
</script>
