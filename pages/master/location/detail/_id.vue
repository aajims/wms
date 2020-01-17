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
              Location Detail
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
          </div>
        </div>
        <div class="kt-portlet__body">
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Name</label>
              <input
                v-model="location.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Code</label>
              <input
                v-model="location.code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Capacity Dimension</label>
              <input
                v-model="location.capacity_dimension_type"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Capacity</label>
              <input
                v-model="location.capacity"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Level</label>
              <input
                v-model="location.level"
                type="text"
                class="form-control"
                placeholder="Enter level"
                name="level"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Capacity Max</label>
              <input
                v-model="location.capacity_max"
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
                v-model="location.weight_type"
                type="text"
                class="form-control"
                placeholder="Enter level"
                name="level"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Max Weight</label>
              <input
                v-model="location.weight_max"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Warehouse</label>
              <input
                v-model="location.warehouse_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Blocked By</label>
              <input
                v-model="location.company_name"
                type="text"
                class="form-control"
                readonly
              >
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
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label>&nbsp;</label>
              <div class="kt-checkbox-list">
                <label class="kt-checkbox kt-checkbox--brand">
                  <input
                    type="checkbox"
                    disabled="disabled"
                    :checked="location.bonded_location"
                  > Bonded Location
                  <span />
                </label>
                <label class="kt-checkbox kt-checkbox--brand">
                  <input
                    type="checkbox"
                    disabled="disabled"
                    :checked="location.stock_quarantine"
                  > Stock Quarantine
                  <span />
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Created By</label>
              <input
                v-model="location.created_by_name"
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
                v-model="location.updated_by_name"
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
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Status</label><br>
              <span
                v-if="location.status === 1"
                class="btn btn-success"
              > Active </span>
              <span
                v-else
                class="btn btn-danger"
              > Inactive </span>
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
      location   : [],
      createdDate: '',
      updatedDate: '',
    }
  },
  async mounted () {
    await this.$store.dispatch('location/getLocationDetail', { idLocation: this.$route.params.id })
    this.location    = this.$store.getters['location/getLocationDetail'].result
    this.createdDate = moment(this.location.created_at).format('DD/MM/Y HH:mm:ss')
    this.updatedDate = moment(this.location.updated_at).format('DD/MM/Y HH:mm:ss')
  },
}
</script>
