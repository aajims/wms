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
              Warehouse Detail
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/master/warehouse"
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
                v-model="warehouse.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Code</label>
              <input
                v-model="warehouse.code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Email</label>
              <input
                v-model="warehouse.email"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Phone</label>
              <input
                v-model="warehouse.phone"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Capacity</label>
              <input
                v-model="warehouse.capacity"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>PIC</label>
              <input
                v-model="warehouse.pic"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="address">Address</label>
              <textarea
                v-model="warehouse.address"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label for="description">Description</label>
              <textarea
                v-model="warehouse.description"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="country">Country</label>
              <input
                v-model="warehouse.country_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label for="state">State</label>
              <input
                v-model="warehouse.state_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="city">City</label>
              <input
                v-model="warehouse.city_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label for="district">District</label>
              <input
                v-model="warehouse.district_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Postcode</label>
              <input
                v-model="warehouse.zip_code"
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
              <label>Created By</label>
              <input
                v-model="warehouse.created_by_name"
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
              <label>Updated By</label>
              <input
                v-model="warehouse.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Status</label><br>
              <span
                v-if="warehouse.status === 1"
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
      warehouse  : [],
      createdDate: '',
      updatedDate: '',
    }
  },
  async mounted () {
    await this.$store.dispatch('warehouse/getWarehouseDetail', { idWarehouse: atob(this.$route.params.id) })
    this.warehouse   = this.$store.getters['warehouse/getWarehouseDetail'].result
    this.createdDate = moment(this.warehouse.created_at).format('DD/MM/Y HH:mm:ss')
    this.updatedDate = moment(this.warehouse.updated_at).format('DD/MM/Y HH:mm:ss')
  },
}
</script>
