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
              Packing Detail ({{ packing.company_name }})
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
                :value="packing.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Code</label>
              <input
                :value="packing.code"
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
                :value="packing.dimension_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Length</label>
              <input
                :value="packing.length"
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
                :value="packing.width"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Height</label>
              <input
                :value="packing.height"
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
                :value="packing.weight_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Weight</label>
              <input
                :value="packing.weight"
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
                :value="packing.description"
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
                :value="packing.company_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Status</label><br>
              <span
                :class="`btn btn-${status.class}`"
              > {{ status.text }} </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Created By</label>
              <input
                :value="packing.created_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Created Date</label>
              <input
                :value="createdDate"
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
                :value="packing.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Updated Date</label>
              <input
                :value="updatedDate"
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
import { STATUS } from '@/utils/constants'
import moment from 'moment'
export default {
  data () {
    return {
      packing         : [],
      createdDate     : '',
      updatedDate     : '',
      idCompanyEncoded: null,
      status          : [],
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('packing/getPackingDetail', { idPacking: atob(this.$route.params.id) })
      this.packing          = this.$store.getters['packing/getPackingDetail'].result
      this.idCompanyEncoded = btoa(this.packing.company_id)
      this.status           = STATUS[this.product.status]
      this.createdDate      = moment(this.packing.created_at).format('DD/MM/Y HH:mm:ss')
      if (this.updatedDate !== '' && this.updatedDate !== null)
        this.updatedDate      = moment(this.packing.updated_at).format('DD/MM/Y HH:mm:ss')
    } catch (error) {

    }
  },
}
</script>
